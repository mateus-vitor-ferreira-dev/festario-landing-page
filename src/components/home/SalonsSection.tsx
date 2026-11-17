import Link from 'next/link'
import { Check } from 'lucide-react'
import { OWNER_CTA_PROPS } from '@/lib/contact'
import Stamp from '@/components/landing/Stamp'

const points = [
  'O cliente vê as datas livres e reserva sozinho, a qualquer hora',
  'Pacotes cobrados do seu jeito: valor fixo, por hora ou por convidado',
  'Contrato em PDF com aceite e controle do sinal recebido',
  'Os fornecedores com quem você já trabalha aparecem como parceiros do salão',
]

/** Resumo para o dono de salão; a página completa é /para-saloes. */
export default function SalonsSection() {
  return (
    <section aria-labelledby="saloes" className="bg-papel py-20 md:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:items-center">
        <div>
          <h2 id="saloes" className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] text-anil-escuro">
            Tem um salão de festas?
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-grafite">
            O Festário cuida da agenda, da cotação, do contrato e do sinal. Você para de responder &ldquo;o sábado está
            livre?&rdquo; e acompanha tudo pelo painel.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-lg leading-snug text-anil-escuro">
                <Check size={22} strokeWidth={2.5} aria-hidden="true" className="mt-0.5 flex-shrink-0 text-pitanga" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="" className="relative border-t-4 border-pitanga bg-nevoa px-7 py-8 sm:px-9">
          <Stamp className="-top-12 right-3 sm:-right-6">1º mês grátis</Stamp>
          <p className="flex items-baseline gap-3 text-anil-escuro">
            <span className="font-display font-semibold text-6xl leading-none tabular-nums">R$ 100</span>
            <span className="text-lg text-grafite">por mês</span>
          </p>
          <p className="mt-3 text-lg leading-relaxed text-grafite">
            Uma assinatura por estabelecimento, com todos os espaços. O Festário não fica com parte das reservas.
          </p>
          <div className="mt-7 flex flex-col gap-3">
            <Link
              href="/para-saloes"
              className="press inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-anil text-white text-base font-bold hover:bg-anil-escuro transition-colors duration-200"
            >
              Conhecer o Festário para salões
            </Link>
            <a
              {...OWNER_CTA_PROPS}
              className="press inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-anil/30 bg-papel text-anil text-base font-bold hover:border-anil transition-colors duration-200"
            >
              Falar com a gente
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
