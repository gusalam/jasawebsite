import { Check, Store, Briefcase, FileText, ShoppingCart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const WebsiteServiceSection = () => {
  const services = [
    {
      icon: FileText,
      title: 'Website Landing Page',
      description: 'Halaman promosi satu halaman yang fokus untuk konversi. Cocok untuk campaign marketing, launching produk, atau personal branding.',
      features: ['Desain Modern', 'Mobile Responsive', 'Form Kontak', 'Optimasi SEO'],
    },
    {
      icon: Briefcase,
      title: 'Website Company Profile',
      description: 'Website profesional untuk memperkenalkan perusahaan Anda. Tampilkan visi misi, layanan, portfolio, dan kontak dengan desain yang elegan.',
      features: ['Multi Halaman', 'Gallery Portfolio', 'Google Maps', 'WhatsApp Integration'],
    },
    {
      icon: Store,
      title: 'Website UMKM & Katalog',
      description: 'Solusi digital lengkap untuk UMKM. Tampilkan produk dengan katalog online yang mudah dikelola tanpa keahlian teknis.',
      features: ['Katalog Produk', 'Admin Panel', 'Order via WhatsApp', 'Gratis Domain'],
    },
    {
      icon: ShoppingCart,
      title: 'Website E-Commerce',
      description: 'Toko online lengkap dengan sistem pembayaran, keranjang belanja, dan manajemen stok. Mulai jualan online dengan profesional.',
      features: ['Payment Gateway', 'Manajemen Stok', 'Dashboard Admin', 'Laporan Penjualan'],
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-card/30" id="jasa-website">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              LAYANAN WEBSITE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Jasa Pembuatan Website Murah{' '}
              <span className="text-accent text-glow-orange">untuk UMKM</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Kami menyediakan jasa buat website profesional dengan harga terjangkau khusus untuk 
              pelaku UMKM, bisnis kecil, dan personal brand di Indonesia. Semua paket sudah termasuk 
              gratis hosting seumur hidup tanpa biaya bulanan.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation={index % 2 === 0 ? 'fade-left' : 'fade-right'} delay={index * 100}>
              <article className="glass-card hover:border-accent/40 transition-all duration-300 group h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-foreground">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Semua website yang kami buat sudah{' '}
              <strong className="text-foreground">mobile responsive</strong>,{' '}
              <strong className="text-foreground">SEO friendly</strong>, dan{' '}
              <strong className="text-foreground">siap production</strong>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WebsiteServiceSection;
