import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CartProvider from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer/CartDrawer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://fateek.in'),
  title: {
    default: 'Fateek — Ancient Wisdom. Modern Protein.',
    template: '%s | Fateek',
  },
  description:
    'Premium Ayurvedic-inspired protein crafted for your everyday fitness and wellness journey. Shop Fateek — where tradition meets modern nutrition.',
  keywords: [
    'Ayurvedic protein',
    'Indian protein supplement',
    'Fateek protein',
    'herbal protein powder',
    'fitness supplement India',
    'wellness protein',
  ],
  authors: [{ name: 'Fateek' }],
  creator: 'Fateek',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://fateek.in',
    siteName: 'Fateek',
    title: 'Fateek — Ancient Wisdom. Modern Protein.',
    description:
      'Premium Ayurvedic-inspired protein crafted for your everyday fitness and wellness journey.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fateek — Ancient Wisdom. Modern Protein.',
    description:
      'Premium Ayurvedic-inspired protein crafted for your everyday fitness and wellness journey.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body>
        <CartProvider>
          <Header />
          <CartDrawer />
          <ScrollRevealProvider>
            <main>{children}</main>
          </ScrollRevealProvider>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
