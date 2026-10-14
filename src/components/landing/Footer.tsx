import { MapPin, Phone, MessageCircle } from 'lucide-react'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const linkClass =
  'flex items-center gap-3 min-h-11 text-[15px] text-white/70 hover:text-white transition-colors duration-200'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="on-dark bg-mata-noite text-white pt-14 pb-[calc(2rem+env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3 mb-12">
          <div>
            <p className="font-display font-semibold text-2xl">Recanto Vila Rica</p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60 max-w-xs">
              Espaço de festas com salão, piscina e área kids em Lavras, MG.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[15px] font-bold text-white/90 mb-2">Contato</h2>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp {PHONE_DISPLAY}
            </a>
            <a href={PHONE_TEL} className={linkClass}>
              <Phone size={16} aria-hidden="true" />
              Ligar {PHONE_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <InstagramIcon />
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          <div>
            <h2 className="font-sans text-[15px] font-bold text-white/90 mb-2">Endereço</h2>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${linkClass} items-start py-2`}>
              <MapPin size={16} aria-hidden="true" className="flex-shrink-0 mt-1" />
              <span className="leading-relaxed">
                Rua Bernardino Antônio Tomás, 21
                <br />
                Jardim Vila Rica, Lavras – MG
              </span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-white/50">
          <p>© {year} Recanto Vila Rica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
