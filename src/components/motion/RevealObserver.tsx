'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/*
 * Liga a revelação na rolagem dos elementos com data-reveal. O que já está na tela ao carregar é
 * marcado como visto antes de a classe .js esconder o resto, então nada pisca. Roda de novo a cada
 * troca de página.
 */
export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const vh = window.innerHeight
    for (const el of els) {
      const r = el.getBoundingClientRect()
      if (r.top < vh && r.bottom > 0) el.dataset.reveal = 'in'
    }
    document.documentElement.classList.add('js')

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          ;(e.target as HTMLElement).dataset.reveal = 'in'
          io.unobserve(e.target)
        }
      },
      // entra um pouco depois de aparecer, para o movimento acontecer onde a pessoa está olhando
      { rootMargin: '0px 0px -12% 0px' }
    )
    for (const el of els) if (el.dataset.reveal !== 'in') io.observe(el)
    return () => io.disconnect()
  }, [pathname])

  return null
}
