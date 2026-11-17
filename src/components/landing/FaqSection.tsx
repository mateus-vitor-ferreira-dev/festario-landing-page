import { ChevronDown } from 'lucide-react'
import type { Faq } from '@/content/faqs'
import SectionHeader from './SectionHeader'

export default function FaqSection({
  faqs,
  id = 'duvidas',
  title = 'Perguntas frequentes',
  className = 'bg-nevoa',
}: {
  faqs: Faq[]
  id?: string
  title?: string
  className?: string
}) {
  return (
    <section aria-labelledby={id} className={`${className} py-20 md:py-28`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <SectionHeader id={id} title={title} className="" />

        <div className="border-t border-linha">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-linha">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold text-anil-escuro [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="flex-shrink-0 text-anil transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 pr-8 text-base leading-relaxed text-grafite">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
