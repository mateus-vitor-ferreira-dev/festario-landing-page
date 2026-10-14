import { Check } from 'lucide-react'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/contact'

const benefits = [
  'Disponibilidade verificada na hora',
  'Atendimento direto com o Recanto',
  'Detalhes do evento combinados com você',
]

export default function CTASection() {
  return (
    <section className="on-dark bg-mata-funda text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center">
        <div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-tight">
            Consulte a sua data
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75 max-w-xl">
            Mande a data e o tipo de festa pelo WhatsApp. A gente confirma se está livre
            e indica o plano certo para o seu evento.
          </p>
          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-base text-white/85">
                <Check size={18} strokeWidth={2.5} aria-hidden="true" className="text-ouro-claro flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center justify-center min-h-16 px-6 py-3 rounded-lg bg-ouro-claro text-tinta hover:bg-white transition-colors duration-200"
          >
            <span className="text-lg font-bold">Falar no WhatsApp</span>
            <span className="text-[15px] tabular-nums">{PHONE_DISPLAY}</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-white/30 text-base font-medium hover:bg-white/10 transition-colors duration-200"
          >
            Ver fotos no Instagram ({INSTAGRAM_HANDLE})
          </a>
        </div>
      </div>
    </section>
  )
}
