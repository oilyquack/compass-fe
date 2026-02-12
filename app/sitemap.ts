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
      url: 'https://www.compass-music.com/archive/2025/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.compass-music.com/mailing-list',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.compass-music.com/about',
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
      url: 'https://www.compass-music.com/volunteer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.compass-music.com/archive/2025/venues',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    ...artists.map((artist) => ({
        url: `https://www.compass-music.com/archive/2025/artist/${artist.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.9,
    }))
  ]
}