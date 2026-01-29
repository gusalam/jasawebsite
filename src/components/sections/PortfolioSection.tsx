import { ExternalLink, Smartphone, Globe, ShoppingCart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-Commerce Fashion',
      category: 'Website',
      description: 'Toko online fashion dengan fitur keranjang belanja, pembayaran, dan tracking pesanan. Mendukung ribuan produk dengan sistem filter canggih.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      icon: ShoppingCart,
      tags: ['E-Commerce', 'Responsive', 'Payment Gateway'],
      color: 'from-primary to-secondary',
    },
    {
      title: 'Aplikasi Delivery Makanan',
      category: 'Mobile App',
      description: 'Aplikasi Android & iOS untuk pemesanan makanan dengan fitur GPS tracking, notifikasi real-time, dan integrasi pembayaran digital.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
      icon: Smartphone,
      tags: ['Android', 'iOS', 'Real-time'],
      color: 'from-accent to-cta',
    },
    {
      title: 'Company Profile Klinik',
      category: 'Website',
      description: 'Website profesional untuk klinik kesehatan dengan sistem booking online, informasi dokter, dan gallery layanan medis.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      icon: Globe,
      tags: ['Booking System', 'SEO', 'Professional'],
      color: 'from-success to-primary',
    },
    {
      title: 'Aplikasi Kasir POS',
      category: 'Mobile App',
      description: 'Sistem Point of Sale untuk UMKM dengan manajemen inventori, laporan penjualan, dan struk digital via WhatsApp.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      icon: Smartphone,
      tags: ['POS', 'Inventory', 'Reports'],
      color: 'from-secondary to-accent',
    },
    {
      title: 'Landing Page Properti',
      category: 'Website',
      description: 'Landing page high-converting untuk developer properti dengan virtual tour 360°, kalkultor KPR, dan form lead generation.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      icon: Globe,
      tags: ['Landing Page', 'Lead Gen', 'Virtual Tour'],
      color: 'from-cta to-accent',
    },
    {
      title: 'Aplikasi Membership Gym',
      category: 'Mobile App',
      description: 'Aplikasi fitness dengan tracking workout, jadwal kelas, pembayaran membership, dan social features untuk komunitas.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      icon: Smartphone,
      tags: ['Fitness', 'Membership', 'Social'],
      color: 'from-primary to-success',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4" id="portfolio">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <span className="neon-badge inline-block mb-4">Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Contoh Project{' '}
              <span className="text-accent text-glow-orange">Kami</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Lihat berbagai website dan aplikasi yang telah kami kembangkan untuk klien di berbagai industri.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <article className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm">
                    <project.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{project.category}</span>
                  </div>

                  {/* Hover Link Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={600}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ingin lihat lebih banyak? Atau punya project serupa?
            </p>
            <a
              href="https://wa.me/6287862983339?text=Halo,%20saya%20tertarik%20untuk%20konsultasi%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center gap-2 text-cta-foreground"
            >
              Konsultasi Gratis
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PortfolioSection;
