import { SITEMAP_URL } from '@/constants/urls'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: SITEMAP_URL,
  }
}
