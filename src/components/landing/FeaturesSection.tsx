import { CalendarCheck, FileSignature, MessagesSquare, type LucideIcon } from 'lucide-react'
import SectionHeader from './SectionHeader'

const groups: { title: string; icon: LucideIcon; items: { name: string; text: string }[] }[] = [
  {
    title: 'Agenda e espaços',
    icon: CalendarCheck,
    items: [
      { name: 'Calendário de disponibilidade', text: 'Datas livres, reservadas e bloqueadas: o cliente vê a mesma agenda que você.' },
      { name: 'Feriados no calendário', text: 'Os feriados nacionais já vêm marcados, e cada plano diz se vale ou não em feriado.' },
      { name: 'Vários espaços por salão', text: 'Cada espaço com a sua agenda, os seus planos e as suas datas bloqueadas.' },
    ],
  },
  {
    title: 'Reserva e pagamento',
    icon: FileSignature,
    items: [
      { name: 'Planos com preço por dia da semana', text: 'Cada plano tem o seu preço e os dias em que vale: um para segunda a quinta, outro para o fim de semana, do jeito que você cobra.' },
      { name: 'Cotação na hora', text: 'O cliente muda plano, data ou horário e vê o total recalculado.' },
      { name: 'Contrato em PDF com aceite', text: 'O contrato sai com os dados da reserva e o cliente aceita antes de pagar.' },
      { name: 'Cartão ou PIX', text: 'Pagamento por cartão (Stripe) ou PIX com QR Code na própria página.' },
    ],
  },
  {
    title: 'Conversa e relacionamento',
    icon: MessagesSquare,
    items: [
      { name: 'Vitrine de salões', text: 'Seu salão aparece para quem procura festa por perto, com logo, fotos e comodidades. O cliente navega sem conta e só entra na hora de reservar.' },
      { name: 'Negociação por chat', text: 'Para pedidos fora do pacote: você manda uma proposta de preço e, aceita, ela vira reserva.' },
      { name: 'Promoções', text: 'Campanhas de indicação, fidelidade e sorteio, aplicadas na reserva.' },
      { name: 'Painel do dono', text: 'Reservas com filtros, clientes, campanhas, feriados e espaços.' },
    ],
  },
]

export default function FeaturesSection() {
  return (
    <section aria-labelledby="recursos" className="bg-papel py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader id="recursos" title="O que o Festário faz pelo seu salão">
          Tudo o que hoje passa por mensagem, agenda de papel e transferência combinada.
        </SectionHeader>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {groups.map(({ title, icon: Icon, items }) => (
            <div key={title}>
              <h3 className="flex items-center gap-3 font-display font-semibold text-2xl text-anil-escuro">
                <span className="inline-flex w-10 h-10 flex-shrink-0 items-center justify-center rounded-lg bg-nevoa-funda text-anil">
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                {title}
              </h3>
              <dl className="mt-6 divide-y divide-linha border-t border-linha">
                {items.map((item) => (
                  <div key={item.name} className="py-4">
                    <dt className="font-bold text-anil-escuro">{item.name}</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed text-grafite">{item.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
