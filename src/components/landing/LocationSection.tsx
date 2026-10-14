import { ExternalLink } from 'lucide-react'
import { MAPS_EMBED_URL, MAPS_URL } from '@/lib/contact'

export default function LocationSection() {
  return (
    <section id="localizacao" className="bg-papel py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <header className="max-w-2xl mb-10 md:mb-12">
          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-tight text-tinta">
            Como chegar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pedra">
            Ficamos no Jardim Vila Rica, em Lavras. Mande o link do mapa para os seus convidados.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-start">
          <div className="min-w-0 rounded-2xl overflow-hidden border border-linha bg-musgo aspect-[4/3] lg:aspect-auto lg:h-[420px]">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa com a localização do Recanto Vila Rica"
            />
          </div>

          <div>
            <address className="not-italic">
              <p className="font-display font-semibold text-2xl text-tinta">Endereço</p>
              <p className="mt-3 text-lg leading-relaxed text-tinta-2">
                Rua Bernardino Antônio Tomás, 21
                <br />
                Jardim Vila Rica, Lavras – MG
                <br />
                CEP 37203-775
              </p>
            </address>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-12 px-6 rounded-lg bg-mata text-white text-base font-bold hover:bg-mata-funda transition-colors duration-200"
            >
              Abrir no Google Maps
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
