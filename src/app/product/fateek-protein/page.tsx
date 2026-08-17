import type { Metadata } from 'next';
import ProductPageClient from './ProductPageClient';
import { PRODUCT } from '@/data/product';
import { formatPrice } from '@/utils/format';

export const metadata: Metadata = {
  title: 'Fateek Ayurvedic Protein — Premium Protein Supplement',
  description:
    'Shop Fateek Ayurvedic Protein. Premium protein crafted for everyday fitness and wellness. Inspired by Indian wellness traditions.',
  alternates: { canonical: 'https://fateek.in/product/fateek-protein' },
};

export default function ProductPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: PRODUCT.name,
    description: PRODUCT.description,
    brand: { '@type': 'Brand', name: 'Fateek' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: PRODUCT.price,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPageClient />
    </>
  );
}
