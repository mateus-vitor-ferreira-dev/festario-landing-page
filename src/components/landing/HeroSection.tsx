'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { WHATSAPP_URL, prefersReducedMotion } from '@/lib/contact'

const facts = [
  { label: 'Planos a partir de', value: 'R$ 649,99' },
  { label: 'Inclui', value: 'Área kids com monitor' },
  { label: 'Onde', value: 'Jardim Vila Rica, Lavras' },
]

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null)
  const archRef = useRef<HTMLElement>(null)

  // Único momento de movimento da página: o texto sobe e o arco se abre de baixo para cima.
  useEffect(() => {
    const items = textRef.current ? Array.from(textRef.current.children) : []
    if (prefersReducedMotion()) return

    const init = async () => {
      const { gsap } = await import('gsap')
      gsap.to(items, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, delay: 0.1 })
      gsap.fromTo(
        archRef.current,
        { clipPath: 'inset(100% 0 0 0 round 999px 999px 16px 16px)' },
        { clipPath: 'inset(0% 0 0 0 round 999px 999px 16px 16px)', opacity: 1, duration: 1.1, ease: 'power3.inOut', delay: 0.2 }
      )
    }
    init()
  }, [])

  return (
    <section className="on-dark relative bg-mata-funda text-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-[104px] pb-16 lg:pt-32 lg:pb-24 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div ref={textRef} className="max-w-xl">
          <h1 className="gsap-hidden font-display font-semibold text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl">
            Recanto Vila Rica
          </h1>
          <p className="gsap-hidden mt-5 font-display italic text-2xl sm:text-[1.75rem] leading-snug text-ouro-claro">
            Espaço de festas em Lavras, MG
          </p>
          <p className="gsap-hidden mt-5 text-lg leading-relaxed text-white/75 max-w-[34rem]">
            Salão, piscina e área kids para aniversários, casamentos, formaturas e
            confraternizações. Consulte a data pelo WhatsApp e receba a resposta na hora.
          </p>

          <div className="gsap-hidden mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-13 px-7 rounded-lg bg-ouro-claro text-tinta text-base font-bold hover:bg-white transition-colors duration-200"
            >
              Consultar data no WhatsApp
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center min-h-13 px-7 rounded-lg border border-white/30 text-white text-base font-medium hover:bg-white/10 transition-colors duration-200"
            >
              Ver planos e preços
            </a>
          </div>

          <dl className="gsap-hidden mt-10 sm:mt-12 grid grid-cols-3 border-t border-white/15">
            {facts.map((f) => (
              <div
                key={f.label}
                className="min-w-0 pt-4 pr-3 sm:pr-5 border-r border-white/15 last:border-r-0 [&:not(:first-child)]:pl-3 sm:[&:not(:first-child)]:pl-5"
              >
                <dt className="text-[13px] sm:text-sm text-white/60">{f.label}</dt>
                <dd className="mt-1 text-[15px] sm:text-base font-medium leading-snug text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Assinatura: a festa montada no espaço, numa janela em arco colonial */}
        <figure
          ref={archRef}
          className="relative w-full max-w-[420px] lg:max-w-none aspect-[4/5] rounded-[var(--radius-arch)] border border-ouro p-2"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[999px_999px_10px_10px]">
            <Image
              src="/assets/entrada.webp"
              alt="Festa de aniversário montada no Recanto Vila Rica, com arco de balões e mesa de doces"
              fill
              priority
              className="object-cover object-[64%_50%]"
              sizes="(max-width: 1024px) 420px, 45vw"
            />
          </div>
        </figure>
      </div>
    </section>
  )
}
