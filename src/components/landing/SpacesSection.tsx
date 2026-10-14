'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const spaces = [
  { id: 'salao', label: 'Salão principal', src: '/assets/salao.webp', description: 'Ambiente amplo e versátil, ideal para festas, confraternizações e eventos especiais com toda a estrutura necessária.' },
  { id: 'espaco', label: 'Espaço de festa', src: '/assets/espaco-de-festa.webp', description: 'Área preparada para decoração personalizada e momentos inesquecíveis com seus convidados.' },
  { id: 'kids', label: 'Área kids', src: '/assets/area-kids.webp', description: 'Espaço dedicado para as crianças se divertirem com segurança e monitor incluso.' },
  { id: 'piscina', label: 'Piscina', src: '/assets/piscina.webp', description: 'Perfeita para dias quentes e eventos mais descontraídos, agregando ainda mais valor à celebração.' },
  { id: 'entrada', label: 'Entrada', src: '/assets/entrada.webp', description: 'Um acesso organizado e acolhedor para receber seus convidados com conforto desde o primeiro momento.' },
]

export default function SpacesSection() {
  const [active, setActive] = useState(0)
  const space = spaces[active]

  const prev = () => setActive((a) => (a - 1 + spaces.length) % spaces.length)
  const next = () => setActive((a) => (a + 1) % spaces.length)

  return (
    <section id="espaco" className="bg-folha py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <header className="max-w-2xl mb-10 md:mb-12">
          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-tight text-tinta">
            Conheça o espaço
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pedra">
            Salão coberto, espaço para decoração, piscina e área kids no mesmo lugar.
            Veja cada ambiente antes de escolher a data.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.5fr)] lg:items-start">
          <figure className="min-w-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-musgo">
              {/* key força a troca com fade curto, sem bloquear cliques durante a animação */}
              <Image
                key={space.id}
                src={space.src}
                alt={space.label}
                fill
                className="object-cover motion-safe:animate-[fade-in_300ms_ease-out]"
                priority={active === 0}
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>

            <figcaption className="mt-5 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
              <div className="flex-1 min-w-0" aria-live="polite">
                <p className="font-display font-semibold text-2xl text-tinta">{space.label}</p>
                <p className="mt-1.5 text-base leading-relaxed text-pedra max-w-prose">{space.description}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-sm text-pedra tabular-nums mr-2" aria-hidden="true">
                  {active + 1} de {spaces.length}
                </span>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Foto anterior"
                  className="w-11 h-11 rounded-lg border border-linha bg-papel inline-flex items-center justify-center text-tinta-2 hover:border-mata hover:text-mata transition-colors duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima foto"
                  className="w-11 h-11 rounded-lg border border-linha bg-papel inline-flex items-center justify-center text-tinta-2 hover:border-mata hover:text-mata transition-colors duration-200"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </figcaption>
          </figure>

          <div
            role="group"
            aria-label="Ambientes"
            className="flex lg:flex-col gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-5 sm:scroll-px-0 -mx-5 px-5 sm:mx-0 sm:px-0 pb-2 lg:pb-0 [scrollbar-width:none]"
          >
            {spaces.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn(
                  'snap-start flex-shrink-0 w-32 lg:w-full text-left rounded-xl p-1.5 border-2 transition-colors duration-200',
                  i === active ? 'border-mata bg-papel' : 'border-transparent hover:border-linha'
                )}
              >
                <span className="relative block aspect-[4/3] lg:aspect-[16/9] rounded-lg overflow-hidden bg-musgo">
                  <Image src={s.src} alt="" fill className="object-cover" sizes="200px" />
                </span>
                <span
                  className={cn(
                    'block px-1 pt-1.5 pb-0.5 text-sm',
                    i === active ? 'font-bold text-tinta' : 'font-medium text-pedra'
                  )}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
