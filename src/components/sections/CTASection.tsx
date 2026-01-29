import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4" id="kontak">
      <div className="container max-w-4xl mx-auto">
        {/* CTA Card */}
        <div className="glass-card text-center relative overflow-hidden">
          {/* Background glow */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, hsla(30 100% 55% / 0.1) 0%, transparent 70%)',
            }}
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Siap Wujudkan{' '}
              <span className="text-accent text-glow-orange">Bisnis Digital</span> Anda?
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Konsultasikan kebutuhan website atau aplikasi Anda sekarang. 
              Gratis konsultasi, respons cepat, dan harga transparan!
            </p>

            {/* Main CTA Button */}
            <a
              href="https://wa.me/6287862983339"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center gap-3 text-cta-foreground mb-8"
            >
              <MessageCircle className="w-7 h-7" />
              <span className="text-xl md:text-2xl">Hubungi via WhatsApp</span>
            </a>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>087862983339</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Jakarta Utara, Cilincing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">Dipercaya oleh UMKM di seluruh Indonesia</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['100+ Klien Puas', 'Respons < 1 Jam', 'Garansi Revisi', 'Tanpa Biaya Bulanan'].map((badge, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-muted/30 text-muted-foreground text-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
