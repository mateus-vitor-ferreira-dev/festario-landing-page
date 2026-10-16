import SectionHeader from './SectionHeader'

const steps = [
  {
    title: 'Seu salão entra por convite',
    text: 'A equipe do Festário cadastra o salão e manda um link de convite. Por ele você cria a sua conta de dono.',
  },
  {
    title: 'Monte espaços, planos e agenda',
    text: 'Cadastre cada espaço do salão, defina os planos com preço por dia da semana e bloqueie as datas que não estão à venda. Os feriados já aparecem no calendário.',
  },
  {
    title: 'O cliente reserva sozinho',
    text: 'Ele escolhe uma data livre e o plano, recebe a cotação na hora, lê e aceita o contrato e paga com cartão ou PIX.',
  },
  {
    title: 'Você acompanha pelo painel',
    text: 'Reservas com filtros, clientes, negociações e promoções ficam no mesmo lugar, sem planilha nem print de comprovante.',
  },
]

export default function HowItWorksSection() {
  return (
    <section aria-labelledby="como-funciona" className="bg-nevoa py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader id="como-funciona" title="Como funciona para o dono do salão">
          Do convite à primeira reserva paga, em quatro passos.
        </SectionHeader>

        <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t-2 border-anil pt-5">
              <span className="font-display font-semibold text-3xl leading-none text-anil tabular-nums" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display font-semibold text-2xl leading-snug text-anil-escuro">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-grafite">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
