import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/contact'

// Site estático: o arquivo é gerado no build, e o rebuild diário o mantém atualizado
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
