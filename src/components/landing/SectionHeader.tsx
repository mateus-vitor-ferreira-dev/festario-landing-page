import type { ReactNode } from 'react'

export default function SectionHeader({
  id,
  title,
  children,
  className = 'mb-10 md:mb-14',
}: {
  id: string
  title: string
  children?: ReactNode
  className?: string
}) {
  return (
    <header className={`max-w-2xl ${className}`}>
      <h2 id={id} className="font-display font-semibold text-4xl md:text-5xl leading-tight text-anil-escuro">
        {title}
      </h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-grafite">{children}</p>}
    </header>
  )
}
