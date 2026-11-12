'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { stepOf, useReducedMotion, useScrollProgress } from '@/lib/useScrollProgress'
import { RECANTO_INSTAGRAM_HANDLE, RECANTO_INSTAGRAM_URL } from '@/lib/contact'

/*
 * O Recanto Vila Rica em tela cheia: no começo da seção a foto está recolhida, com margem e
 * cantos arredondados, e se abre até ocupar a tela; depois a rolagem passa pelos cinco
 * ambientes. As fotos ficam todas no DOM, com o texto alternativo de cada uma.
 */

const spaces = [
  { id: 'salao', label: 'Salão principal', src: '/assets/salao.webp', alt: 'Salão principal do Recanto Vila Rica com mesas montadas' },
  { id: 'espaco', label: 'Espaço de festa', src: '/assets/espaco-de-festa.webp', alt: 'Espaço de festa do Recanto Vila Rica preparado para decoração' },
  { id: 'kids', label: 'Área kids', src: '/assets/area-kids.webp', alt: 'Área kids do Recanto Vila Rica com brinquedos' },
  { id: 'piscina', label: 'Piscina', src: '/assets/piscina.webp', alt: 'Piscina do Recanto Vila Rica' },
  { id: 'entrada', label: 'Festa montada', src: '/assets/entrada.webp', alt: 'Festa de aniversário montada no Recanto Vila Rica, com arco de balões e mesa de doces' },
]

const OPEN = 0.2 // parte da rolagem em que a foto se abre

export default function ShowcaseSection() {
  const ref = useRef<HTMLElement>(null)
  const progress = useScrollProgress(ref)
  const reduced = useReducedMotion()
  const grow = Math.min(1, progress / OPEN)
  const active = stepOf(Math.max(0, (progress - OPEN) / (1 - OPEN)), spaces.length)
  const ease = 1 - Math.pow(1 - grow, 3)
  const inset = `inset(${(1 - ease) * 12}svh ${(1 - ease) * 7}vw ${(1 - ease) * 12}svh ${(1 - ease) * 7}vw round ${(1 - ease) * 28}px)`

  if (reduced) return <StaticShowcase />

  return (
    <section
      ref={ref}
      aria-labelledby="quem-usa"
      // com a foto em tela cheia a cena é escura: a barra do topo vira vidro escuro (Navbar)
      className={cn('relative bg-nevoa', ease > 0.9 && 'on-dark')}
      style={{ height: `${(spaces.length + 1) * 100}svh` }}>
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="absolute inset-0 bg-anil-escuro" style={{ clipPath: inset }}>
          {spaces.map((s, i) => (
            <Image
              key={s.id}
              src={s.src}
              alt={s.alt}
              fill
              sizes="100vw"
              className={cn('object-cover transition-opacity duration-700', i === active ? 'opacity-100' : 'opacity-0')}
              style={{ transform: `scale(${1.12 - 0.12 * ease})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-anil-escuro/85 via-anil-escuro/20 to-transparent" />

          {/* o texto fica dentro da foto: é recortado junto com ela enquanto ela se abre */}
          <div className="on-dark relative h-full max-w-6xl mx-auto px-5 sm:px-6 pb-[max(2.5rem,8svh)] flex flex-col justify-end text-white">
            <h2 id="quem-usa" className="font-display font-semibold text-[clamp(2.4rem,6vw,5.25rem)] leading-[1.02] max-w-[13em]">
              O Recanto Vila Rica já reserva pelo Festário
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <p className="font-display font-semibold text-2xl sm:text-3xl">
                {spaces[active].label}
              </p>
              <div className="flex gap-1.5" aria-hidden="true">
                {spaces.map((s, i) => (
                  <span key={s.id} className={cn('h-1 rounded-full transition-all duration-500', i === active ? 'w-8 bg-milho' : 'w-4 bg-white/35')} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Com menos movimento pedido: o título e os cinco ambientes numa grade, sem palco fixo. */
function StaticShowcase() {
  return (
    <section aria-labelledby="quem-usa" className="bg-nevoa pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <h2 id="quem-usa" className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] text-anil-escuro max-w-[13em]">
          O Recanto Vila Rica já reserva pelo Festário
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spaces.map((s, i) => (
            <li key={s.id} className={cn(i === 0 && 'sm:col-span-2 lg:col-span-2 lg:row-span-2')}>
              <figure>
                <div className={cn('relative rounded-2xl overflow-hidden bg-nevoa-funda', i === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[28rem]' : 'aspect-[4/3]')}>
                  <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 400px" />
                </div>
                <figcaption className="mt-2 font-display font-semibold text-xl text-anil-escuro">{s.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* O texto da vitrine, depois da cena de fotos: quem é o Recanto e onde ver mais. */
export function RecantoNote() {
  return (
    <section aria-label="Sobre o Recanto Vila Rica" className="bg-nevoa pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] md:items-end">
        <p className="text-xl sm:text-2xl leading-relaxed text-anil-escuro max-w-[38rem]">
          Espaço de festas em Lavras (MG), com salão, espaço de decoração, área kids e piscina. Foi o primeiro salão na
          plataforma: a agenda, os planos e as reservas do Recanto rodam no Festário.
        </p>
        <a
          href={RECANTO_INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-start md:justify-self-end inline-flex items-center min-h-11 font-bold text-anil underline decoration-anil/30 underline-offset-4 hover:decoration-anil"
        >
          Ver o Recanto no Instagram ({RECANTO_INSTAGRAM_HANDLE})
        </a>
      </div>
    </section>
  )
}
