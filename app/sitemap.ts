import type { MetadataRoute } from 'next'

const baseUrl = 'https://rajdhaniroopgarden.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dining`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/experiences`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/offers`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/rooms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/spa`,
      lastModified: new Date(),
    },
  ]
}
