import { Mail, MessageCircle } from 'lucide-react'
import { APP_LOGIN_URL, EMAIL_DISPLAY, EMAIL_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/contact'

export default function CTASection() {
  const hasContact = Boolean(WHATSAPP_URL || EMAIL_URL)

  return (
    <section aria-labelledby="contato" className="on-dark bg-anil-escuro text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center">
        <div>
          <h2 id="contato" className="font-display font-semibold text-4xl md:text-5xl leading-tight">
            Quer o Festário no seu salão?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-nevoa-texto max-w-xl">
            {hasContact
              ? 'Conte como o seu salão funciona hoje: quantos espaços tem, como você cobra e como fecha as reservas. A gente responde por lá.'
              : 'O contato comercial ainda está sendo definido. Se você já recebeu um convite, entre pelo app.'}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {WHATSAPP_URL && (
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 min-h-16 px-6 py-3 rounded-lg bg-anil-claro text-noite hover:bg-white transition-colors duration-200"
            >
              <MessageCircle size={22} aria-hidden="true" className="flex-shrink-0" />
              <span className="flex flex-col items-start">
                <span className="text-lg font-bold leading-tight">Chamar no WhatsApp</span>
                <span className="text-[15px] tabular-nums">{WHATSAPP_DISPLAY}</span>
              </span>
            </a>
          )}
          {EMAIL_URL && (
            <a
              href={EMAIL_URL}
              className="inline-flex items-center justify-center gap-2.5 min-h-12 px-6 rounded-lg border border-white/35 text-base font-medium hover:bg-white/10 transition-colors duration-200"
            >
              <Mail size={18} aria-hidden="true" />
              {EMAIL_DISPLAY}
            </a>
          )}
          {!hasContact && (
            <a
              href={APP_LOGIN_URL}
              className="inline-flex items-center justify-center min-h-14 px-6 rounded-lg bg-anil-claro text-noite text-lg font-bold hover:bg-white transition-colors duration-200"
            >
              Entrar no app
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
