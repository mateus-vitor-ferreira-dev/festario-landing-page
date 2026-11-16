import Link from 'next/link'

/** Convite para quem presta serviço de festa: leva à página própria deles. */
export default function ForProvidersBand() {
  return (
    <section aria-labelledby="para-prestadores" className="bg-papel pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="rounded-2xl border border-dashed border-anil/30 px-6 py-8 sm:px-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="max-w-2xl">
            <h2 id="para-prestadores" className="font-display font-semibold text-2xl md:text-3xl leading-tight text-anil-escuro">
              Trabalha com festas?
            </h2>
            <p className="mt-2 text-lg leading-relaxed text-grafite">
              Buffet, decoração, maquiagem, doces, foto e música também têm vitrine no Festário, com pedidos de orçamento que já chegam com a data.
            </p>
          </div>
          <Link
            href="/prestadores"
            className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-anil/30 bg-papel text-anil text-base font-bold hover:border-anil transition-colors duration-200"
          >
            Conhecer o Festário para prestadores
          </Link>
        </div>
      </div>
    </section>
  )
}
