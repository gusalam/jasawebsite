import { useState, useEffect } from 'react';
import Scene from '@/components/three/Scene';
import HeroOverlay from '@/components/HeroOverlay';
import MeteorParticles from '@/components/MeteorParticles';
import BackgroundMusic from '@/components/BackgroundMusic';
import DancingCat from '@/components/three/DancingCat';
import WhyNeedSection from '@/components/sections/WhyNeedSection';
import WebsiteServiceSection from '@/components/sections/WebsiteServiceSection';
import AppServiceSection from '@/components/sections/AppServiceSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';
import meteorShowerBg from '@/assets/meteor-shower-bg.jpg';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax offset - moves slower than scroll (0.3 = 30% of scroll speed)
  const parallaxOffset = scrollY * 0.3;

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Music Player */}
      <BackgroundMusic />
      
      {/* Dancing Cat Animation */}
      <DancingCat />
      
      {/* Meteor shower background image with parallax */}
      <div 
        className="fixed inset-0 z-0 will-change-transform"
        style={{
          backgroundImage: `url(${meteorShowerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
        }}
      />
      
      {/* Dark overlay for better contrast */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, hsla(230, 60%, 8%, 0.7) 0%, hsla(250, 50%, 12%, 0.6) 30%, hsla(230, 50%, 10%, 0.7) 60%, hsla(220, 50%, 8%, 0.8) 100%)',
        }}
      />
      
      {/* Radial glow effects */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 30%, hsla(210, 100%, 55%, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 30% 70%, hsla(270, 80%, 55%, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 80% 80%, hsla(30, 100%, 55%, 0.08) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Animated meteor particles */}
      <MeteorParticles />
      {/* Three.js Canvas - Hero Section Only */}
      <Scene />
      
      {/* Hero Section with H1 */}
      <header>
        <HeroOverlay />
      </header>

      {/* Main Content - SEO Sections */}
      <article className="relative z-10 bg-background">
        {/* Section: Kenapa Butuh Website & Aplikasi */}
        <WhyNeedSection />

        {/* Section: Jasa Pembuatan Website Murah untuk UMKM */}
        <WebsiteServiceSection />

        {/* Section: Jasa Pembuatan Aplikasi Android & iOS */}
        <AppServiceSection />

        {/* Section: Portfolio */}
        <PortfolioSection />

        {/* Section: Keunggulan Layanan Kami */}
        <AdvantagesSection />

        {/* Section: Harga & Paket */}
        <PricingSection />

        {/* Section: FAQ SEO */}
        <FAQSection />

        {/* Section: CTA */}
        <CTASection />
      </article>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
