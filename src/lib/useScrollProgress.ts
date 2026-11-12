'use client'

import { useEffect, useState, type RefObject } from 'react'

/**
 * Quanto do trecho fixo (sticky) de uma seção já foi rolado: 0 quando o topo da seção encosta
 * no topo da tela, 1 quando o fim dela chega ao fim da tela. Lido a cada quadro de animação,
 * só enquanto a página rola, e sem nada de estado fora da seção.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0

    const measure = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const track = rect.height - window.innerHeight
      const value = track > 0 ? Math.min(1, Math.max(0, -rect.top / track)) : 0
      setProgress((old) => (Math.abs(old - value) < 0.001 ? old : value))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref])

  return progress
}

/** Em qual de `count` etapas iguais o progresso está (0 a count - 1). */
export function stepOf(progress: number, count: number) {
  return Math.min(count - 1, Math.floor(progress * count))
}

/**
 * Se a pessoa pediu menos movimento no sistema. Nesse caso as cenas guiadas pela rolagem
 * mostram direto o estado final, sem palco fixo.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}
