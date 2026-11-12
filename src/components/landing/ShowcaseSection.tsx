import { RECANTO_INSTAGRAM_HANDLE, RECANTO_INSTAGRAM_URL } from '@/lib/contact'

/*
 * Quem usa: por enquanto só uma linha sobre o Recanto Vila Rica, o primeiro salão no Festário.
 * A cena com as fotos do Recanto em tela cheia (commit ec468e2) volta quando houver fotos boas.
 */
export default function ShowcaseSection() {
  return (
    <section aria-labelledby="quem-usa" className="bg-nevoa py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] md:items-end">
        <div className="max-w-[40rem]">
          <h2 id="quem-usa" className="font-display font-semibold text-3xl md:text-4xl leading-tight text-anil-escuro">
            O Recanto Vila Rica já reserva pelo Festário
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-grafite">
            Espaço de festas em Lavras (MG) e o primeiro salão na plataforma: a agenda, os pacotes e as reservas do Recanto
            rodam no Festário.
          </p>
        </div>
        <a
          href={RECANTO_INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-start md:justify-self-end inline-flex items-center min-h-11 font-bold text-anil underline decoration-anil/30 underline-offset-4 hover:decoration-anil"
        >
          Ver o Recanto no Instagram ({RECANTO_INSTAGRAM_HANDLE})
        </a>
      </div>
    </section>
  )
}
