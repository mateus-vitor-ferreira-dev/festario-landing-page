import { APP_LOGIN_URL, APP_SALONS_URL } from '@/lib/contact'

export default function ForClientsSection() {
  return (
    <section aria-labelledby="para-quem-reserva" className="bg-papel pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="rounded-2xl bg-nevoa-funda px-6 py-10 sm:px-10 md:py-12 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="max-w-2xl">
            <h2 id="para-quem-reserva" className="font-display font-semibold text-3xl md:text-4xl leading-tight text-anil-escuro">
              Vai fazer uma festa?
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-grafite">
              Nos salões que usam o Festário você vê os dias livres, escolhe o pacote, assina o contrato e
              paga, tudo sem trocar mensagens.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
            <a
              href={APP_SALONS_URL}
              className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-anil text-white text-base font-bold hover:bg-anil-escuro transition-colors duration-200"
            >
              Quero reservar uma festa
            </a>
            <a
              href={APP_LOGIN_URL}
              className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-anil/30 bg-papel text-anil text-base font-bold hover:border-anil transition-colors duration-200"
            >
              Já tenho conta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
