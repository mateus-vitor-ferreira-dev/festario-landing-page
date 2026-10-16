import { ChevronDown } from 'lucide-react'
import SectionHeader from './SectionHeader'

const faqs = [
  {
    q: 'Preciso instalar alguma coisa?',
    a: 'Não. O Festário é um app web: abre no navegador do celular ou do computador, para você e para o cliente.',
  },
  {
    q: 'Como o meu salão entra no Festário?',
    a: 'Por convite. A equipe cadastra o salão e manda um link para você criar a conta de dono. A partir daí você configura espaços, planos e datas bloqueadas pelo painel.',
  },
  {
    q: 'Posso cadastrar mais de um espaço?',
    a: 'Pode. Cada espaço do salão tem a sua agenda, os seus planos e as suas datas bloqueadas.',
  },
  {
    q: 'Como o cliente paga?',
    a: 'Com cartão, pelo Stripe, ou com PIX, pelo QR Code que aparece na própria página da reserva.',
  },
  {
    q: 'E se o cliente quiser algo fora dos planos?',
    a: 'Ele abre uma negociação: um chat com o salão que termina numa proposta de preço e datas. Se ele aceitar, a proposta vira reserva.',
  },
  {
    q: 'Quanto custa?',
    a: 'Os planos são Gratuito, Inicial e Profissional, e os preços ainda estão sendo definidos. Fale com a gente para entrar.',
  },
]

export default function FaqSection() {
  return (
    <section aria-labelledby="duvidas" className="bg-nevoa py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <SectionHeader id="duvidas" title="Dúvidas" className="" />

        <div className="border-t border-linha">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-linha">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold text-anil-escuro [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="flex-shrink-0 text-anil transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 pr-8 text-base leading-relaxed text-grafite">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
