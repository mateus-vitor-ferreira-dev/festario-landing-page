import type { CSSProperties } from 'react'

import { LOGO, SYMBOL, SYMBOL_VIEWBOX, WORDMARK_ACCENT_PATH, WORDMARK_PATH } from './geometry'

/*
 * Marca Festário inline, com a geometria do kit (docs/marca no repositório web, copiada em `geometry.ts`).
 * Inline para trocar de tom junto com a navbar: o corpo da bandeirinha, as argolas e o nome usam
 * variáveis; o cabeçalho e o agudo (pitanga) e a célula do dia (milho) nunca mudam de cor.
 */

const MILHO = '#f4b41a'
const PITANGA = '#d8344a'

const TONES = {
  light: { '--logo-body': '#27357e', '--logo-ink': '#27357e' },
  dark: { '--logo-body': '#9aa8f2', '--logo-ink': '#ffffff' },
} as const

type Tone = keyof typeof TONES

function SymbolShapes() {
  return (
    <>
      <path d={SYMBOL.header} fill={PITANGA} />
      {SYMBOL.pegs.map((p) => (
        <rect key={p.x} {...p} fill="var(--logo-body)" />
      ))}
      <path d={SYMBOL.body} fill="var(--logo-body)" />
      <path d={SYMBOL.cell} fill={MILHO} />
    </>
  )
}

interface LogoProps {
  tone?: Tone
  className?: string
  /** Nome acessível. Vazio deixa a marca decorativa (quando há texto ao lado). */
  title?: string
}

const a11y = (title: string) => (title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true })

/** Logotipo completo (símbolo + nome). Altura mínima do guia: 24px. */
export function Logo({ tone = 'light', className, title = 'Festário' }: LogoProps) {
  return (
    <svg
      viewBox={`0 0 ${LOGO.width} ${LOGO.height}`}
      className={className}
      style={TONES[tone] as CSSProperties}
      {...a11y(title)}
    >
      <g transform={LOGO.symbolTransform}>
        <SymbolShapes />
      </g>
      <g transform={`translate(${LOGO.wordX} ${LOGO.baseline})`}>
        <path d={WORDMARK_PATH} fill="var(--logo-ink)" />
        <path d={WORDMARK_ACCENT_PATH} fill={PITANGA} />
      </g>
    </svg>
  )
}

/** Só o símbolo (o calendário cuja folha é uma bandeirinha). Mínimo do guia: 24px. */
export function BrandSymbol({ tone = 'light', className, title = '' }: LogoProps) {
  return (
    <svg viewBox={SYMBOL_VIEWBOX} className={className} style={TONES[tone] as CSSProperties} {...a11y(title)}>
      <SymbolShapes />
    </svg>
  )
}
