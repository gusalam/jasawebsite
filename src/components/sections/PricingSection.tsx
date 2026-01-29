import { Check, Star, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const PricingSection = () => {
  const packages = [
    {
      name: 'Landing Page',
      price: '150.000',
      period: 'sekali bayar',
      description: 'Cocok untuk promosi produk, personal branding, atau campaign marketing',
      features: [
        'Desain Modern & Responsif',
        '1 Halaman Lengkap',
        'Form Kontak WhatsApp',
        'Optimasi SEO Dasar',
        'Gratis Hosting Seumur Hidup',
        'Revisi 2x',
      ],
      popular: false,
      ctaText: 'Pesan Sekarang',
    },
    {
      name: 'Website UMKM',
      price: '500.000',
      period: 'sekali bayar',
      description: 'Solusi lengkap untuk UMKM dengan katalog produk dan admin panel',
      features: [
        'Semua Fitur Landing Page',
        'Multi Halaman (5-7 Halaman)',
        'Katalog Produk Online',
        'Admin Panel Mudah Dikelola',
        'Integrasi WhatsApp Order',
        'Gratis Domain .com (1 Tahun)',
        'Gratis Hosting Seumur Hidup',
        'Revisi Unlimited',
      ],
      popular: true,
      ctaText: 'Pilihan Terbaik',
    },
    {
      name: 'E-Commerce',
      price: '1.500.000',
      period: 'sekali bayar',
      description: 'Toko online lengkap dengan sistem pembayaran dan manajemen stok',
      features: [
        'Semua Fitur Website UMKM',
        'Keranjang Belanja',
        'Payment Gateway',
        'Manajemen Stok Otomatis',
        'Laporan Penjualan',
        'Notifikasi Email & WhatsApp',
        'Gratis SSL Certificate',
        'Support Prioritas',
      ],
      popular: false,
      ctaText: 'Konsultasi Gratis',
    },
  ];

  const appPricing = {
    name: 'Aplikasi Mobile',
    startPrice: '2.000.000',
    description: 'Harga aplikasi Android & iOS tergantung kompleksitas fitur',
    examples: [
      { type: 'Aplikasi Katalog Sederhana', price: 'Mulai Rp2 Juta' },
      { type: 'Aplikasi Kasir/POS', price: 'Mulai Rp3 Juta' },
      { type: 'Aplikasi E-Commerce', price: 'Mulai Rp5 Juta' },
      { type: 'Aplikasi Custom', price: 'Konsultasi Dulu' },
    ],
  };

  return (
    <section className="py-16 md:py-24 px-4" id="harga">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
              HARGA TRANSPARAN
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Harga & Paket{' '}
              <span className="text-accent text-glow-orange">Layanan</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. 
              Semua harga sudah termasuk gratis hosting tanpa biaya bulanan.
            </p>
          </div>
        </ScrollReveal>

        {/* Website Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
              <article
                className={`glass-card relative h-full flex flex-col ${
                  pkg.popular 
                    ? 'border-2 border-accent ring-2 ring-accent/20' 
                    : 'hover:border-primary/40'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-cta rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-cta-foreground fill-current" />
                    <span className="text-sm font-bold text-cta-foreground">TERLARIS</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-muted-foreground text-lg">Rp</span>
                    <span className="text-4xl font-black font-display text-foreground">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6287862983339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-lg font-bold transition-all duration-300 mt-auto ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-accent to-cta text-cta-foreground hover:shadow-lg hover:shadow-accent/30'
                      : 'bg-primary/20 text-primary hover:bg-primary/30'
                  }`}
                >
                  {pkg.ctaText}
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* App Pricing */}
        <ScrollReveal animation="fade-up" delay={450}>
          <div className="glass-card">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                {appPricing.name}
              </h3>
              <p className="text-muted-foreground">
                {appPricing.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {appPricing.examples.map((example, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 text-center">
                  <p className="text-foreground font-medium mb-1">{example.type}</p>
                  <p className="text-secondary font-bold">{example.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://wa.me/6287862983339"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/20 text-secondary rounded-lg font-bold hover:bg-secondary/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis untuk Aplikasi
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
