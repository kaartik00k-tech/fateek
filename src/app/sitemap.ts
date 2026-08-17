import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://fateek.in', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://fateek.in/product/fateek-protein', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://fateek.in/cart', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://fateek.in/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://fateek.in/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://fateek.in/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://fateek.in/policies/shipping', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://fateek.in/policies/returns', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://fateek.in/policies/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://fateek.in/policies/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://fateek.in/policies/disclaimer', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  ];
}
