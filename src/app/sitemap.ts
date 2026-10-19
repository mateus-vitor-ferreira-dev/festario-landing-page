import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/contact'

// Site estático: o arquivo é gerado no build, e o rebuild diário o mantém atualizado
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
