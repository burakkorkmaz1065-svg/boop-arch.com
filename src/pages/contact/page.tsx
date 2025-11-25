import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useSEO, generateWebPageSchema, generateBreadcrumbSchema } from '../../utils/seo';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useSEO({
    title: 'İletişim - İstanbul Mimarlık Firması BOOP Mimarlık İnşaat',
    description: 'BOOP Mimarlık İnşaat ile iletişime geçin. Şişli, İstanbul adresimiz: 19 Mayıs Mah. Tayyareci Cemal Sok. No:6. Telefon: 0545-646-6761, 0533-456-7008. Mimarlık ve müteahhitlik hizmetleri için bize ulaşın.',
    keywords: 'mimarlık iletişim, İstanbul mimarlık firması, Şişli mimarlık, BOOP Mimarlık adres, mimarlık teklif',
    canonical: (import.meta.env.VITE_SITE_URL || 'https://example.com') + '/iletisim',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateWebPageSchema('İletişim - BOOP Mimarlık İnşaat', 'BOOP Mimarlık İnşaat iletişim bilgileri ve iletişim formu'),
        generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'İletişim', url: '/iletisim' },
        ]),
      ],
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4envj2okpliv29boamg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-6">İletişim</h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Projeleriniz için bizimle iletişime geçin
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-3xl font-bold text-primary-900 mb-8">İletişim Bilgileri</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-map-pin-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-900 mb-2">Adres</h4>
                      <p className="text-primary-700">
                        19 Mayıs Mah. Tayyareci Cemal Sok. No:6<br />
                        Şişli / İstanbul
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-phone-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-900 mb-2">Telefon</h4>
                      <p className="text-primary-700">
                        <a href="tel:+905456466761" className="hover:text-primary-900 transition-colors">
                          0545-646-6761
                        </a>
                        <br />
                        <a href="tel:+905334567008" className="hover:text-primary-900 transition-colors">
                          0533-456-7008
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-mail-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-900 mb-2">E-posta</h4>
                      <p className="text-primary-700">
                        <a href="mailto:boop.arch@gmail.com" className="hover:text-primary-900 transition-colors">
                          boop.arch@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-time-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-900 mb-2">Çalışma Saatleri</h4>
                      <p className="text-primary-700">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi: 10:00 - 15:00<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8234567890123!2d28.9887!3d41.0602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAzJzM2LjciTiAyOMKwNTknMTkuMyJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BOOP Mimarlık Konum"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-3xl font-bold text-primary-900 mb-8">Bize Ulaşın</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 text-sm"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 text-sm"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 text-sm"
                      placeholder="0555 555 55 55"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-primary-900 mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-8 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 text-sm cursor-pointer"
                    >
                      <option value="">Konu seçiniz</option>
                      <option value="Mimarlık Hizmetleri">Mimarlık Hizmetleri</option>
                      <option value="Müteahhitlik">Müteahhitlik</option>
                      <option value="İç Mekan Tasarımı">İç Mekan Tasarımı</option>
                      <option value="Anahtar Teslim Proje">Anahtar Teslim Proje</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={5}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 text-sm resize-none"
                      placeholder="Mesajınızı buraya yazın (maksimum 500 karakter)"
                    ></textarea>
                    <p className="text-xs text-primary-600 mt-1">
                      {formData.message.length}/500 karakter
                    </p>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      <p className="font-semibold">Mesajınız başarıyla gönderildi!</p>
                      <p className="text-sm">En kısa sürede size dönüş yapacağız.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      <p className="font-semibold">Bir hata oluştu!</p>
                      <p className="text-sm">Lütfen daha sonra tekrar deneyin.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-bold text-primary-900 mb-6">Projelerimizi Keşfedin</h3>
            <p className="text-xl text-primary-700 mb-8">
              Tamamladığımız prestijli projelere göz atmak ister misiniz?
            </p>
            <a
              href="/projeler"
              className="inline-block px-8 py-4 bg-primary-900 text-white font-semibold rounded hover:bg-primary-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              Projeleri İncele
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
