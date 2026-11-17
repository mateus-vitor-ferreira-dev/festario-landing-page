import type { Metadata } from 'next'
import Steps from '@/components/landing/Steps'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import Footer from '@/components/landing/Footer'
import SectionHeader from '@/components/landing/SectionHeader'
import CategoryFlags from '@/components/prestadores/CategoryFlags'
import QuoteRequestCard from '@/components/prestadores/QuoteRequestCard'
import { PROVIDER_FAQS } from '@/content/faqs'
import { APP_PROVIDER_LOGIN_URL, APP_PROVIDER_SIGNUP_URL, APP_SERVICES_URL, SITE_URL } from '@/lib/contact'
import { JsonLd, OG_IMAGE, breadcrumbSchema, faqPageSchema } from '@/lib/seo'

const title = 'Prestadores de festa: receba pedidos de orçamento'
const description =
  'Buffet, decoração, doces, foto, música e mais: crie o perfil do seu negócio e receba pedidos de orçamento com data e número de convidados. Grátis nesta fase.'
const url = `${SITE_URL}/prestadores`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/prestadores' },
  openGraph: {
    title: `${title} | Festário`,
    description,
    url: '/prestadores',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Festário',
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image', title: `${title} | Festário`, description, images: [OG_IMAGE.url] },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [faqPageSchema(PROVIDER_FAQS, url), breadcrumbSchema([{ name: 'Para prestadores', url }])],
}

const steps = [
  { title: 'Conte o que você faz', text: 'Escolha as categorias, a cidade e até onde você atende, e o preço "a partir de".' },
  { title: 'Mostre o trabalho', text: 'Mande fotos de festas que você já fez e cadastre os pacotes com preço.' },
  { title: 'Publique e responda', text: 'Os pedidos chegam por e-mail e WhatsApp. Você responde com o valor pelo painel.' },
]

const gains = [
  {
    title: 'Só aparece quem está livre',
    text: 'Quem procura escolhe a data da festa. Marque na agenda os dias em que você já tem compromisso e ninguém pede orçamento para eles.',
  },
  {
    title: 'O pedido chega completo',
    text: 'Data, tipo de festa, número de convidados, o pacote de interesse e o que a pessoa precisa. Você responde sem precisar perguntar tudo de novo.',
  },
  {
    title: 'Os salões indicam você',
    text: 'O dono do salão pode marcar você como fornecedor parceiro. Você aparece primeiro para quem reserva lá, com o selo "Indicado pelo salão".',
  },
  {
    title: 'Avaliação só de quem contratou',
    text: 'Só avalia quem fechou com você pela plataforma, depois da festa. Você pode responder cada avaliação.',
  },
]

const primaryCta =
  'inline-flex items-center justify-center min-h-13 px-7 rounded-full text-base font-bold transition-colors duration-200'

export default function ProvidersPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <header className="absolute top-0 inset-x-0 z-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-[68px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center min-h-11" aria-label="Festário, página inicial">
            <Logo tone="dark" title="" className="h-8 w-auto" />
          </Link>
          <nav aria-label="Principal" className="flex items-center gap-1">
            <Link href="/para-saloes" className="hidden sm:inline-flex items-center min-h-11 px-3 rounded-md text-[15px] font-medium text-nevoa-texto hover:text-white">
              Para salões
            </Link>
            <a href={APP_PROVIDER_LOGIN_URL} className="inline-flex items-center min-h-11 px-4 rounded-lg text-[15px] font-bold text-white hover:bg-white/10">
              Entrar
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section aria-labelledby="topo" className="on-dark relative bg-anil-escuro text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-[clamp(120px,18vh,180px)] pb-16 md:pb-24">
            <h1 id="topo" className="font-display font-semibold text-[clamp(2.6rem,7vw,5.75rem)] leading-[1.02] tracking-[-0.01em] max-w-[12em]">
              Quem está montando a festa procura você aqui
            </h1>
            <p className="mt-6 text-lg sm:text-2xl leading-relaxed text-nevoa-texto max-w-[38rem]">
              Crie o perfil do seu negócio no Festário e receba pedidos de orçamento com a data, o número de convidados e o tipo de
              festa. Grátis nesta fase.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href={APP_PROVIDER_SIGNUP_URL} className={`${primaryCta} bg-anil-claro text-noite hover:bg-white`}>
                Criar o perfil do meu negócio
              </a>
              <a href={APP_SERVICES_URL} className={`${primaryCta} border border-white/35 text-white font-medium hover:bg-white/10`}>
                Ver a vitrine de serviços
              </a>
            </div>
            <div className="mt-14 md:mt-20">
              <CategoryFlags />
            </div>
          </div>
        </section>

        <section aria-labelledby="pedido" className="bg-nevoa py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
            <SectionHeader id="pedido" title="O pedido chega pronto para responder" className="">
              Nada de &ldquo;oi, quanto custa?&rdquo; sem data. Quem pede orçamento já escolheu o dia, conta quantos convidados vão e o que
              precisa. Você responde com o valor e uma mensagem, e o cliente recebe o seu WhatsApp para combinar os detalhes.
            </SectionHeader>
            <QuoteRequestCard />
          </div>
        </section>

        <section aria-labelledby="como-comecar" className="bg-papel py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <SectionHeader id="como-comecar" title="Três passos para começar" />
            <Steps steps={steps} tone="pitanga" className="md:grid-cols-3" />
          </div>
        </section>

        <section aria-labelledby="o-que-ganha" className="bg-nevoa py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <SectionHeader id="o-que-ganha" title="Feito para quem vive de festa" />
            <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {gains.map((g) => (
                <div key={g.title}>
                  <dt className="text-xl font-bold text-anil-escuro">{g.title}</dt>
                  <dd className="mt-2 text-lg leading-relaxed text-grafite max-w-[34rem]">{g.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="duvidas-prestadores" className="bg-papel py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <SectionHeader id="duvidas-prestadores" title="Dúvidas de quem trabalha com festas" className="" />
            <div className="border-t border-linha">
              {PROVIDER_FAQS.map((f) => (
                <details key={f.q} className="group border-b border-linha">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold text-anil-escuro [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown size={20} aria-hidden="true" className="flex-shrink-0 text-anil transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="pb-5 pr-8 text-lg leading-relaxed text-grafite">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="comece" className="on-dark bg-anil-escuro text-white py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 id="comece" className="font-display font-semibold text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.05]">
                A próxima festa da cidade pode ter o seu trabalho
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-nevoa-texto">Leva poucos minutos. Você publica quando o perfil estiver do seu jeito.</p>
            </div>
            <a href={APP_PROVIDER_SIGNUP_URL} className={`${primaryCta} bg-milho text-anil-escuro hover:bg-white flex-shrink-0`}>
              Criar o perfil do meu negócio
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
