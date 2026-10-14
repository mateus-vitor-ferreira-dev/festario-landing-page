import { HAS_CONTACT, OWNER_CTA_PROPS } from '@/lib/contact'
import SectionHeader from './SectionHeader'

// Os três planos que já existem no sistema (FREE, STARTER, PRO), com os nomes do app.
const plans = ['Gratuito', 'Inicial', 'Profissional']

export default function PlansSection() {
  return (
    <section aria-labelledby="planos" className="bg-papel py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader id="planos" title="Planos">
          São três: Gratuito, Inicial e Profissional. Os preços e o que muda de um para outro ainda estão sendo
          fechados.
        </SectionHeader>

        <ul className="grid sm:grid-cols-3 rounded-2xl border border-linha bg-nevoa divide-y sm:divide-y-0 sm:divide-x divide-linha">
          {plans.map((name) => (
            <li key={name} className="px-6 py-7 sm:px-8">
              <h3 className="font-display font-semibold text-3xl text-anil-escuro">{name}</h3>
              <p className="mt-2 text-base text-grafite">Preço em breve</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-lg text-anil-escuro">
          <a
            {...OWNER_CTA_PROPS}
            className="inline-flex min-h-11 items-center font-bold text-anil underline decoration-anil/30 underline-offset-4 hover:decoration-anil"
          >
            {HAS_CONTACT ? 'Fale com a gente' : 'Entre no app'}
          </a>{' '}
          {HAS_CONTACT ? 'para saber qual combina com o seu salão.' : 'se você já recebeu um convite.'}
        </p>
      </div>
    </section>
  )
}
