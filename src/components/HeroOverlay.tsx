import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check, Server, Calendar, Zap, Smartphone, Globe, MessageCircle } from 'lucide-react';

const HeroOverlay = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([titleRef.current, priceRef.current, benefitsRef.current, ctaRef.current], {
        opacity: 0,
        y: 50,
      });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .to(
          '.badge-item',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .to(
          priceRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .to(
          benefitsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .to(
          '.benefit-item',
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=0.2'
        );

      // Continuous glow animation for CTA
      gsap.to(ctaRef.current, {
        boxShadow: '0 0 40px hsla(30, 100%, 55%, 0.8), 0 0 80px hsla(30, 100%, 55%, 0.4)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const badges = [
    { icon: Server, text: 'FREE HOSTING SERVER' },
    { icon: Calendar, text: 'TANPA BIAYA BULANAN' },
    { icon: Zap, text: 'GRATIS SIAP PRODUCTION' },
  ];

  const benefits = [
    { icon: Globe, text: 'Website Profesional' },
    { icon: Smartphone, text: 'Aplikasi Android & iOS' },
    { icon: Check, text: 'Tanpa Biaya Bulanan!' },
  ];

  return (
    <div ref={containerRef} className="content-overlay min-h-screen flex flex-col justify-center items-center px-4 py-8 md:py-16">
      {/* Main Title */}
      <div ref={titleRef} className="text-center mb-6 md:mb-8">
        <p className="text-primary text-lg md:text-xl font-semibold mb-2 tracking-widest">
          JASA PEMBUATAN
        </p>
        <h1 className="hero-title text-foreground leading-tight">
          APLIKASI & WEBSITE
        </h1>
      </div>

      {/* Feature Badges */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="badge-item neon-badge flex items-center gap-2 opacity-0 translate-y-5"
          >
            <badge.icon className="w-5 h-5 text-accent" />
            <span className="text-foreground font-semibold text-sm md:text-base">
              {badge.text}
            </span>
          </div>
        ))}
      </div>

      {/* Spacer for 3D content */}
      <div className="h-[300px] md:h-[350px] lg:h-[400px] w-full" />

      {/* Pricing Section */}
      <div ref={priceRef} className="text-center mb-6 md:mb-8">
        <p className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-display">
          Harga Mulai
        </p>
        <h2 className="price-text">
          RP 150 RIBUAN!
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="text-xl md:text-2xl">🔥</span>
          <p className="text-accent text-lg md:text-xl font-bold">
            Gratis Hosting Seumur Hidup &<br className="md:hidden" /> Tanpa Biaya Bulanan!
          </p>
        </div>
      </div>

      {/* Benefits List */}
      <div ref={benefitsRef} className="mb-8 md:mb-10 opacity-0">
        <div className="space-y-3 md:space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-item flex items-center gap-3 text-lg md:text-xl opacity-0 -translate-x-5"
            >
              <div className="benefit-check">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-foreground font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <a
        ref={ctaRef}
        href="https://wa.me/6287862983339"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button flex items-center gap-3 text-cta-foreground opacity-0 scale-90"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        <span>WA: 087862983339</span>
      </a>

      {/* Footer */}
      <div className="mt-8 md:mt-12 text-center">
        <p className="text-xl md:text-2xl font-bold text-foreground font-display">
          Tretan Developer
        </p>
        <p className="text-muted-foreground text-sm md:text-base mt-1">
          Jakarta Utara, Cilincing
        </p>
      </div>
    </div>
  );
};

export default HeroOverlay;
