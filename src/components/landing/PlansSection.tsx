import { Check } from 'lucide-react'
import { HAS_CONTACT, OWNER_CTA_PROPS } from '@/lib/contact'

// Uma assinatura só: R$ 100 por mês por estabelecimento, com todos os espaços, e o primeiro
// mês grátis. Sem cobrança automática por enquanto: o dono entra por convite.
const included = [
  'Todos os espaços do seu salão, sem pagar a mais por eles',
  'Reservas, clientes e contratos sem limite',
  'Pacotes com valor fixo, por hora ou por convidado, e adicionais',
  'Vitrine do salão, negociação por chat e promoções',
]

export default function PlansSection() {
  return (
    <section aria-labelledby="preco" className="bg-papel py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-center">
        <header className="max-w-xl">
          <h2 id="preco" className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] text-anil-escuro">
            Um preço só, com tudo dentro
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-grafite">
            Uma assinatura por estabelecimento. Tem três salões no mesmo endereço, ou espaços diferentes? Continua a mesma
            assinatura.
          </p>
        </header>

        <div className="rounded-3xl bg-anil-escuro text-white p-7 sm:p-10 on-dark">
          <p className="flex items-baseline gap-3">
            <span className="font-display font-semibold text-[clamp(3.5rem,9vw,6rem)] leading-none tabular-nums">R$ 100</span>
            <span className="text-xl text-nevoa-texto">por mês</span>
          </p>
          <p className="mt-3 inline-flex items-center rounded-full bg-milho px-4 py-1.5 text-base font-bold text-anil-escuro">
            O primeiro mês é grátis
          </p>

          <ul className="mt-8 space-y-3 border-t border-white/15 pt-6">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-lg leading-snug">
                <Check size={22} strokeWidth={2.5} aria-hidden="true" className="mt-0.5 flex-shrink-0 text-anil-claro" />
                {item}
              </li>
            ))}
          </ul>

          <a
            {...OWNER_CTA_PROPS}
            className="mt-9 inline-flex w-full sm:w-auto items-center justify-center min-h-13 px-7 rounded-full bg-anil-claro text-noite text-base font-bold hover:bg-white transition-colors duration-200"
          >
            {HAS_CONTACT ? 'Quero o primeiro mês grátis' : 'Entrar no app'}
          </a>
        </div>
      </div>
    </section>
  )
}
