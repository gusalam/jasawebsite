import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Jasa Pembuatan Website Murah',
    'Jasa Pembuatan Aplikasi Android',
    'Website UMKM',
    'Website E-Commerce',
    'Website Landing Page',
    'Website Company Profile',
  ];

  const quickLinks = [
    { label: 'Kenapa Butuh Website', href: '#kenapa-butuh-website' },
    { label: 'Layanan Website', href: '#jasa-website' },
    { label: 'Layanan Aplikasi', href: '#jasa-aplikasi' },
    { label: 'Harga & Paket', href: '#harga' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border py-12 md:py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-display text-foreground mb-4">
              Tretan Developer
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Jasa pembuatan website murah dan aplikasi mobile profesional untuk UMKM dan bisnis di Indonesia. 
              Harga terjangkau, kualitas premium.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">Jakarta Utara, Cilincing</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">087862983339</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-display text-foreground mb-4">
              Layanan Kami
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-display text-foreground mb-4">
              Menu
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-bold font-display text-foreground mb-4">
              Hubungi Kami
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Konsultasi gratis untuk kebutuhan website dan aplikasi bisnis Anda.
            </p>
            <a
              href="https://wa.me/6287862983339"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-success text-success-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Tretan Developer. Jasa Pembuatan Website & Aplikasi Murah Indonesia.
          </p>
          <p className="text-muted-foreground text-xs">
            Developer Website Terpercaya di Jakarta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
