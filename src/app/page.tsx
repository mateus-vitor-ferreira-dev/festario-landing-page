import Navbar from '@/components/landing/Navbar'
import HeroSection from '@/components/landing/HeroSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import ForClientsSection from '@/components/landing/ForClientsSection'
import ShowcaseSection from '@/components/landing/ShowcaseSection'
import PlansSection from '@/components/landing/PlansSection'
import FaqSection from '@/components/landing/FaqSection'
import CTASection from '@/components/landing/CTASection'
import Footer from '@/components/landing/Footer'
import WhatsAppFloat from '@/components/landing/WhatsAppFloat'

// O calendário do hero mostra o mês corrente. A página é estática, gerada no build; o
// rebuild diário (.github/workflows/rebuild-diario.yml) a mantém no mês certo.

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ForClientsSection />
        <ShowcaseSection />
        <PlansSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
