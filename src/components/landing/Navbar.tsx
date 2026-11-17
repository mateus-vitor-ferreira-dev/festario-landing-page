'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { APP_LOGIN_URL } from '@/lib/contact'
import { Logo } from '@/components/brand/Logo'

export type NavLink = { label: string; href: string }

/** Botão principal da barra: o rótulo curto vai na barra, o longo no menu do celular. */
export type NavCta = { label: string; mobileLabel: string; href: string; target?: string; rel?: string }

export default function Navbar({ links, cta }: { links: NavLink[]; cta: NavCta }) {
  const { label: ctaLabel, mobileLabel: ctaMobileLabel, ...ctaProps } = cta
  const [scrolled, setScrolled] = useState(false)
  const [overDark, setOverDark] = useState(true)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    // a barra acompanha o que está embaixo dela: escura e translúcida sobre as cenas escuras
    // (hero e "Uma reserva"), clara sobre o resto
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const dark = Array.from(document.querySelectorAll('main section.on-dark')).some((s) => {
        const r = s.getBoundingClientRect()
        return r.top <= 34 && r.bottom > 34
      })
      setOverDark(dark)

      // seção atual: a última âncora do menu cujo topo já passou da barra
      let current: string | null = null
      for (const l of links) {
        if (!l.href.startsWith('#')) continue
        const target = document.getElementById(l.href.slice(1))
        const section = target?.closest('section') ?? target
        if (section && section.getBoundingClientRect().top <= 120) current = l.href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [links])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // sobre o topo do hero a barra é transparente; sobre outra cena escura, vidro escuro;
  // sobre as seções claras (ou com o menu aberto), clara
  const light = !overDark || open

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        light
          ? 'bg-nevoa/95 backdrop-blur-md border-b border-linha'
          : scrolled
            ? 'bg-anil-escuro/75 backdrop-blur-md border-b border-white/10 on-dark'
            : 'bg-transparent on-dark'
      )}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-[68px] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center min-h-11" aria-label="Festário, página inicial">
          <Logo tone={light ? 'light' : 'dark'} title="" className="h-8 w-auto" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? 'location' : undefined}
              className={cn(
                'nav-mark inline-flex items-center min-h-11 px-3 rounded-md text-[15px] font-medium transition-colors duration-200',
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
            {...ctaProps}
            className={cn(
              'press ml-1 inline-flex items-center min-h-11 px-5 rounded-lg text-[15px] font-bold transition-colors duration-200',
              light ? 'bg-anil text-white hover:bg-anil-escuro' : 'bg-anil-claro text-noite hover:bg-white'
            )}
          >
            {ctaLabel}
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
            {...ctaProps}
            className="mt-5 inline-flex items-center justify-center min-h-12 rounded-lg bg-anil text-white text-base font-bold"
          >
            {ctaMobileLabel}
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
