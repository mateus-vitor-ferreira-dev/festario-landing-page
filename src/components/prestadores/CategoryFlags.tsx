/*
 * As categorias do marketplace como bandeirinhas num cordão: o mesmo motivo do logo e do filtro
 * de categoria da vitrine no app. Cores na ordem milho, pitanga, anil-claro, que se repete.
 */
const CATEGORIES = ['Buffet', 'Churrasco', 'Decoração', 'Maquiagem', 'Bolo e doces', 'Foto e vídeo', 'Música e DJ', 'Recreação infantil', 'Bebidas e bar']

const COLORS = [
  'bg-milho text-anil-escuro',
  'bg-pitanga text-white',
  'bg-anil-claro text-noite',
]

export default function CategoryFlags() {
  // Uma linha só, presa no mesmo cordão: em tela estreita ela rola para o lado em vez de quebrar
  // (bandeirinha em segunda linha ficaria solta, sem cordão).
  return (
    <div className="-mx-5 sm:-mx-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ul aria-label="Categorias de serviço" className="relative flex w-max gap-x-2 px-5 sm:px-6 pt-[2px]">
        <li aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] rounded bg-white/35" />
        {CATEGORIES.map((c, i) => (
          <li
            key={c}
            className={`${COLORS[i % 3]} flag-drop min-w-[6.5rem] px-3 pt-2.5 pb-6 text-center text-[15px] font-bold leading-tight whitespace-nowrap [clip-path:polygon(0_0,100%_0,100%_100%,50%_78%,0_100%)]`}
            style={{ animationDelay: `${150 + i * 70}ms` }}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  )
}
