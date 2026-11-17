import type { Metadata, Viewport } from 'next'
import { Alegreya, Alegreya_Sans } from 'next/font/google'
import { SITE_URL, WHATSAPP_E164 } from '@/lib/contact'
import RevealObserver from '@/components/motion/RevealObserver'
import { JsonLd, OG_IMAGE, ORGANIZATION_ID } from '@/lib/seo'
import './globals.css'

const alegreya = Alegreya({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-alegreya',
  display: 'swap',
})

const alegreyaSans = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-alegreya-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#141936',
  viewportFit: 'cover',
}

// Título e descrição no tamanho que o Google mostra inteiro (até ~60 e ~155 caracteres).
const title = 'Festário: salão e serviços de festa num lugar só'
const description =
  'Encontre salão de festas com a data livre, reserve online e contrate buffet, decoração, doces, foto e música para o mesmo dia. Grátis para quem faz a festa.'

export const metadata: Metadata = {
  title: { default: title, template: '%s | Festário' },
  description,
  applicationName: 'Festário',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Festário',
    locale: 'pt_BR',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
  // O número do WhatsApp aparece como texto: sem isso o iOS o transforma em link de ligação
  formatDetection: { telephone: false },
}

// Vale para o site todo. Os dados de cada página (produto, perguntas, trilha) ficam na própria página.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Festário',
      slogan: 'Data marcada, festa garantida.',
      url: SITE_URL,
      // O Google pede logo em formato raster de pelo menos 112 px
      logo: `${SITE_URL}/apple-icon.png`,
      ...(WHATSAPP_E164 && {
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: WHATSAPP_E164,
          areaServed: 'BR',
          availableLanguage: 'pt-BR',
        },
      }),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Festário',
      url: SITE_URL,
      inLanguage: 'pt-BR',
      publisher: { '@id': ORGANIZATION_ID },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${alegreya.variable} ${alegreyaSans.variable}`}>
      <body>
        <JsonLd data={structuredData} />
        {children}
        <RevealObserver />
      </body>
    </html>
  )
}
