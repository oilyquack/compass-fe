import type { MetadataRoute } from 'next'

import artists from '../data/artists.json'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.compass-music.com/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.compass-music.com/apply',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.compass-music.com/line-up',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.compass-music.com/mailing-list',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.compass-music.com/faqs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.compass-music.com/tickets',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...artists.map((artist) => ({
        url: `https://www.compass-music.com/artist/${artist.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))
  ]
}