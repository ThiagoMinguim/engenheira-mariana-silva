import { useState } from 'react'
import { motion } from 'framer-motion'
import { authenticate } from '../../lib/prospectar/storage'

export default function LoginGate({ onSuccess }) {
  const [token, setToken] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (authenticate(token)) {
      onSuccess()
    } else {
      setError('Senha incorreta.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-cinza dark:bg-grafite-dark">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={submit}
        className="w-full max-w-sm bg-white dark:bg-grafite rounded-2xl shadow-xl shadow-grafite/10 dark:shadow-black/40 border border-cinza-dark/30 dark:border-white/10 overflow-hidden"
      >
        <div className="h-[3px] bg-dourado" />
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <picture>
              <source type="image/webp" srcSet="/logo.webp" />
              <img src="/logo-168.png" alt="" width={64} height={64} className="dark:brightness-0 dark:invert" />
            </picture>
          </div>
          <h1 className="font-heading font-semibold text-xl text-grafite dark:text-white text-center">
            Área privada — Prospecção
          </h1>
          <p className="text-sm text-grafite/55 dark:text-white/50 text-center mt-2">
            Acesso restrito. Digite a senha pra continuar.
          </p>

          <div className="mt-7 space-y-3">
            <input
              type="password"
              autoFocus
              value={token}
              onChange={(e) => { setToken(e.target.value); setError('') }}
              placeholder="Senha"
              className="w-full px-4 py-3 rounded-lg border border-cinza-dark dark:border-white/15 bg-white dark:bg-grafite-dark text-grafite dark:text-white focus:outline-none focus:border-verde dark:focus:border-verde-300 transition"
            />
            {error && (
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            )}
            <button
              type="submit"
              className="shimmer-btn w-full py-3 bg-verde text-white font-semibold text-sm rounded-lg hover:bg-verde-600 transition shadow-md shadow-verde/20"
            >
              Entrar
            </button>
          </div>

          <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new Event('app:navigate')) }} className="block mt-6 text-center text-xs text-grafite/45 dark:text-white/40 hover:text-verde dark:hover:text-verde-300 transition">
            ← Voltar ao site
          </a>
        </div>
      </motion.form>
    </div>
  )
}
