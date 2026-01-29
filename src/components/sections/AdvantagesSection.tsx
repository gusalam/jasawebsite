import { Shield, Clock, HeadphonesIcon, Wallet, Award, RefreshCw } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Wallet,
      title: 'Harga Terjangkau',
      description: 'Jasa pembuatan website murah mulai dari Rp150.000. Harga transparan tanpa biaya tersembunyi.',
      highlight: 'Mulai Rp150rb',
    },
    {
      icon: Shield,
      title: 'Gratis Hosting Seumur Hidup',
      description: 'Tidak perlu bayar biaya hosting bulanan atau tahunan. Gratis selamanya selama website aktif.',
      highlight: 'Hemat Jutaan',
    },
    {
      icon: Clock,
      title: 'Tanpa Biaya Bulanan',
      description: 'Bayar sekali, pakai selamanya. Tidak ada biaya langganan atau maintenance bulanan yang memberatkan.',
      highlight: 'Sekali Bayar',
    },
    {
      icon: Award,
      title: 'Kualitas Profesional',
      description: 'Meskipun harga murah, kualitas tetap profesional. Desain modern dan fitur lengkap sesuai kebutuhan.',
      highlight: 'Premium Quality',
    },
    {
      icon: HeadphonesIcon,
      title: 'Support Responsif',
      description: 'Tim support siap membantu via WhatsApp. Respons cepat untuk setiap pertanyaan dan kendala.',
      highlight: 'Fast Response',
    },
    {
      icon: RefreshCw,
      title: 'Revisi Hingga Puas',
      description: 'Kami berikan revisi sampai Anda benar-benar puas dengan hasilnya. Kepuasan klien adalah prioritas.',
      highlight: 'Garansi Revisi',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-card/30" id="keunggulan">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-success/20 text-success text-sm font-semibold mb-4">
              KENAPA PILIH KAMI
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Keunggulan Layanan{' '}
              <span className="text-success">Kami</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Sebagai developer website terpercaya di Indonesia, kami berkomitmen memberikan 
              layanan terbaik dengan harga yang ramah UMKM.
            </p>
          </div>
        </ScrollReveal>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <ScrollReveal key={index} animation="scale" delay={index * 80}>
              <article className="glass-card hover:border-success/40 transition-all duration-300 text-center group h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <advantage.icon className="w-8 h-8 text-success" />
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold mb-3">
                  {advantage.highlight}
                </span>
                
                <h3 className="text-xl font-bold font-display text-foreground mb-3">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
