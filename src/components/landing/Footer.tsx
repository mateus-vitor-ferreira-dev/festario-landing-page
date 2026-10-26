import { Logo } from '@/components/brand/Logo'
import { APP_LOGIN_URL, APP_SIGNUP_URL, EMAIL_DISPLAY, EMAIL_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/contact'

const linkClass = 'inline-flex items-center min-h-11 text-[15px] text-nevoa-texto hover:text-white transition-colors duration-200'

const sections = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Quem usa', href: '#quem-usa' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#duvidas' },
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
              Agenda, contrato e pagamento para salões de festa.
            </p>
          </div>

          <nav aria-label="Seções da página">
            <h2 className="font-sans text-[15px] font-bold text-white mb-1">Na página</h2>
            <ul>
              {sections.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className={linkClass}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="App">
            <h2 className="font-sans text-[15px] font-bold text-white mb-1">App</h2>
            <ul>
              <li>
                <a href={APP_LOGIN_URL} className={linkClass}>
                  Entrar
                </a>
              </li>
              <li>
                <a href={APP_SIGNUP_URL} className={linkClass}>
                  Criar conta
                </a>
              </li>
            </ul>
          </nav>

          {(WHATSAPP_URL || EMAIL_URL) && (
            <div>
              <h2 className="font-sans text-[15px] font-bold text-white mb-1">Contato</h2>
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
