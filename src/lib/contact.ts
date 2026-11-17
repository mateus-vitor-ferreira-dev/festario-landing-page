/**
 * Links e canais do Festário: fonte única para toda a landing.
 * Variáveis NEXT_PUBLIC_* são embutidas no build (ver .env.example).
 */

/** Endereço do app de reservas (sem barra no fim). */
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:5173').replace(/\/+$/, '')

// Em produção os botões levam ao cadastro e ao login: endereço sem HTTPS (ou o padrão de dev) quebra
// o build em vez de ir ao ar.
if (process.env.NODE_ENV === 'production' && !APP_URL.startsWith('https://')) {
  throw new Error(`NEXT_PUBLIC_APP_URL precisa ser https em produção (veio "${APP_URL}").`)
}
export const APP_SIGNUP_URL = `${APP_URL}/cadastro`
export const APP_LOGIN_URL = `${APP_URL}/login`
/** Vitrine pública de salões: quem quer reservar vê os salões antes de criar conta. */
export const APP_SALONS_URL = `${APP_URL}/saloes`
/** Vitrine de serviços de festa (marketplace). */
export const APP_SERVICES_URL = `${APP_URL}/servicos`
/** Prestador novo: cria a conta e volta direto no painel "Meu negócio". */
export const APP_PROVIDER_SIGNUP_URL = `${APP_URL}/cadastro?voltar=${encodeURIComponent('/meu-negocio')}`
/** Quem já tem conta entra e cai no "Meu negócio". */
export const APP_PROVIDER_LOGIN_URL = `${APP_URL}/login?voltar=${encodeURIComponent('/meu-negocio')}`

/** Endereço público desta landing: canonical, Open Graph, sitemap e robots. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://festario.com.br').replace(
  /\/+$/,
  ''
)

const OWNER_MESSAGE = 'Olá! Tenho um salão de festas e quero conhecer o Festário.'

/** WhatsApp comercial do Festário (com DDI e DDD, só dígitos). */
const DEFAULT_WHATSAPP = '5535997460058'
const whatsappDigits = (process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || DEFAULT_WHATSAPP).replace(/\D/g, '')

/** (35) 99746-0058 a partir de 5535997460058; outros formatos aparecem como vieram. */
function formatBrPhone(digits: string) {
  const local = digits.startsWith('55') ? digits.slice(2) : digits
  const m = local.match(/^(\d{2})(\d{4,5})(\d{4})$/)
  return m ? `(${m[1]}) ${m[2]}-${m[3]}` : `+${digits}`
}

export const WHATSAPP_URL = whatsappDigits
  ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(OWNER_MESSAGE)}`
  : null
export const WHATSAPP_DISPLAY = whatsappDigits ? formatBrPhone(whatsappDigits) : null
/** +5535997460058: o formato dos dados estruturados. */
export const WHATSAPP_E164 = whatsappDigits ? `+${whatsappDigits}` : null

/** E-mail comercial: opcional, só aparece se NEXT_PUBLIC_CONTACT_EMAIL estiver definido. */
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null
export const EMAIL_DISPLAY = contactEmail
export const EMAIL_URL = contactEmail
  ? `mailto:${contactEmail}?subject=${encodeURIComponent('Quero o Festário no meu salão')}`
  : null

/**
 * Destino do CTA de dono de salão: WhatsApp, senão e-mail; sem nenhum contato
 * configurado, cai no login do app (o dono entra por convite).
 */
export const OWNER_CTA_URL = WHATSAPP_URL ?? EMAIL_URL ?? APP_LOGIN_URL
export const OWNER_CTA_EXTERNAL = OWNER_CTA_URL.startsWith('https://wa.me')
export const HAS_CONTACT = Boolean(WHATSAPP_URL || EMAIL_URL)

/** Vitrine: o Recanto Vila Rica, primeiro salão no Festário. */
export const RECANTO_INSTAGRAM_URL = 'https://instagram.com/recanto.vilarica'
export const RECANTO_INSTAGRAM_HANDLE = '@recanto.vilarica'

const EXTERNAL = { target: '_blank', rel: 'noopener noreferrer' } as const

/** Props prontas para o link do dono de salão (abre em nova aba quando sai do site). */
export const OWNER_CTA_PROPS = { href: OWNER_CTA_URL, ...(OWNER_CTA_EXTERNAL ? EXTERNAL : {}) }
