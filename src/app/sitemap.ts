import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/contact'

// Site estático: o arquivo é gerado no build.
export const dynamic = 'force-static'

// Data da última mudança de conteúdo de cada página, atualizada à mão junto com o texto. Usar a data
// do build faria o rebuild diário anunciar mudança todo dia, e o Google passa a ignorar o campo.
const pages: { path: string; lastModified: string; priority: number }[] = [
  { path: '', lastModified: '2026-11-17', priority: 1 },
  { path: '/para-saloes', lastModified: '2026-11-17', priority: 0.9 },
  { path: '/prestadores', lastModified: '2026-11-17', priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: p.lastModified,
    changeFrequency: 'monthly',
    priority: p.priority,
  }))
}
