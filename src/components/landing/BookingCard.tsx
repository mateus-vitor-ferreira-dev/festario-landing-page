import { cn } from '@/lib/utils'

/*
 * Prévia decorativa do produto: o calendário do mês com o varal de bandeirinhas
 * no alto do cartão, igual ao painel de login do app. Desenhada em código para
 * ficar nítida em qualquer tela. A página é regenerada uma vez por dia (revalidate
 * em page.tsx), então o mês acompanha a data.
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

function Bunting() {
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
          className="flag-drop"
          style={{ animationDelay: `${120 + i * 55}ms` }}
          d={`M${x - 6} ${y - 0.6} L${x + 6} ${y - 0.6} L${x} ${y + 11} Z`}
          fill={color}
        />
      ))}
    </svg>
  )
}

type DayState = 'free' | 'booked' | 'confirmed'

const dayClass: Record<DayState, string> = {
  free: 'bg-nevoa-funda text-anil-escuro',
  /* indisponível sem alarmar: apagado e riscado */
  booked: 'text-[#6b7090] line-through decoration-[#c5c9dc]',
  /* a data da festa: anil com anel de milho (o check do símbolo) */
  confirmed: 'bg-anil text-white shadow-[0_0_0_2px_#fff,0_0_0_4px_#f4b41a]',
}

export default function BookingCard({ className }: { className?: string }) {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // cenário fixo e plausível: sábados e sextas alternadas já reservados e o
  // terceiro sábado como a data confirmada (o único destaque de cor)
  const saturdays = Array.from({ length: daysInMonth }, (_, i) => i + 1).filter(
    (d) => new Date(year, month, d).getDay() === 6
  )
  const confirmed = saturdays[Math.min(2, saturdays.length - 1)]
  const fridays = saturdays.map((d) => d - 1).filter((d) => d > 0)
  const booked = new Set([...saturdays.filter((d) => d !== confirmed), ...fridays.filter((_, i) => i % 2 === 0)])

  const monthLabel = today.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })
  const confirmedLabel = new Date(year, month, confirmed).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  return (
    <div aria-hidden="true" className={cn('relative pt-[1.9em] w-full max-w-[27em]', className)}>
      <div className="relative rounded-2xl bg-papel text-anil-escuro pt-[2.5em] px-[1.6em] pb-[1.35em] shadow-[0_24px_48px_-16px_rgba(0,0,0,0.5)]">
        <Bunting />
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
                  'aspect-square grid place-items-center rounded-md font-display font-semibold tabular-nums',
                  dayClass[d === confirmed ? 'confirmed' : booked.has(d) ? 'booked' : 'free']
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
            <i className="w-[0.75em] h-[0.75em] rounded-[3px] border border-[#a2a7bd]" />
            Reservado
          </span>
          <span className="inline-flex items-center gap-[0.45em]">
            <i className="w-[0.75em] h-[0.75em] rounded-[3px] bg-anil" />
            Data confirmada
          </span>
        </div>
      </div>

      <div className="ticket-in absolute right-[-0.6em] sm:right-[-1.3em] top-0 flex flex-col gap-[0.15em] px-[1.05em] py-[0.8em] rounded-xl bg-[#fdf4dc] text-anil-escuro border border-[#f2d68c] shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5)]">
        <strong className="text-[max(12px,0.87em)] font-bold text-[#1b6334]">Reserva confirmada</strong>
        <span className="font-display font-semibold text-[1.3em] first-letter:uppercase">{confirmedLabel}</span>
      </div>
    </div>
  )
}
