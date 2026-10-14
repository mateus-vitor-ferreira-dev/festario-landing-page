/** Canais de contato do Recanto Vila Rica — fonte única para toda a landing. */
export const WHATSAPP_URL = 'https://wa.me/5535999718824'
export const PHONE_DISPLAY = '(35) 99971-8824'
export const PHONE_TEL = 'tel:+5535999718824'
export const INSTAGRAM_URL = 'https://instagram.com/recanto.vilarica'
export const INSTAGRAM_HANDLE = '@recanto.vilarica'
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Rua+Bernardino+Antônio+Tomás,+21,+Jardim+Vila+Rica,+Lavras,+MG'
export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Rua%20Bernardino%20Antônio%20Tomás,%2021,%20Jardim%20Vila%20Rica,%20Lavras,%20MG&z=16&output=embed'

/** true quando a pessoa pediu menos movimento no sistema. */
export function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
