import { APP_SIGNUP_URL, OWNER_CTA_PROPS } from '@/lib/contact'
import BookingCard from './BookingCard'

export default function HeroSection() {
  return (
    <section className="on-dark relative bg-anil-escuro text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-[112px] pb-16 lg:pt-36 lg:pb-28 grid gap-14 lg:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
        <div className="max-w-xl">
          <h1 className="font-display font-semibold text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.1rem]">
            As reservas do seu salão de festas sem o vaivém do WhatsApp
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-nevoa-texto max-w-[34rem]">
            O Festário junta agenda, cotação, contrato e pagamento num lugar só. O cliente vê as
            datas livres e reserva sozinho; você acompanha tudo pelo painel.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              {...OWNER_CTA_PROPS}
              className="inline-flex items-center justify-center min-h-13 px-7 rounded-lg bg-anil-claro text-noite text-base font-bold hover:bg-white transition-colors duration-200"
            >
              Quero o Festário no meu salão
            </a>
            <a
              href={APP_SIGNUP_URL}
              className="inline-flex items-center justify-center min-h-13 px-7 rounded-lg border border-white/35 text-white text-base font-medium hover:bg-white/10 transition-colors duration-200"
            >
              Quero reservar uma festa
            </a>
          </div>
        </div>

        {/* Assinatura: o calendário com o varal de bandeirinhas, como no login do app */}
        <BookingCard className="text-[clamp(12px,3.6vw,17px)] lg:text-[clamp(13px,1.25vw,18px)] justify-self-center lg:justify-self-end mr-2 sm:mr-4" />
      </div>
    </section>
  )
}
