'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { stepOf, useReducedMotion, useScrollProgress } from '@/lib/useScrollProgress'
import BookingCard from './BookingCard'

/*
 * A cena principal da página: uma reserva inteira acontece no calendário enquanto a pessoa
 * rola. A seção é alta (uma tela por etapa) e o palco fica fixo; o progresso da rolagem
 * escolhe a etapa. Leitores de tela leem a lista inteira, na ordem.
 */

const steps = [
  {
    title: 'O cliente escolhe uma data livre',
    text: 'Ele vê a mesma agenda que você: o que está livre, o que já foi reservado e o que você bloqueou. Ninguém precisa perguntar se o sábado está vago.',
  },
  {
    title: 'A cotação sai na hora',
    text: 'Ele troca o plano, a data ou o horário e o total se refaz, com o preço que você definiu para cada dia da semana.',
  },
  {
    title: 'Lê e aceita o contrato',
    text: 'O contrato sai em PDF com os dados da reserva, e o cliente aceita antes de pagar.',
  },
  {
    title: 'Paga o sinal direto ao salão',
    text: 'PIX, transferência ou dinheiro, do jeito que vocês combinam. Você registra o que recebeu.',
  },
  {
    title: 'E a data é dele',
    text: 'Com o sinal registrado, a reserva se confirma e o dia sai da agenda. Você acompanha tudo pelo painel.',
  },
]

export default function StorySection() {
  const ref = useRef<HTMLElement>(null)
  const progress = useScrollProgress(ref)
  const reduced = useReducedMotion()
  // a última etapa ganha a tela de pausa: as quatro primeiras dividem os primeiros 4/6 da rolagem
  const step = stepOf(Math.min(1, (progress * (steps.length + 1)) / steps.length), steps.length)

  if (reduced) return <StaticStory />

  return (
    <section
      ref={ref}
      aria-labelledby="uma-reserva"
      className="on-dark relative bg-anil-escuro text-white"
      // uma tela por etapa e mais uma de pausa na reserva confirmada, antes de a cena soltar
      style={{ height: `${(steps.length + 1) * 100}svh` }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="max-w-6xl h-full mx-auto px-5 sm:px-6 pt-[84px] pb-8 grid grid-rows-[auto_minmax(0,1fr)] gap-5 sm:gap-6 lg:grid-rows-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16 deitado:grid-rows-1 deitado:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] deitado:items-center deitado:gap-8 deitado:pt-[76px] deitado:pb-4">
          <div className="order-2 lg:order-1 deitado:order-1 max-w-xl">
            <h2 id="uma-reserva" className="font-display font-semibold text-xl sm:text-3xl deitado:text-lg text-anil-claro">
              Uma reserva, do começo ao fim
            </h2>

            <ol className="mt-4 grid">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  aria-current={i === step ? 'step' : undefined}
                  className={cn(
                    '[grid-area:1/1] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]',
                    i === step ? 'opacity-100 translate-y-0' : i < step ? 'opacity-0 -translate-y-6' : 'opacity-0 translate-y-6'
                  )}
                >
                  <h3 className="font-display font-semibold text-[clamp(1.85rem,min(9vw,5.2svh),2.4rem)] leading-[1.04] sm:text-6xl lg:text-[4.2rem] deitado:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 sm:mt-5 text-base sm:text-xl leading-relaxed text-nevoa-texto max-w-[32rem] deitado:text-sm deitado:mt-2">{s.text}</p>
                </li>
              ))}
            </ol>

            {/* onde a pessoa está na sequência */}
            <div className="mt-6 sm:mt-8 deitado:mt-4 flex gap-2" aria-hidden="true">
              {steps.map((s, i) => (
                <span
                  key={s.title}
                  className={cn(
                    'h-1 rounded-full transition-all duration-500',
                    i === step ? 'w-10 bg-milho' : i < step ? 'w-5 bg-anil-claro' : 'w-5 bg-white/20'
                  )}
                />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 deitado:order-2 min-h-0 flex items-center justify-center lg:justify-end">
            <BookingCard
              step={step}
              className="text-[clamp(10px,min(3.3vw,1.85svh),17px)] lg:text-[clamp(13px,min(1.25vw,2.1svh),18px)] deitado:text-[clamp(8px,2.6svh,12px)] mr-3 sm:mr-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* Com menos movimento pedido: as cinco etapas em lista e o calendário já com a reserva confirmada. */
function StaticStory() {
  return (
    <section aria-labelledby="uma-reserva" className="on-dark bg-anil-escuro text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <div>
          <h2 id="uma-reserva" className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.05]">
            Uma reserva, do começo ao fim
          </h2>
          <ol className="mt-10 space-y-8">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
                <span className="font-display font-semibold text-3xl text-milho tabular-nums" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-2xl sm:text-3xl">{s.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-nevoa-texto">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <BookingCard step={4} className="text-[clamp(12px,3.4vw,17px)] lg:text-[clamp(13px,1.25vw,18px)] justify-self-center lg:justify-self-end lg:sticky lg:top-28 mr-3 sm:mr-5" />
      </div>
    </section>
  )
}
