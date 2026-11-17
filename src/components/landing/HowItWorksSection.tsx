import SectionHeader from './SectionHeader'
import Steps from './Steps'

const steps = [
  {
    title: 'Seu salão entra por convite',
    text: 'A equipe do Festário cadastra o salão e manda um link de convite. Por ele você cria a sua conta de dono.',
  },
  {
    title: 'Monte espaços, pacotes e agenda',
    text: 'Cadastre cada espaço, monte os pacotes cobrando do seu jeito (valor fixo, por hora ou por convidado) e bloqueie as datas que não estão à venda. Os feriados já aparecem no calendário.',
  },
  {
    title: 'O cliente reserva sozinho',
    text: 'Ele escolhe uma data livre e o pacote, recebe a cotação na hora, lê e aceita o contrato e paga o sinal direto ao salão.',
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

        <Steps steps={steps} tone="anil" />
      </div>
    </section>
  )
}
