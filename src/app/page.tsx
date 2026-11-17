import Navbar, { type NavLink } from '@/components/landing/Navbar'
import HomeHero from '@/components/home/HomeHero'
import PartySection from '@/components/home/PartySection'
import SalonsSection from '@/components/home/SalonsSection'
import ProvidersSection from '@/components/home/ProvidersSection'
import ShowcaseSection from '@/components/landing/ShowcaseSection'
import FaqSection from '@/components/landing/FaqSection'
import Footer from '@/components/landing/Footer'
import { HOME_FAQS } from '@/content/faqs'
import { APP_SALONS_URL, SITE_URL } from '@/lib/contact'
import { JsonLd, faqPageSchema } from '@/lib/seo'

// A home fala com os três públicos: quem faz a festa, o dono de salão e quem presta serviço.
// Cada um tem um resumo aqui e uma página própria (/para-saloes e /prestadores).

const links: NavLink[] = [
  { label: 'Fazer uma festa', href: '#fazer-festa' },
  { label: 'Para salões', href: '#saloes' },
  { label: 'Para prestadores', href: '#prestadores' },
  { label: 'Dúvidas', href: '#duvidas' },
]

const structuredData = { '@context': 'https://schema.org', ...faqPageSchema(HOME_FAQS, `${SITE_URL}/`) }

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Navbar links={links} cta={{ label: 'Procurar salão', mobileLabel: 'Procurar um salão', href: APP_SALONS_URL }} />
      <main>
        <HomeHero />
        <PartySection />
        <SalonsSection />
        <ProvidersSection />
        <ShowcaseSection />
        <FaqSection faqs={HOME_FAQS} className="bg-papel" />
      </main>
      <Footer />
    </>
  )
}
