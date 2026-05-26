import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'fs'
import { resolve } from 'path'

// Local dev plugin: roda os handlers em /api/*.js como serverless functions
// pra que `npm run dev` funcione igual ao deploy na Vercel.
function localApiPlugin() {
  return {
    name: 'local-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith('/api/')) return next()

        const [pathOnly, qs = ''] = req.url.split('?')
        const handlerName = pathOnly.replace(/^\/api\//, '').replace(/\/$/, '')
        const handlerFile = resolve(process.cwd(), 'api', `${handlerName}.js`)
        if (!existsSync(handlerFile)) {
          res.statusCode = 404
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'not_found', message: `Handler /api/${handlerName} não existe.` }))
          return
        }

        try {
          const mod = await server.ssrLoadModule(handlerFile)
          const handler = mod.default
          const adaptedReq = await adaptRequest(req, qs)
          const adaptedRes = adaptResponse(res)
          await handler(adaptedReq, adaptedRes)
        } catch (err) {
          res.statusCode = 500
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'handler_error', message: err.message }))
        }
      })
    },
  }
}

async function adaptRequest(req, qs) {
  const query = Object.fromEntries(new URLSearchParams(qs))
  let body = null
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    body = await new Promise((resolveBody, rejectBody) => {
      let raw = ''
      req.on('data', (chunk) => { raw += chunk })
      req.on('end', () => {
        if (!raw) return resolveBody(null)
        try { resolveBody(JSON.parse(raw)) } catch { resolveBody(raw) }
      })
      req.on('error', rejectBody)
    })
  }
  return {
    method: req.method,
    headers: req.headers,
    url: req.url,
    query,
    body,
    on: req.on.bind(req),
  }
}

function adaptResponse(res) {
  const adapted = {
    statusCode: 200,
    _headers: {},
    setHeader(name, value) {
      res.setHeader(name, value)
      this._headers[name.toLowerCase()] = value
      return this
    },
    status(code) {
      this.statusCode = code
      res.statusCode = code
      return this
    },
    json(payload) {
      res.statusCode = this.statusCode
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify(payload))
      return this
    },
    send(payload) {
      res.statusCode = this.statusCode
      res.end(typeof payload === 'string' ? payload : JSON.stringify(payload))
      return this
    },
    end(payload) {
      res.end(payload)
      return this
    },
  }
  return adapted
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  for (const k of ['GEMINI_API_KEY', 'GOOGLE_PLACES_API_KEY']) {
    if (env[k] && !process.env[k]) process.env[k] = env[k]
  }
  return { plugins: [react(), localApiPlugin()] }
})
