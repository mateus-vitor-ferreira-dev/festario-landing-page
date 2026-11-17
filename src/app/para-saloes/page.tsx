import type { Metadata } from 'next'
import Navbar, { type NavLink } from '@/components/landing/Navbar'
import HeroSection from '@/components/landing/HeroSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import ShowcaseSection from '@/components/landing/ShowcaseSection'
import StorySection from '@/components/landing/StorySection'
import PlansSection from '@/components/landing/PlansSection'
import FaqSection from '@/components/landing/FaqSection'
import CTASection from '@/components/landing/CTASection'
import Footer from '@/components/landing/Footer'
import WhatsAppFloat from '@/components/landing/WhatsAppFloat'
import { SALON_FAQS } from '@/content/faqs'
import { APP_URL, OWNER_CTA_PROPS, SITE_URL } from '@/lib/contact'
import { JsonLd, OG_IMAGE, ORGANIZATION_ID, breadcrumbSchema, faqPageSchema } from '@/lib/seo'

// O calendário da cena da reserva mostra o mês corrente. A página é estática, gerada no build; o
// rebuild diário (.github/workflows/rebuild-diario.yml) a mantém no mês certo.

const title = 'Sistema de reservas para salão de festas'
const description =
  'Agenda online, cotação na hora, contrato em PDF e controle do sinal. O cliente reserva sozinho e você acompanha pelo painel. R$ 100/mês, 1º mês grátis.'
const url = `${SITE_URL}/para-saloes`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/para-saloes' },
  openGraph: {
    title: `${title} | Festário`,
    description,
    url: '/para-saloes',
    siteName: 'Festário',
    locale: 'pt_BR',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image', title: `${title} | Festário`, description, images: [OG_IMAGE.url] },
}

const links: NavLink[] = [
  { label: 'Uma reserva', href: '#uma-reserva' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Preço', href: '#preco' },
  { label: 'Dúvidas', href: '#duvidas' },
]

// Sem avaliações: ainda não existem, então não entram nos dados estruturados. O preço é o da assinatura.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Festário para salões de festa',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: APP_URL,
      description,
      inLanguage: 'pt-BR',
      publisher: { '@id': ORGANIZATION_ID },
      offers: {
        '@type': 'Offer',
        price: '100.00',
        priceCurrency: 'BRL',
        description: 'Assinatura mensal por estabelecimento, com todos os espaços. Primeiro mês grátis.',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '100.00',
          priceCurrency: 'BRL',
          referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
        },
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
        'Fornecedores parceiros indicados pelo salão',
        'Painel do dono com reservas, clientes, campanhas e espaços',
      ],
    },
    faqPageSchema(SALON_FAQS, url),
    breadcrumbSchema([{ name: 'Para salões', url }]),
  ],
}

export default function SalonsPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Navbar
        links={links}
        cta={{ label: 'Quero o Festário', mobileLabel: 'Quero o Festário no meu salão', ...OWNER_CTA_PROPS }}
      />
      <main>
        <HeroSection />
        <StorySection />
        <HowItWorksSection />
        <FeaturesSection />
        <ShowcaseSection />
        <PlansSection />
        <FaqSection faqs={SALON_FAQS} title="Dúvidas de quem tem salão" />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
