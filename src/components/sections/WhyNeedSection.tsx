import { Globe, Smartphone, TrendingUp, Clock, Users, Shield } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const WhyNeedSection = () => {
  const reasons = [
    {
      icon: Globe,
      title: 'Jangkauan Lebih Luas',
      description: 'Website memungkinkan bisnis Anda ditemukan oleh jutaan orang di seluruh Indonesia, bahkan dunia. Pelanggan bisa menemukan Anda kapan saja, di mana saja.',
    },
    {
      icon: TrendingUp,
      title: 'Meningkatkan Kredibilitas',
      description: 'Bisnis dengan website profesional terlihat lebih terpercaya. Calon pelanggan akan lebih yakin untuk membeli produk atau menggunakan jasa Anda.',
    },
    {
      icon: Clock,
      title: 'Buka 24 Jam Non-Stop',
      description: 'Berbeda dengan toko fisik, website dan aplikasi mobile bekerja 24/7. Pelanggan bisa melihat produk dan melakukan transaksi kapan saja.',
    },
    {
      icon: Users,
      title: 'Bersaing dengan Kompetitor',
      description: 'Jika kompetitor sudah punya website, Anda perlu segera menyusul. Jika belum, ini kesempatan untuk unggul lebih dulu di pasar digital.',
    },
    {
      icon: Smartphone,
      title: 'Akses via Smartphone',
      description: 'Lebih dari 90% pengguna internet Indonesia mengakses via smartphone. Website responsive dan aplikasi mobile menjangkau mereka dengan optimal.',
    },
    {
      icon: Shield,
      title: 'Kontrol Penuh Bisnis Anda',
      description: 'Tidak seperti marketplace yang punya banyak aturan, website sendiri memberi Anda kebebasan penuh untuk branding dan strategi marketing.',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4" id="kenapa-butuh-website">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Kenapa Bisnis Anda Butuh{' '}
              <span className="text-primary text-glow-blue">Website & Aplikasi?</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Di era digital ini, memiliki website dan aplikasi bukan lagi pilihan, tapi kebutuhan. 
              Berikut alasan mengapa bisnis Anda perlu hadir secara online.
            </p>
          </div>
        </ScrollReveal>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <article className="glass-card hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] group h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNeedSection;
