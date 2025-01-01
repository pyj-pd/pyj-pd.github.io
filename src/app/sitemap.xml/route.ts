import { generateSitemapXML } from '@/utils/seo'

export const dynamic = 'force-static'

export async function GET() {
  return new Response(await generateSitemapXML(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
