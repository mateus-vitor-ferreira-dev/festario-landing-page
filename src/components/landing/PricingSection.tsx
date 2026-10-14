import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { WHATSAPP_URL } from '@/lib/contact'

const plans = [
  {
    name: 'Promocional',
    days: 'Segunda a quinta',
    tagline: 'Aproveite nossa promoção',
    price: 649.99,
    highlight: true,
    badge: 'Mais popular',
    features: [
      '5 horas de festa',
      'Área kids com monitor incluso',
      'Salão principal',
      'Espaço de decoração',
    ],
  },
  {
    name: 'Essencial',
    days: 'Sexta a domingo e feriados',
    tagline: 'Garanta sua data',
    price: 849.99,
    highlight: false,
    features: [
      '4 horas de festa',
      'Área kids com monitor incluso',
      'Salão principal',
      'Espaço de decoração',
    ],
  },
  {
    name: 'Completo',
    days: 'Sexta a domingo e feriados',
    tagline: 'A experiência mais completa',
    price: 999.99,
    highlight: false,
    features: [
      '4 horas de festa',
      'Área kids com monitor incluso',
      'Piscina inclusa',
      'Salão principal',
      'Extensão área kids: +R$30/h',
    ],
  },
]

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function PricingSection() {
  return (
    <section id="planos" className="bg-papel py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <header className="max-w-2xl mb-10 md:mb-12">
          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-tight text-tinta">
            Planos e valores
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pedra">
            O plano depende do dia do evento: de segunda a quinta sai mais em conta.
            Todos incluem salão e área kids com monitor.
          </p>
        </header>

        <div className="grid gap-5 max-w-xl lg:max-w-none lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl p-7 sm:p-8 border',
                plan.highlight
                  ? 'on-dark bg-mata-funda border-mata-funda text-white'
                  : 'bg-folha border-linha text-tinta'
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                <h3 className="font-display font-semibold text-3xl leading-none">{plan.name}</h3>
                {plan.highlight && (
                  <span className="flex-shrink-0 px-2.5 py-1 rounded-md bg-ouro-claro text-tinta text-[13px] font-bold">
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className={cn('mt-2 text-[15px] font-medium', plan.highlight ? 'text-ouro-claro' : 'text-ouro-texto')}>
                {plan.days}
              </p>

              <p className="mt-7">
                <span className={cn('block text-sm', plan.highlight ? 'text-white/70' : 'text-pedra')}>a partir de</span>
                <span className="mt-1 flex items-baseline gap-1.5 whitespace-nowrap">
                  <span className="font-display font-semibold text-2xl">R$</span>
                  <span className="font-display font-semibold text-5xl leading-none tabular-nums">
                    {formatPrice(plan.price)}
                  </span>
                </span>
              </p>
              <p className={cn('mt-2 text-[15px]', plan.highlight ? 'text-white/70' : 'text-pedra')}>{plan.tagline}</p>

              <ul className={cn('mt-7 pt-6 flex-1 space-y-3 border-t', plan.highlight ? 'border-white/15' : 'border-linha')}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base">
                    <Check
                      size={18}
                      strokeWidth={2.5}
                      aria-hidden="true"
                      className={cn('flex-shrink-0 mt-0.5', plan.highlight ? 'text-ouro-claro' : 'text-mata')}
                    />
                    <span className={plan.highlight ? 'text-white/90' : 'text-tinta-2'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'mt-8 inline-flex items-center justify-center min-h-12 rounded-lg text-base font-bold transition-colors duration-200',
                  plan.highlight
                    ? 'bg-ouro-claro text-tinta hover:bg-white'
                    : 'bg-mata text-white hover:bg-mata-funda'
                )}
              >
                Reservar o {plan.name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-base text-pedra">
          Dúvidas sobre os planos?{' '}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-mata underline decoration-mata/30 underline-offset-4 hover:decoration-mata"
          >
            Fale conosco no WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
