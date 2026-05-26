// Best-effort extraction of name/phone/address/website from text copied
// from a Google Maps business listing.
export function extractFromText(text) {
  if (!text) return {}
  const result = {}

  const phoneMatches = text.match(/(\+?55\s?)?\(?\d{2}\)?[\s\-.]?\d{4,5}[\s\-.]?\d{4}/g)
  if (phoneMatches?.length) {
    result.phone = phoneMatches[0].replace(/\s+/g, ' ').trim()
  }

  const websiteMatch = text.match(/https?:\/\/[^\s)]+/) ||
    text.match(/\b(?:www\.)?[a-z0-9-]+\.(?:com|com\.br|net|br)(?:\/[^\s)]*)?/i)
  if (websiteMatch) {
    let w = websiteMatch[0]
    if (!/^https?:/.test(w)) w = `https://${w}`
    result.website = w
  }

  const cepIdx = text.search(/\b\d{5}-?\d{3}\b/)
  if (cepIdx >= 0) {
    const upTo = text.slice(0, cepIdx + 9)
    const lines = upTo.split(/\n/).map((l) => l.trim()).filter(Boolean)
    const last = lines.slice(-3).join(', ')
    result.address = last
  } else {
    const addrLine = text.split(/\n/).map((l) => l.trim()).find((l) =>
      /(rua|av\.?|avenida|alameda|rod\.?|rodovia|praça|travessa|r\.)\s/i.test(l),
    )
    if (addrLine) result.address = addrLine
  }

  const firstLine = text.split(/\n/).map((l) => l.trim()).find(Boolean)
  if (firstLine && firstLine.length < 100) {
    result.name = firstLine
  }

  return result
}
