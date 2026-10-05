import HeroSlider from '@/components/HeroSlider';
import FeaturesSection from '@/components/FeaturesSection';
import VentureHubSection from '@/components/VentureHubSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WorldwideSection from '@/components/WorldwideSection';
import NewsletterSection from '@/components/NewsletterSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Advanced Slider */}
      <HeroSlider />

      {/* 2. Features: Finance with expert leaders in the US */}
      <FeaturesSection />

      {/* 3. Connect Venture HUB */}
      <VentureHubSection />

      {/* 4. What We Do: Funding Solutions Tailored to Your Industry (Bonds, M&A, Funds) */}
      <WhatWeDoSection />

      {/* 5. Testimonials: Hear From Our Clients */}
      <TestimonialsSection />

      {/* 6. Worldwide Experience: We Always Try To Understand Clients' Expectation */}
      <WorldwideSection />

      {/* 7. Newsletter: Stay Up-to-Date on Funds, Trends and Insights */}
      <NewsletterSection />
    </div>
  );
}
