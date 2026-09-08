// Rótulo da conversão do Google Ads (tag nativa).
//
// DEIXAR VAZIO. A conversão de WhatsApp já é medida por outro caminho: o evento
// whatsapp_click abaixo é capturado pelo GA4 e importado no Google Ads como a
// ação "Contato (Evento do Google Analytics whatsapp_click)". Preencher isto
// criaria medição duplicada.
//
// Só faz sentido usar a tag nativa se um dia a importação do GA4 for desligada.
// Nesse caso o valor vem de Google Ads > Metas > Conversões > tela da tag, no
// formato 'AW-123456789/AbC-D_efGhIjKlM', e o ID da conta ('AW-123456789') vai
// em window.GOOGLE_ADS_ID no index.html.
export const GOOGLE_ADS_CONVERSION = ''

export function trackWhatsAppClick(label = 'Clique no WhatsApp') {
  if (typeof window.gtag !== 'function') return

  // GA4 — sempre dispara, serve pra ver quais botões geram mais contato
  window.gtag('event', 'whatsapp_click', {
    event_category: 'Lead',
    event_label: label,
  })

  // Google Ads — só dispara quando a conversão já foi criada na conta
  if (GOOGLE_ADS_CONVERSION) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONVERSION,
    })
  }
}
