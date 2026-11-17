import { Logo } from '@/components/brand/Logo'
import { APP_LOGIN_URL, APP_SALONS_URL, APP_SERVICES_URL, APP_SIGNUP_URL, EMAIL_DISPLAY, EMAIL_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/contact'

const linkClass = 'inline-flex items-center min-h-11 text-[15px] text-nevoa-texto hover:text-white transition-colors duration-200'

const columns = [
  {
    title: 'Fazer uma festa',
    links: [
      { label: 'Salões com data livre', href: APP_SALONS_URL },
      { label: 'Serviços de festa', href: APP_SERVICES_URL },
      { label: 'Criar conta', href: APP_SIGNUP_URL },
    ],
  },
  {
    title: 'Para negócios',
    links: [
      { label: 'Festário para salões', href: '/para-saloes' },
      { label: 'Festário para prestadores', href: '/prestadores' },
      { label: 'Entrar', href: APP_LOGIN_URL },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="on-dark bg-noite text-white pt-14 pb-[calc(2rem+env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] mb-12">
          <div>
            <Logo tone="dark" className="h-9 w-auto" />
            <p className="mt-5 font-display font-semibold text-xl text-white">Data marcada, festa garantida.</p>
            <p className="mt-2 text-[15px] leading-relaxed text-nevoa-texto max-w-xs">
              Salões e serviços de festa num lugar só: para quem faz a festa e para quem trabalha com ela.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[15px] font-bold text-white mb-1">{col.title}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={linkClass}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {(WHATSAPP_URL || EMAIL_URL) && (
            <div>
              <p className="text-[15px] font-bold text-white mb-1">Contato</p>
              <ul>
                {WHATSAPP_URL && (
                  <li>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      WhatsApp {WHATSAPP_DISPLAY}
                    </a>
                  </li>
                )}
                {EMAIL_URL && (
                  <li>
                    <a href={EMAIL_URL} className={`${linkClass} break-all`}>
                      {EMAIL_DISPLAY}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-nevoa-texto">
          <p>© {year} Festário</p>
        </div>
      </div>
    </footer>
  )
}
