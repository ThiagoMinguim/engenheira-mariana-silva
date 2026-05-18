// Troque AW-XXXXXXXXX pelo ID e XXXXXXXXXXX pelo rótulo/label da conversão
export function trackWhatsAppClick(label = 'Clique no WhatsApp') {
  if (typeof gtag === 'function') {
    gtag('event', 'whatsapp_click', {
      event_category: 'Lead',
      event_label: label,
    })
    gtag('event', 'conversion', {
      send_to: 'AW-XXXXXXXXX/XXXXXXXXXXX',
    })
  }
}
