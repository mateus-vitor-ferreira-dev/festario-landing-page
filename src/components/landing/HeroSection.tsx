import { APP_SALONS_URL, OWNER_CTA_PROPS } from '@/lib/contact'
import Varal from '@/components/brand/Varal'

/*
 * Abertura: o título em tamanho de cartaz sobre o anil e o varal atravessando a tela, com as
 * bandeirinhas caindo no lugar uma depois da outra (o único movimento que não depende da
 * rolagem). Logo abaixo começa a cena da reserva.
 */

export default function HeroSection() {
  return (
    <section className="on-dark relative bg-anil-escuro text-white overflow-hidden min-h-svh flex flex-col">
      <Varal count={9} width={400} className="h-[52px] sm:hidden" />
      <Varal count={23} width={1200} className="hidden sm:block h-[clamp(60px,8vw,110px)]" />
      <div className="relative max-w-6xl w-full mx-auto px-5 sm:px-6 pt-[clamp(150px,22vh,230px)] pb-16 flex-1 flex flex-col justify-center">
        <h1 className="font-display font-semibold text-[clamp(2.9rem,8.4vw,7.25rem)] leading-[0.98] tracking-[-0.01em] max-w-[11.5em]">
          As reservas do seu salão de festas sem o vaivém do WhatsApp
        </h1>
        <p className="mt-8 text-lg sm:text-2xl leading-relaxed text-nevoa-texto max-w-[36rem]">
          O Festário junta agenda, cotação, contrato e pagamento num lugar só. O cliente vê as datas livres e
          reserva sozinho; você acompanha tudo pelo painel.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            {...OWNER_CTA_PROPS}
            className="inline-flex items-center justify-center min-h-13 px-7 rounded-full bg-anil-claro text-noite text-base font-bold hover:bg-white transition-colors duration-200"
          >
            Quero o Festário no meu salão
          </a>
          <a
            href={APP_SALONS_URL}
            className="inline-flex items-center justify-center min-h-13 px-7 rounded-full border border-white/35 text-white text-base font-medium hover:bg-white/10 transition-colors duration-200"
          >
            Quero reservar uma festa
          </a>
        </div>

        <a
          href="#uma-reserva"
          className="mt-16 self-start inline-flex items-center gap-3 min-h-11 text-nevoa-texto hover:text-white transition-colors duration-200"
        >
          <span className="relative block w-px h-10 bg-white/25 overflow-hidden" aria-hidden="true">
            <span className="scroll-cue absolute inset-x-0 top-0 h-4 bg-milho" />
          </span>
          Role e veja uma reserva acontecer
        </a>
      </div>
    </section>
  )
}
