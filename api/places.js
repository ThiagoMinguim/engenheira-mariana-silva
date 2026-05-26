// Vercel Node serverless function — Google Places Text Search (New v1 API).
// GET /api/places?query=imobili%C3%A1rias%20em%20Uberaba%20MG
//
// Required env var: GOOGLE_PLACES_API_KEY  (Google Cloud → Places API → API key)

const ENDPOINT = 'https://places.googleapis.com/v1/places:searchText'
const FIELD_MASK = [
  'places.id',
  'places.displayName',
  'places.formattedAddress',
  'places.internationalPhoneNumber',
  'places.nationalPhoneNumber',
  'places.websiteUri',
  'places.googleMapsUri',
  'places.businessStatus',
  'places.types',
  'places.rating',
  'places.userRatingCount',
].join(',')

export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error: 'missing_key',
      message: 'GOOGLE_PLACES_API_KEY não configurada. Veja o setup no painel da Vercel.',
    })
  }

  const query = (req.query?.query || '').toString().trim()
  if (!query) {
    return res.status(400).json({ error: 'bad_request', message: 'Parâmetro "query" é obrigatório.' })
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': FIELD_MASK,
      },
      body: JSON.stringify({
        textQuery: query,
        languageCode: 'pt-BR',
        regionCode: 'BR',
        pageSize: 20,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      return res.status(response.status).json({
        error: 'places_api_error',
        status: response.status,
        message: errText.slice(0, 500),
      })
    }

    const data = await response.json()
    const results = (data.places || [])
      .filter((p) => p.businessStatus !== 'CLOSED_PERMANENTLY')
      .map((p) => ({
        placeId: p.id,
        name: p.displayName?.text || '',
        address: p.formattedAddress || '',
        phone: p.internationalPhoneNumber || p.nationalPhoneNumber || '',
        website: p.websiteUri || '',
        mapsUrl: p.googleMapsUri || '',
        rating: p.rating || null,
        reviewCount: p.userRatingCount || 0,
        types: p.types || [],
      }))

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    return res.status(200).json({ query, count: results.length, results })
  } catch (err) {
    return res.status(500).json({ error: 'internal', message: err.message })
  }
}
