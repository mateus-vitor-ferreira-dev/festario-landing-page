import type { CSSProperties } from 'react'

/*
 * Passos de um processo, pendurados num cordão: ao entrar na tela, o cordão de cada passo se
 * desenha e o número desce numa bandeirinha. Só para conteúdo que é sequência de verdade.
 */

const tones = {
  milho: { cord: 'text-milho', flag: 'bg-milho text-anil-escuro' },
  anil: { cord: 'text-anil', flag: 'bg-anil text-white' },
  pitanga: { cord: 'text-pitanga', flag: 'bg-pitanga text-white' },
} as const

export default function Steps({
  steps,
  tone,
  className = 'sm:grid-cols-2 lg:grid-cols-4',
}: {
  steps: { title: string; text: string }[]
  tone: keyof typeof tones
  className?: string
}) {
  const t = tones[tone]
  return (
    <ol data-reveal="" className={`grid gap-x-10 gap-y-10 ${className}`}>
      {steps.map((step, i) => (
        <li key={step.title} className={`cord ${t.cord}`} style={{ '--i': i } as CSSProperties}>
          <span
            aria-hidden="true"
            className={`step-flag ${t.flag} inline-flex w-10 h-12 justify-center pt-1.5 font-display font-semibold text-xl leading-none tabular-nums [clip-path:polygon(0_0,100%_0,100%_100%,50%_78%,0_100%)]`}
          >
            {i + 1}
          </span>
          <h3 className="mt-3 font-display font-semibold text-2xl leading-snug text-anil-escuro">{step.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-grafite">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}
