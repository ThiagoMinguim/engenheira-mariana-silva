export const WHATSAPP_PHONE = '553484262358'

export const whatsappMessages = {
  google:
    'Olá, Mariana! Vim pelo Google e gostaria de orientação sobre um serviço de engenharia diagnóstica.',
  site:
    'Olá, Mariana! Vim pelo site e gostaria de orientação sobre um serviço de engenharia diagnóstica.',
  vistoria:
    'Olá, Mariana! Vim pelo site e gostaria de saber mais sobre vistoria técnica.',
  laudo:
    'Olá, Mariana! Vim pelo site e preciso de orientação sobre laudo técnico.',
  inspecao:
    'Olá, Mariana! Vim pelo site e gostaria de informações sobre inspeção predial.',
  assistencia:
    'Olá, Mariana! Vim pelo site e gostaria de orientação sobre assistência técnica.',
  pericia:
    'Olá, Mariana! Vim pelo site e gostaria de informações sobre perícia em ações judiciais.',
  manutencao:
    'Olá, Mariana! Vim pelo site e gostaria de informações sobre plano de manutenção predial.',
  duvida:
    'Olá, Mariana! Vim pelo site e gostaria de tirar uma dúvida sobre qual serviço preciso.',
}

export function getWhatsAppUrl(message = whatsappMessages.site) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}
