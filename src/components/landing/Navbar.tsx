'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { APP_LOGIN_URL, OWNER_CTA_PROPS } from '@/lib/contact'
import { Logo } from '@/components/brand/Logo'

const links = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Quem usa', href: '#quem-usa' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#duvidas' },
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
        light ? 'bg-nevoa/95 backdrop-blur-md border-b border-linha' : 'bg-transparent on-dark'
      )}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-[68px] flex items-center justify-between gap-4">
        <a href="#" className="flex items-center min-h-11" aria-label="Festário, início da página">
          <Logo tone={light ? 'light' : 'dark'} title="" className="h-8 w-auto" />
        </a>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                'inline-flex items-center min-h-11 px-3 rounded-md text-[15px] font-medium transition-colors duration-200',
                light ? 'text-grafite hover:text-anil-escuro hover:bg-nevoa-funda' : 'text-nevoa-texto hover:text-white'
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href={APP_LOGIN_URL}
            className={cn(
              'ml-2 inline-flex items-center min-h-11 px-4 rounded-lg text-[15px] font-bold transition-colors duration-200',
              light ? 'text-anil hover:bg-nevoa-funda' : 'text-white hover:bg-white/10'
            )}
          >
            Entrar
          </a>
          <a
            {...OWNER_CTA_PROPS}
            className={cn(
              'ml-1 inline-flex items-center min-h-11 px-5 rounded-lg text-[15px] font-bold transition-colors duration-200',
              light ? 'bg-anil text-white hover:bg-anil-escuro' : 'bg-anil-claro text-noite hover:bg-white'
            )}
          >
            Quero o Festário
          </a>
        </nav>

        <button
          type="button"
          className={cn(
            'lg:hidden w-11 h-11 -mr-2 inline-flex items-center justify-center rounded-lg transition-colors duration-200',
            light ? 'text-anil-escuro hover:bg-nevoa-funda' : 'text-white hover:bg-white/10'
          )}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="lg:hidden bg-nevoa border-b border-linha px-5 pb-5 pt-1 flex flex-col max-h-[calc(100svh-68px)] overflow-y-auto"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-12 text-lg text-anil-escuro border-b border-linha"
            >
              {l.label}
            </a>
          ))}
          <a
            {...OWNER_CTA_PROPS}
            className="mt-5 inline-flex items-center justify-center min-h-12 rounded-lg bg-anil text-white text-base font-bold"
          >
            Quero o Festário no meu salão
          </a>
          <a
            href={APP_LOGIN_URL}
            className="mt-3 inline-flex items-center justify-center min-h-12 rounded-lg border border-linha bg-papel text-anil text-base font-bold"
          >
            Entrar no app
          </a>
        </nav>
      )}
    </header>
  )
}
