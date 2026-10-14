'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact'

/** Atalho para o WhatsApp comercial do Festário. Some quando não há número configurado. */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!WHATSAPP_URL) return null

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Festário no WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      // verde do WhatsApp mantido de propósito: reconhecimento imediato do canal
      className={`fixed z-40 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/20 hover:bg-[#1ebe5a] transition-[opacity,transform,background-color] duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <MessageCircle size={26} fill="white" aria-hidden="true" />
    </a>
  )
}
