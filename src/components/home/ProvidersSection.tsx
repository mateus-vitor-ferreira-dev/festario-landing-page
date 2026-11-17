import Link from 'next/link'
import CategoryFlags from '@/components/prestadores/CategoryFlags'
import { APP_PROVIDER_SIGNUP_URL } from '@/lib/contact'

/** Resumo para quem presta serviço de festa; a página completa é /prestadores. */
export default function ProvidersSection() {
  return (
    <section aria-labelledby="prestadores" className="on-dark bg-anil-escuro text-white py-20 md:py-28 overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <h2 id="prestadores" className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.05]">
            Trabalha com festas?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-nevoa-texto">
            Crie o perfil do seu negócio, mostre as festas que você já fez e receba pedidos de orçamento com a data, o tipo de
            festa e o número de convidados. Quem procura só vê você nos dias em que você está livre. Grátis nesta fase.
          </p>
        </div>

        <div data-reveal="" className="mt-12">
          <CategoryFlags />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3">
          <a
            href={APP_PROVIDER_SIGNUP_URL}
            className="press inline-flex items-center justify-center min-h-13 px-7 rounded-full bg-milho text-anil-escuro text-base font-bold hover:bg-white transition-colors duration-200"
          >
            Criar o perfil do meu negócio
          </a>
          <Link
            href="/prestadores"
            className="press inline-flex items-center justify-center min-h-13 px-7 rounded-full border border-white/35 text-white text-base font-medium hover:bg-white/10 transition-colors duration-200"
          >
            Como funciona para prestadores
          </Link>
        </div>
      </div>
    </section>
  )
}
