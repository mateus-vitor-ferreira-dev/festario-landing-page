/*
 * O pedido de orçamento como o prestador recebe no painel "Meu negócio": data, tipo de festa,
 * convidados, a indicação do salão e a mensagem. Desenhado em código, com dados de exemplo.
 */
export default function QuoteRequestCard() {
  return (
    <figure className="relative">
      <div className="rounded-2xl bg-papel text-anil-escuro shadow-[0_24px_60px_-28px_rgba(20,25,54,0.55)] border-l-[6px] border-pitanga p-6 sm:p-7 max-w-md">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display font-semibold text-2xl leading-tight">Sábado, 21 de março</p>
            <p className="mt-1 text-grafite">Aniversário de 15 anos, 120 convidados</p>
          </div>
          <span className="flex-shrink-0 rounded-full border border-pitanga px-3 py-1 text-sm font-bold">Novo</span>
        </div>
        <p className="mt-4 inline-block rounded-full bg-milho/25 px-3 py-1 text-sm font-bold text-[#7f5600]">
          Indicação do Recanto Vila Rica
        </p>
        <p className="mt-4 leading-relaxed">
          Mesa de doces com tema jardim, em tons de rosa e verde. A festa começa às 19h no salão.
        </p>
        <p className="mt-3 text-sm text-grafite">Pacote de interesse: Mesa de doces para 100 pessoas</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="inline-flex items-center min-h-11 px-5 rounded-lg bg-anil text-white font-bold">Responder</span>
          <span className="inline-flex items-center min-h-11 px-5 rounded-lg border border-linha text-anil font-bold">Não posso atender</span>
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-grafite max-w-md">
        Exemplo de pedido no painel. O cliente escolheu a data na vitrine, onde você só aparece se estiver livre nesse dia.
      </figcaption>
    </figure>
  )
}
