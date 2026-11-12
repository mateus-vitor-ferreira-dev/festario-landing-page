import { Check, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

/*
 * O produto em cena: o calendário do mês com o varal de bandeirinhas no alto, igual ao
 * painel de login do app, desenhado em código para ficar nítido em qualquer tela. Na seção
 * "Uma reserva, do começo ao fim" ele muda conforme a etapa (prop `step`):
 *   0 o cliente escolhe uma data livre, 1 vê a cotação, 2 aceita o contrato,
 *   3 paga o sinal ao salão, 4 a reserva se confirma e as bandeirinhas caem.
 * A página é gerada uma vez por dia (rebuild diário), então o mês acompanha a data.
 */

const WEEKDAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

/* Varal do símbolo em escala de cartão: fio em curva (quadrática) e bandeirinhas
   penduradas ao longo dele, na sequência milho, pitanga, milho. */
const BUNTING_W = 270
const ROPE = { x0: 6, y0: 4, cx: 135, cy: 20, x1: 264, y1: 4 }
const FLAG_COLORS = ['#f4b41a', '#d8344a', '#f4b41a']
const FLAGS = Array.from({ length: 11 }, (_, i) => {
  const t = (i + 0.5) / 11
  const u = 1 - t
  const x = u * u * ROPE.x0 + 2 * u * t * ROPE.cx + t * t * ROPE.x1
  const y = u * u * ROPE.y0 + 2 * u * t * ROPE.cy + t * t * ROPE.y1
  return { x, y, color: FLAG_COLORS[i % 3] }
})

function Bunting({ up }: { up: boolean }) {
  return (
    <svg
      viewBox={`0 0 ${BUNTING_W} 21`}
      preserveAspectRatio="xMidYMin meet"
      className="absolute top-0 left-0 w-full h-[2.1em] overflow-visible"
    >
      <path
        d={`M${ROPE.x0} ${ROPE.y0} Q${ROPE.cx} ${ROPE.cy} ${ROPE.x1} ${ROPE.y1}`}
        fill="none"
        stroke="#27357e"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {FLAGS.map(({ x, y, color }, i) => (
        <path
          key={i}
          className={cn('flag', up && 'flag-up')}
          style={{ transitionDelay: up ? `${i * 55}ms` : '0ms' }}
          d={`M${x - 6} ${y - 0.6} L${x + 6} ${y - 0.6} L${x} ${y + 11} Z`}
          fill={color}
        />
      ))}
    </svg>
  )
}

function monthScene(today: Date) {
  const year = today.getFullYear()
  const month = today.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  // cenário fixo e plausível: sábados e sextas alternadas já reservados e o
  // terceiro sábado como a data da festa (o único destaque de cor)
  const saturdays = Array.from({ length: daysInMonth }, (_, i) => i + 1).filter(
    (d) => new Date(year, month, d).getDay() === 6
  )
  const party = saturdays[Math.min(2, saturdays.length - 1)]
  const fridays = saturdays.map((d) => d - 1).filter((d) => d > 0)
  const booked = new Set([...saturdays.filter((d) => d !== party), ...fridays.filter((_, i) => i % 2 === 0)])
  const cells: (number | null)[] = [
    ...Array.from({ length: new Date(year, month, 1).getDay() }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  return {
    cells,
    party,
    booked,
    monthLabel: today.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }),
    partyLabel: new Date(year, month, party).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }),
  }
}

/* A folha que sobe do pé do cartão em cada etapa: cotação, contrato e sinal. */
function Sheet({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'absolute inset-x-[0.9em] bottom-[0.9em] rounded-xl bg-papel px-[1.15em] py-[1em] text-[max(12px,0.95em)] shadow-[0_-10px_30px_-12px_rgba(20,25,54,0.35)] border border-linha',
        'transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[1.2em] pointer-events-none'
      )}
    >
      {children}
    </div>
  )
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-[1em] py-[0.25em]">
      <span className="text-grafite">{label}</span>
      <span className={cn('text-right first-letter:uppercase', strong ? 'font-display font-semibold text-[1.35em]' : 'font-bold')}>
        {value}
      </span>
    </div>
  )
}

export default function BookingCard({ step = 4, className }: { step?: number; className?: string }) {
  const { cells, party, booked, monthLabel, partyLabel } = monthScene(new Date())
  const confirmed = step >= 4

  return (
    <div aria-hidden="true" className={cn('relative pt-[1.9em] w-full max-w-[27em]', className)}>
      <div className="relative rounded-2xl bg-papel text-anil-escuro pt-[2.5em] px-[1.6em] pb-[1.35em] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] overflow-hidden">
        <Bunting up={confirmed} />
        <p className="font-display font-semibold text-[1.6em] mb-[0.65em] first-letter:uppercase">{monthLabel}</p>
        <div className="grid grid-cols-7 gap-[0.28em]">
          {WEEKDAYS.map((w, i) => (
            <span key={`w${i}`} className="text-center text-[max(12px,0.8em)] font-medium text-grafite pb-[0.3em]">
              {w}
            </span>
          ))}
          {cells.map((d, i) =>
            d === null ? (
              <span key={`e${i}`} />
            ) : (
              <span
                key={d}
                className={cn(
                  'aspect-square grid place-items-center rounded-md font-display font-semibold tabular-nums transition-[background-color,color,box-shadow] duration-500',
                  d === party
                    ? confirmed
                      ? 'bg-anil text-white shadow-[0_0_0_2px_#fff,0_0_0_4px_#f4b41a]'
                      : 'bg-nevoa-funda text-anil shadow-[0_0_0_2px_#27357e]'
                    : booked.has(d)
                      ? 'text-grafite line-through decoration-grafite/40'
                      : 'bg-nevoa-funda text-anil-escuro'
                )}
              >
                {d}
              </span>
            )
          )}
        </div>
        <div className="mt-[1.1em] flex flex-wrap gap-x-[1.1em] gap-y-[0.4em] text-[max(12px,0.87em)] text-grafite">
          <span className="inline-flex items-center gap-[0.45em]">
            <i className="w-[0.75em] h-[0.75em] rounded-[3px] bg-nevoa-funda" />
            Livre
          </span>
          <span className="inline-flex items-center gap-[0.45em]">
            <i className="w-[0.75em] h-[0.75em] rounded-[3px] border border-grafite/50" />
            Reservado
          </span>
          <span className="inline-flex items-center gap-[0.45em]">
            <i className="w-[0.75em] h-[0.75em] rounded-[3px] bg-anil" />
            Data confirmada
          </span>
        </div>

        <Sheet show={step === 1}>
          <p className="font-bold mb-[0.35em]">Cotação</p>
          <Row label="Plano" value="Fim de semana" />
          <Row label="Data" value={partyLabel} />
          <Row label="Horário" value="14h às 22h" />
          <div className="mt-[0.4em] border-t border-linha pt-[0.4em]">
            <Row label="Total" value="R$ 2.400" strong />
          </div>
        </Sheet>

        <Sheet show={step === 2}>
          <p className="flex items-center gap-[0.5em] font-bold">
            <FileText className="w-[1.1em] h-[1.1em] text-anil" />
            Contrato da reserva (PDF)
          </p>
          <div className="mt-[0.7em] space-y-[0.45em]">
            <i className="block h-[0.45em] w-full rounded bg-nevoa-funda" />
            <i className="block h-[0.45em] w-[92%] rounded bg-nevoa-funda" />
            <i className="block h-[0.45em] w-[70%] rounded bg-nevoa-funda" />
          </div>
          <p className="mt-[0.9em] flex items-center gap-[0.55em] font-bold">
            <span className="grid place-items-center w-[1.25em] h-[1.25em] rounded bg-anil text-white">
              <Check className="w-[0.9em] h-[0.9em]" strokeWidth={3} />
            </span>
            Li e aceito o contrato
          </p>
        </Sheet>

        <Sheet show={step === 3}>
          <p className="font-bold">Sinal pago direto ao salão</p>
          <p className="mt-[0.3em] text-grafite">PIX, transferência ou dinheiro, como vocês combinarem.</p>
          <p className="mt-[0.8em] flex items-center gap-[0.55em] font-bold text-anil">
            <Check className="w-[1.1em] h-[1.1em]" strokeWidth={3} />
            O salão registrou o sinal
          </p>
        </Sheet>
      </div>

      <div
        className={cn(
          'absolute right-[-0.6em] sm:right-[-1.3em] top-0 flex flex-col gap-[0.15em] px-[1.05em] py-[0.8em] rounded-xl bg-milho text-anil-escuro shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5)]',
          'transition-[opacity,transform] duration-500 delay-500',
          confirmed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[0.6em]'
        )}
      >
        <strong className="text-[max(12px,0.87em)] font-bold">Reserva confirmada</strong>
        <span className="font-display font-semibold text-[1.3em] first-letter:uppercase">{partyLabel}</span>
      </div>
    </div>
  )
}
