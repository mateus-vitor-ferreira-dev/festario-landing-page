import type { Metadata, Viewport } from 'next'
import { Alegreya, Alegreya_Sans } from 'next/font/google'
import { APP_URL, SITE_URL } from '@/lib/contact'
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

const title = 'Festário: reservas para salões de festa'
const description =
  'Agenda com datas livres, pacotes cobrados do jeito do seu salão (valor fixo, por hora ou por convidado), contrato em PDF e controle do sinal. O cliente reserva sozinho e o dono acompanha tudo pelo painel. R$ 100 por mês, com o primeiro mês grátis.'

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'Festário',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  keywords: [
    'sistema de reservas para salão de festas',
    'agenda de salão de festas',
    'gestão de espaço de eventos',
    'reserva online de salão',
    'contrato de locação de salão',
    'Festário',
  ],
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Festário',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-festario.png',
        width: 1200,
        height: 630,
        alt: 'Logotipo do Festário sob um varal de bandeirinhas, com o slogan Data marcada, festa garantida.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-festario.png'],
  },
  robots: { index: true, follow: true },
}

// Sem avaliações: ainda não existem, então não entram nos dados estruturados. O preço é o da assinatura.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Festário',
      url: SITE_URL,
      logo: `${SITE_URL}/brand/festario-simbolo.svg`,
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Festário',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: APP_URL,
      description,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${SITE_URL}/#organization` },
      offers: {
        '@type': 'Offer',
        price: '100.00',
        priceCurrency: 'BRL',
        description: 'Assinatura mensal por estabelecimento, com todos os espaços. Primeiro mês grátis.',
      },
      featureList: [
        'Calendário de disponibilidade com datas bloqueadas e feriados',
        'Pacotes com valor fixo, por hora ou por convidado, e adicionais',
        'Preço diferente por dia da semana e feriado',
        'Reserva online com cotação',
        'Contrato em PDF com aceite',
        'Controle do sinal e dos pagamentos recebidos',
        'Negociação por chat com proposta de preço',
        'Promoções de indicação, fidelidade e sorteio',
        'Painel do dono com reservas, clientes, campanhas e espaços',
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${alegreya.variable} ${alegreyaSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
