import { SITE_URL } from '@/lib/contact'

/** Imagem de compartilhamento: o Next substitui o openGraph inteiro em cada página, então toda página a repete. */
export const OG_IMAGE = {
  url: '/og-festario.png',
  width: 1200,
  height: 630,
  alt: 'Logotipo do Festário sob um varal de bandeirinhas, com o slogan Data marcada, festa garantida.',
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`

type Faq = { q: string; a: string }

/** FAQPage do schema.org a partir da mesma lista que aparece na página. */
export function faqPageSchema(faqs: Faq[], url: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/** Trilha a partir da home: o buscador mostra "Festário › Para salões" no lugar da URL. */
export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Festário', url: SITE_URL }, ...trail].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/** Dados estruturados em JSON-LD. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // `<` escapado: nenhum texto dos dados consegue fechar a tag <script> antes da hora
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
