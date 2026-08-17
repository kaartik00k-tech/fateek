import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection/BenefitsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs/WhyChooseUs';
import ProductShowcase from '@/components/home/ProductShowcase/ProductShowcase';
import IngredientsSection from '@/components/home/IngredientsSection/IngredientsSection';
import NutritionSection from '@/components/home/NutritionSection/NutritionSection';
import HowToUseSection from '@/components/home/HowToUseSection/HowToUseSection';
import AudienceSection from '@/components/home/AudienceSection/AudienceSection';
import TestimonialsSection from '@/components/home/TestimonialsSection/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection/FaqSection';
import FinalCta from '@/components/home/FinalCta/FinalCta';
import TrustBar from '@/components/home/TrustBar/TrustBar';

export const metadata: Metadata = {
  title: 'Fateek — Ancient Wisdom. Modern Protein.',
  description:
    'Premium Ayurvedic-inspired protein crafted for your everyday fitness and wellness journey. Shop Fateek today.',
  alternates: { canonical: 'https://fateek.in' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BenefitsSection />
      <WhyChooseUs />
      <ProductShowcase />
      <IngredientsSection />
      <NutritionSection />
      <HowToUseSection />
      <AudienceSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
