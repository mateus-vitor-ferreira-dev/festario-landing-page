'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { WHATSAPP_URL } from '@/lib/contact'

const links = [
  { label: 'Espaço', href: '#espaco' },
  { label: 'Planos', href: '#planos' },
  { label: 'Promoções', href: '#promocoes' },
  { label: 'Localização', href: '#localizacao' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // sobre o hero escuro a navbar é transparente; ao rolar (ou com o menu aberto) vira clara
  const light = scrolled || open

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        light
          ? 'bg-folha/95 backdrop-blur-md border-b border-linha'
          : 'bg-transparent on-dark'
      )}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-[68px] flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5 min-h-11">
          <span className="w-10 h-10 relative flex-shrink-0">
            <Image src="/logo-recanto.svg" alt="" fill className="object-contain" priority />
          </span>
          <span
            className={cn(
              'font-display font-semibold text-xl leading-none transition-colors duration-300',
              light ? 'text-tinta' : 'text-white'
            )}
          >
            Recanto Vila Rica
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                'px-3 py-2 rounded-md text-[15px] font-medium transition-colors duration-200',
                light ? 'text-pedra hover:text-tinta hover:bg-musgo' : 'text-white/75 hover:text-white'
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'ml-3 inline-flex items-center min-h-11 px-5 rounded-lg text-[15px] font-bold transition-colors duration-200',
              light ? 'bg-mata text-white hover:bg-mata-funda' : 'bg-ouro-claro text-tinta hover:bg-white'
            )}
          >
            Reservar pelo WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className={cn(
            'lg:hidden w-11 h-11 -mr-2 inline-flex items-center justify-center rounded-lg transition-colors duration-200',
            light ? 'text-tinta hover:bg-musgo' : 'text-white hover:bg-white/10'
          )}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="lg:hidden bg-folha border-b border-linha px-5 pb-5 pt-1 flex flex-col max-h-[calc(100svh-68px)] overflow-y-auto"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-12 text-lg text-tinta-2 border-b border-linha"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center min-h-12 rounded-lg bg-mata text-white text-base font-bold"
          >
            Reservar pelo WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
