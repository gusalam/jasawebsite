import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Berapa harga jasa pembuatan website murah?',
      answer: 'Harga jasa pembuatan website murah di Tretan Developer mulai dari Rp150.000 untuk landing page sederhana. Untuk website UMKM lengkap dengan fitur katalog dan admin panel, harga mulai dari Rp500.000. Untuk e-commerce dengan payment gateway mulai Rp1.500.000. Semua paket sudah termasuk gratis hosting seumur hidup tanpa biaya bulanan.',
    },
    {
      question: 'Apakah ada biaya bulanan setelah website jadi?',
      answer: 'Tidak ada biaya bulanan sama sekali. Kami menyediakan gratis hosting seumur hidup untuk semua klien. Anda hanya perlu bayar sekali saat pembuatan website, tanpa biaya langganan atau maintenance bulanan. Yang perlu diperpanjang hanyalah domain jika sudah habis masa aktifnya (biasanya 1 tahun sekali dengan harga sekitar Rp100-150rb/tahun).',
    },
    {
      question: 'Berapa lama waktu pengerjaan website?',
      answer: 'Waktu pengerjaan tergantung kompleksitas project. Landing page sederhana bisa selesai dalam 1-3 hari. Website company profile atau UMKM membutuhkan 3-7 hari. Website e-commerce dengan fitur lengkap sekitar 1-2 minggu. Aplikasi mobile Android/iOS memerlukan waktu 2-4 minggu tergantung fitur yang dibutuhkan. Kami selalu mengutamakan kualitas tanpa mengorbankan kecepatan.',
    },
    {
      question: 'Apakah bisa membuat aplikasi Android dan iOS sekaligus?',
      answer: 'Ya, kami menyediakan jasa pembuatan aplikasi untuk Android dan iOS sekaligus menggunakan teknologi cross-platform seperti React Native atau Flutter. Dengan satu kali development, aplikasi Anda bisa berjalan di kedua platform dengan harga lebih hemat dibanding membuat terpisah. Kami juga membantu proses publikasi ke Google Play Store dan Apple App Store.',
    },
    {
      question: 'Bagaimana cara memesan jasa pembuatan website?',
      answer: 'Anda bisa langsung menghubungi kami via WhatsApp di 087862983339. Tim kami akan melakukan konsultasi gratis untuk memahami kebutuhan bisnis Anda, memberikan rekomendasi solusi terbaik, dan penawaran harga yang transparan tanpa biaya tersembunyi. Setelah deal, kami akan mulai proses pengerjaan dengan update progress secara berkala.',
    },
    {
      question: 'Apakah website yang dibuat sudah SEO friendly?',
      answer: 'Ya, semua website yang kami buat sudah dioptimasi untuk SEO (Search Engine Optimization). Kami menerapkan struktur heading yang benar, meta tags yang optimal, website loading cepat, mobile responsive, dan teknik SEO on-page lainnya. Dengan optimasi ini, website Anda berpotensi muncul di halaman pertama Google untuk kata kunci yang relevan.',
    },
    {
      question: 'Apa saja yang perlu saya siapkan untuk pembuatan website?',
      answer: 'Untuk pembuatan website, Anda cukup menyiapkan: 1) Logo bisnis (jika sudah ada), 2) Konten seperti deskripsi bisnis, produk/layanan, dan kontak, 3) Foto produk atau gambar yang ingin ditampilkan, 4) Referensi desain yang disukai (opsional). Jika belum lengkap, tim kami akan membantu dengan konsultasi konten yang tepat.',
    },
    {
      question: 'Apakah saya bisa mengelola website sendiri setelah jadi?',
      answer: 'Ya, kami menyediakan admin panel yang mudah digunakan untuk website dengan fitur katalog atau e-commerce. Anda bisa menambah, edit, atau hapus produk sendiri tanpa keahlian coding. Kami juga memberikan panduan/tutorial penggunaan. Untuk perubahan yang lebih kompleks, tim support kami siap membantu.',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-card/30" id="faq">
      <div className="container max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            PERTANYAAN UMUM
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Frequently Asked{' '}
            <span className="text-primary text-glow-blue">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Jawaban untuk pertanyaan yang sering ditanyakan klien kami
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card border-0 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary hover:no-underline px-6 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-6 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Masih ada pertanyaan lain? Jangan ragu untuk bertanya langsung!
          </p>
          <a
            href="https://wa.me/6287862983339"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 text-primary rounded-lg font-bold hover:bg-primary/30 transition-colors"
          >
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
