import type { Metadata, Viewport } from 'next'
import { Alegreya, Alegreya_Sans } from 'next/font/google'
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
  themeColor: '#133428',
  viewportFit: 'cover',
}

const siteUrl = 'https://recanto-vila-rica-landing.vercel.app'

export const metadata: Metadata = {
  title: 'Recanto Vila Rica — Espaço para Eventos em Lavras, MG',
  description:
    'O espaço ideal para aniversários, casamentos, formaturas e confraternizações em Lavras, MG. Reserve pelo WhatsApp: (35) 99971-8824.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  keywords: [
    'espaço para eventos Lavras',
    'salão de festas Lavras MG',
    'aniversário Lavras',
    'casamento Lavras',
    'formatura Lavras',
    'Recanto Vila Rica',
    'aluguel de espaço para festa Lavras',
  ],
  openGraph: {
    title: 'Recanto Vila Rica — Espaço para Eventos em Lavras, MG',
    description:
      'Celebre momentos especiais com sofisticação e acolhimento. Aniversários, casamentos, formaturas e mais. Reserve agora pelo WhatsApp.',
    url: siteUrl,
    siteName: 'Recanto Vila Rica',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/assets/salao.webp',
        width: 1200,
        height: 630,
        alt: 'Salão principal do Recanto Vila Rica em Lavras, MG',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recanto Vila Rica — Espaço para Eventos em Lavras, MG',
    description: 'Celebre momentos especiais com sofisticação e acolhimento em Lavras, MG.',
    images: ['/assets/salao.webp'],
  },
  robots: { index: true, follow: true },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: 'Recanto Vila Rica',
  description:
    'Espaço para eventos em Lavras, MG. Ideal para aniversários, casamentos, formaturas e confraternizações.',
  url: siteUrl,
  telephone: '+55-35-99971-8824',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Bernardino Antônio Tomás, 21',
    addressLocality: 'Lavras',
    addressRegion: 'MG',
    postalCode: '37203-775',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -21.2445,
    longitude: -44.9997,
  },
  sameAs: ['https://instagram.com/recanto.vilarica'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '23:00',
  },
  priceRange: 'R$649 - R$999',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${alegreya.variable} ${alegreyaSans.variable}`}>
      <head>
        {/* Sem JavaScript, o conteúdo do hero não pode ficar invisível esperando o GSAP */}
        <noscript>
          <style>{'.gsap-hidden{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
