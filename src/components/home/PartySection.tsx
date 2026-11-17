import SectionHeader from '@/components/landing/SectionHeader'
import Steps from '@/components/landing/Steps'
import { APP_SALONS_URL, APP_SERVICES_URL } from '@/lib/contact'

// É uma sequência de verdade (do salão ao orçamento), por isso os números.
const steps = [
  {
    title: 'Escolha a data e o salão',
    text: 'Na vitrine aparecem os salões com fotos, comodidades e os dias livres na agenda. Dá para olhar tudo sem criar conta.',
  },
  {
    title: 'Reserve com o preço fechado',
    text: 'A cotação sai na hora, do pacote aos adicionais. Você aceita o contrato em PDF e paga o sinal direto ao salão.',
  },
  {
    title: 'Complete com os serviços',
    text: 'Buffet, decoração, doces, foto, música: aparecem os profissionais livres na data da festa, e os indicados pelo salão vêm primeiro.',
  },
  {
    title: 'Peça orçamento sem repetir tudo',
    text: 'O pedido já leva a data, o tipo de festa e o número de convidados. A resposta chega com o valor, e aí vocês combinam pelo WhatsApp.',
  },
]

export default function PartySection() {
  return (
    <section aria-labelledby="fazer-festa" className="bg-nevoa py-20 md:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader id="fazer-festa" title="Vai fazer uma festa?">
          Aniversário, casamento, chá de bebê ou confraternização: o espaço e os serviços saem do mesmo lugar, e para você é
          grátis.
        </SectionHeader>

        <Steps steps={steps} tone="milho" />

        <div className="mt-12 flex flex-col sm:flex-row gap-3">
          <a
            href={APP_SALONS_URL}
            className="press inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-anil text-white text-base font-bold hover:bg-anil-escuro transition-colors duration-200"
          >
            Procurar um salão
          </a>
          <a
            href={APP_SERVICES_URL}
            className="press inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-anil/30 bg-papel text-anil text-base font-bold hover:border-anil transition-colors duration-200"
          >
            Ver serviços de festa
          </a>
        </div>
      </div>
    </section>
  )
}
