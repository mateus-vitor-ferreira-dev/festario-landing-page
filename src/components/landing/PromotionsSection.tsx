const promotions = [
  {
    name: 'Indique e Ganhe',
    highlight: '10% de desconto',
    description:
      'Indique um amigo e, se ele fechar conosco, na sua próxima reserva você recebe 10% de desconto automático.',
    validity: 'Válida de março até agosto.',
  },
  {
    name: 'Sorteio VIP',
    highlight: 'Reserva gratuita',
    description:
      'Ao fazer uma reserva, você entra automaticamente no sorteio de uma reserva gratuita em data determinada.',
    validity: 'Válida de agosto até dezembro.',
  },
  {
    name: 'Sempre Aqui',
    highlight: '10% em todas as próximas',
    description:
      'Se você reservar nosso espaço mais de uma vez no ano, receberá 10% de desconto em todas as próximas reservas.',
    validity: 'Válida o ano todo.',
  },
]

export default function PromotionsSection() {
  return (
    <section id="promocoes" className="bg-folha py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <header className="max-w-2xl mb-10 md:mb-12">
          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-tight text-tinta">
            Promoções
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pedra">
            Descontos para quem indica amigos e para quem volta a fazer festa com a gente.
            Todos são aplicados automaticamente na reserva.
          </p>
        </header>

        <ul className="grid md:grid-cols-3 border-t border-linha">
          {promotions.map((promo) => (
            <li
              key={promo.name}
              className="flex flex-col py-8 border-b border-linha md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0 md:[&:not(:last-child)]:border-r"
            >
              <h3 className="font-display font-semibold text-2xl text-tinta">{promo.name}</h3>
              <p className="mt-1 font-display italic text-xl text-ouro-texto">{promo.highlight}</p>
              <p className="mt-4 text-base leading-relaxed text-tinta-2 flex-1">{promo.description}</p>
              <p className="mt-5 text-[15px] text-pedra">{promo.validity}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
