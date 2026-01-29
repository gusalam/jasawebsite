import { Check, Smartphone, TabletSmartphone, Layers, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const AppServiceSection = () => {
  const features = [
    {
      icon: TabletSmartphone,
      title: 'Android & iOS Sekaligus',
      description: 'Dengan teknologi cross-platform, aplikasi Anda bisa berjalan di Android dan iOS dengan satu kali development. Lebih hemat biaya dan waktu.',
    },
    {
      icon: Layers,
      title: 'UI/UX Modern',
      description: 'Desain aplikasi yang user-friendly dan mengikuti tren terbaru. Navigasi intuitif yang mudah dipahami oleh semua kalangan pengguna.',
    },
    {
      icon: Zap,
      title: 'Performa Optimal',
      description: 'Aplikasi dioptimasi untuk berjalan lancar tanpa lag. Loading cepat dan penggunaan memori yang efisien.',
    },
    {
      icon: Smartphone,
      title: 'Publish ke Play Store & App Store',
      description: 'Kami bantu proses publikasi aplikasi ke Google Play Store dan Apple App Store hingga approved dan siap diunduh.',
    },
  ];

  const appTypes = [
    'Aplikasi Kasir & POS',
    'Aplikasi Toko Online',
    'Aplikasi Booking & Reservasi',
    'Aplikasi Delivery Order',
    'Aplikasi Katalog Produk',
    'Aplikasi Company Profile',
    'Aplikasi Membership',
    'Aplikasi Custom sesuai kebutuhan',
  ];

  return (
    <section className="py-16 md:py-24 px-4" id="jasa-aplikasi">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4">
              LAYANAN APLIKASI MOBILE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Jasa Pembuatan Aplikasi{' '}
              <span className="text-secondary text-glow-purple">Android & iOS</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Butuh aplikasi mobile untuk bisnis Anda? Kami menyediakan jasa pembuatan aplikasi 
              Android dan iOS dengan harga terjangkau. Dari aplikasi sederhana hingga sistem 
              kompleks, kami siap membantu mewujudkan ide Anda.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <ScrollReveal key={index} animation="scale" delay={index * 100}>
              <article className="glass-card hover:border-secondary/40 transition-all duration-300 flex gap-4 h-full">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* App Types */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="glass-card">
            <h3 className="text-xl font-bold font-display text-foreground mb-6 text-center">
              Jenis Aplikasi yang Bisa Kami Buat
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {appTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-foreground text-sm">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AppServiceSection;
