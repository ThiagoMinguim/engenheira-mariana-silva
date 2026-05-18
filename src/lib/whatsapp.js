export const WHATSAPP_PHONE = '553484262358'
const DEFAULT_WHATSAPP_MESSAGE = 'Olá, Mariana! Vim pelo site.'

export const whatsappMessages = {
  google: DEFAULT_WHATSAPP_MESSAGE,
  site: DEFAULT_WHATSAPP_MESSAGE,
  vistoria: DEFAULT_WHATSAPP_MESSAGE,
  laudo: DEFAULT_WHATSAPP_MESSAGE,
  inspecao: DEFAULT_WHATSAPP_MESSAGE,
  assistencia: DEFAULT_WHATSAPP_MESSAGE,
  pericia: DEFAULT_WHATSAPP_MESSAGE,
  manutencao: DEFAULT_WHATSAPP_MESSAGE,
  duvida: DEFAULT_WHATSAPP_MESSAGE,
}

export function getWhatsAppUrl(message = whatsappMessages.site) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}
