import { Fragment } from 'react'
import Varal from '@/components/brand/Varal'
import { APP_SALONS_URL, APP_SERVICES_URL } from '@/lib/contact'

/*
 * Abertura da plataforma: o título diz o que o Festário reúne, e logo abaixo três bandeirinhas
 * grandes, presas no mesmo cordão, levam cada público à sua parte da página. As cores seguem a
 * ordem do varal (milho, pitanga, anil-claro).
 */

const doors = [
  {
    href: '#fazer-festa',
    flag: 'bg-milho text-anil-escuro',
    label: 'Vou fazer uma festa',
    text: 'Salão com a data livre e quem cuida do resto.',
  },
  {
    href: '#saloes',
    flag: 'bg-pitanga text-white',
    label: 'Tenho um salão',
    text: 'Agenda, contrato e sinal sem o vaivém do WhatsApp.',
  },
  {
    href: '#prestadores',
    flag: 'bg-anil-claro text-noite',
    label: 'Trabalho com festas',
    text: 'Pedidos de orçamento que já chegam com a data.',
  },
]

const HEADLINE = 'O salão, o buffet e a decoração da sua festa num lugar só'

/* Ordem da abertura: o varal cai (200–1100 ms), o título sobe palavra a palavra junto, depois o
   texto, os botões e por fim as três portas, que balançam até parar. */
const WORD_START = 250
const WORD_STEP = 45
const AFTER_TITLE = WORD_START + HEADLINE.split(' ').length * WORD_STEP

export default function HomeHero() {
  return (
    <section className="on-dark relative bg-anil-escuro text-white overflow-hidden min-h-svh flex flex-col">
      <Varal count={9} width={400} className="h-[52px] sm:hidden" />
      <Varal count={23} width={1200} className="hidden sm:block h-[clamp(60px,8vw,110px)]" />
      <div className="relative max-w-6xl w-full mx-auto px-5 sm:px-6 pt-[clamp(140px,20vh,210px)] pb-14 flex-1 flex flex-col justify-center">
        <h1 className="font-display font-semibold text-[clamp(2.7rem,7.6vw,6.5rem)] leading-[0.98] tracking-[-0.01em] max-w-[12em]">
          {HEADLINE.split(' ').map((word, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <span className="line-mask">
                <span className="line-rise" style={{ animationDelay: `${WORD_START + i * WORD_STEP}ms` }}>
                  {word}
                </span>
              </span>
            </Fragment>
          ))}
        </h1>
        <p style={{ animationDelay: `${AFTER_TITLE}ms` }} className="fade-up mt-8 text-lg sm:text-2xl leading-relaxed text-nevoa-texto max-w-[38rem]">
          Veja os salões com a data livre e reserve sem trocar mensagem. Depois encontre quem cuida do resto, do bolo ao
          fotógrafo, livre no mesmo dia.
        </p>

        <div style={{ animationDelay: `${AFTER_TITLE + 120}ms` }} className="fade-up mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href={APP_SALONS_URL}
            className="press inline-flex items-center justify-center min-h-13 px-7 rounded-full bg-anil-claro text-noite text-base font-bold hover:bg-white transition-colors duration-200"
          >
            Procurar um salão
          </a>
          <a
            href={APP_SERVICES_URL}
            className="press inline-flex items-center justify-center min-h-13 px-7 rounded-full border border-white/35 text-white text-base font-medium hover:bg-white/10 transition-colors duration-200"
          >
            Ver serviços de festa
          </a>
        </div>

        <nav aria-label="Escolha o seu caminho" className="mt-16 md:mt-20">
          <ul className="relative grid gap-x-4 gap-y-6 sm:grid-cols-3 pt-[2px]">
            <li
              aria-hidden="true"
              style={{ animationDelay: `${AFTER_TITLE + 200}ms` }}
              className="fade-up hidden sm:block absolute inset-x-0 top-0 h-[2px] rounded bg-white/35"
            />
            {doors.map((d, i) => (
              <li key={d.href} className="pennant-drop" style={{ animationDelay: `${AFTER_TITLE + 300 + i * 150}ms` }}>
                <a href={d.href} className="group flex flex-col items-start rounded-sm">
                  <span
                    className={`${d.flag} pennant block w-full max-w-[17rem] px-5 pt-4 pb-10 font-display font-semibold text-2xl leading-tight [clip-path:polygon(0_0,100%_0,100%_100%,50%_76%,0_100%)]`}
                  >
                    {d.label}
                  </span>
                  <span className="mt-2 max-w-[17rem] text-base leading-snug text-nevoa-texto group-hover:text-white transition-colors duration-200">
                    {d.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
