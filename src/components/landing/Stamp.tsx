/*
 * Selo de milho, torto como carimbo, que "bate" no card quando ele entra na tela (.stamp no
 * globals.css). Precisa estar dentro de um elemento com data-reveal.
 */
export default function Stamp({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`stamp absolute grid place-items-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-milho text-anil-escuro text-center ${className}`}
    >
      <span className="absolute inset-1.5 rounded-full border-2 border-dashed border-anil-escuro/35" aria-hidden="true" />
      <span className="px-4 font-display font-semibold text-lg sm:text-xl leading-[1.05]">{children}</span>
    </span>
  )
}
