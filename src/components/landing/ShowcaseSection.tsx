'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { RECANTO_INSTAGRAM_HANDLE, RECANTO_INSTAGRAM_URL } from '@/lib/contact'

const spaces = [
  { id: 'salao', label: 'Salão principal', src: '/assets/salao.webp', alt: 'Salão principal do Recanto Vila Rica com mesas montadas' },
  { id: 'espaco', label: 'Espaço de festa', src: '/assets/espaco-de-festa.webp', alt: 'Espaço de festa do Recanto Vila Rica preparado para decoração' },
  { id: 'kids', label: 'Área kids', src: '/assets/area-kids.webp', alt: 'Área kids do Recanto Vila Rica com brinquedos' },
  { id: 'piscina', label: 'Piscina', src: '/assets/piscina.webp', alt: 'Piscina do Recanto Vila Rica' },
  { id: 'entrada', label: 'Festa montada', src: '/assets/entrada.webp', alt: 'Festa de aniversário montada no Recanto Vila Rica, com arco de balões e mesa de doces' },
]

export default function ShowcaseSection() {
  const [active, setActive] = useState(0)
  const space = spaces[active]

  const prev = () => setActive((a) => (a - 1 + spaces.length) % spaces.length)
  const next = () => setActive((a) => (a + 1) % spaces.length)

  return (
    <section aria-labelledby="quem-usa" className="bg-nevoa py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-14 lg:items-start">
          <header className="max-w-xl">
            <h2 id="quem-usa" className="font-display font-semibold text-4xl md:text-5xl leading-tight text-anil-escuro">
              O Recanto Vila Rica já reserva pelo Festário
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-grafite">
              Espaço de festas em Lavras (MG), com salão, espaço de decoração, área kids e piscina. Foi o
              primeiro salão na plataforma: a agenda, os planos e as reservas do Recanto rodam no Festário.
            </p>
            <a
              href={RECANTO_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center min-h-11 font-bold text-anil underline decoration-anil/30 underline-offset-4 hover:decoration-anil"
            >
              Ver o Recanto no Instagram ({RECANTO_INSTAGRAM_HANDLE})
            </a>
          </header>

          <figure className="min-w-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-nevoa-funda">
              {/* key força a troca com fade curto, sem bloquear cliques */}
              <Image
                key={space.id}
                src={space.src}
                alt={space.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </div>

            <figcaption className="mt-4 flex items-center justify-between gap-4">
              <p className="font-display font-semibold text-xl text-anil-escuro" aria-live="polite">
                {space.label}
              </p>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-sm text-grafite tabular-nums mr-1" aria-hidden="true">
                  {active + 1} de {spaces.length}
                </span>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Foto anterior"
                  className="w-11 h-11 rounded-lg border border-linha bg-papel inline-flex items-center justify-center text-anil-escuro hover:border-anil hover:text-anil transition-colors duration-200"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima foto"
                  className="w-11 h-11 rounded-lg border border-linha bg-papel inline-flex items-center justify-center text-anil-escuro hover:border-anil hover:text-anil transition-colors duration-200"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>
            </figcaption>

            <div role="group" aria-label="Ambientes do Recanto" className="mt-4 grid grid-cols-5 gap-2">
              {spaces.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={s.label}
                  className={cn(
                    'relative h-12 sm:h-16 lg:h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200',
                    i === active ? 'border-anil' : 'border-transparent opacity-80 hover:opacity-100'
                  )}
                >
                  <Image src={s.src} alt="" fill className="object-cover" sizes="140px" />
                </button>
              ))}
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
