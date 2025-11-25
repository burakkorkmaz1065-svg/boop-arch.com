import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useSEO, generateWebPageSchema, generateBreadcrumbSchema } from '../../utils/seo';

const ServicesPage = () => {
  useSEO({
    title: 'Mimarlık Hizmetleri İstanbul - BOOP Mimarlık İnşaat Hizmetleri',
    description: 'İstanbul\'da mimarlık ve tasarım, müteahhitlik, endüstriyel tasarım, iç mekan tasarımı, anahtar teslim proje yönetimi ve mimari proje tasarımı hizmetleri. Profesyonel ekibimizle kaliteli ve zamanında teslim edilen projeler sunuyoruz.',
    keywords: 'mimarlık hizmetleri, müteahhitlik İstanbul, iç mekan tasarımı, anahtar teslim proje, mimari proje tasarımı, endüstriyel tasarım',
    canonical: (import.meta.env.VITE_SITE_URL || 'https://example.com') + '/hizmetler',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateWebPageSchema('Hizmetlerimiz - BOOP Mimarlık İnşaat', 'Mimarlık, müteahhitlik ve tasarım hizmetlerimiz hakkında detaylı bilgi'),
        generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Hizmetlerimiz', url: '/hizmetler' },
        ]),
      ],
    },
  });

  const services = [
    {
      icon: 'ri-building-line',
      title: 'Mimarlık ve Tasarım Hizmetleri',
      description: 'Konut, ticari ve endüstriyel yapılar için kapsamlı mimari tasarım hizmetleri sunuyoruz. Modern mimarlık anlayışı ile estetik ve işlevselliği bir araya getirerek, her projeye özgün çözümler üretiyoruz.',
      features: [
        'Konsept tasarım ve ön proje çalışmaları',
        'Detaylı mimari proje hazırlama',
        'Ruhsat ve izin süreçlerinin yönetimi',
        ' 3D görselleştirme ve sunum',
        'Restorasyon ve renovasyon projeleri'
      ],
      image: 'https://readdy.ai/api/search-image?query=Architect%20working%20on%20architectural%20design%20plans%20and%20blueprints%2C%20modern%20architecture%20office%20workspace%2C%20professional%20design%20process%2C%20contemporary%20architectural%20drawings%2C%20clean%20minimalist%20background%2C%20high-quality%20professional%20photography&width=600&height=400&seq=8&orientation=landscape'
    },
    {
      icon: 'ri-hammer-line',
      title: 'Müteahhitlik Hizmetleri',
      description: 'Profesyonel ekibimiz ve kaliteli malzeme seçimimiz ile inşaat projelerinizi en yüksek standartlarda hayata geçiriyoruz. Zamanında teslimat ve maliyet kontrolü garantisi sunuyoruz.',
      features: [
        'Konut ve ticari yapı inşaatı',
        'Kaliteli malzeme temini ve uygulaması',
        'Profesyonel şantiye yönetimi',
        'İş güvenliği ve kalite kontrol',
        'Zamanında teslimat garantisi'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20construction%20site%20with%20professional%20workers%2C%20contemporary%20building%20under%20construction%2C%20quality%20construction%20management%2C%20clean%20organized%20worksite%2C%20simple%20background%2C%20professional%20construction%20photography&width=600&height=400&seq=9&orientation=landscape'
    },
    {
      icon: 'ri-pencil-ruler-2-line',
      title: 'Endüstriyel ve İç Mekan Tasarımı',
      description: 'İç mekan tasarımında yaratıcı ve işlevsel çözümler sunarak, yaşam alanlarınızı daha konforlu ve estetik hale getiriyoruz. Endüstriyel tasarım projelerinde de uzman ekibimizle hizmetinizdeyiz.',
      features: [
        'Konut iç mekan tasarımı',
        'Ofis, otel ve ticari alan tasarımı',
        'İç mimari ve mobilya danışmanlığı',
        'Aydınlatma tasarımı',
        'Renk ve malzeme seçimi'
      ],
      image: 'https://readdy.ai/api/search-image?query=Elegant%20modern%20interior%20design%20with%20minimalist%20furniture%2C%20contemporary%20living%20space%2C%20sophisticated%20home%20decor%2C%20clean%20lines%20and%20neutral%20colors%2C%20professional%20interior%20design%20photography%2C%20simple%20background&width=600&height=400&seq=10&orientation=landscape'
    },
    {
      icon: 'ri-key-line',
      title: 'Anahtar Teslim Proje Yönetimi',
      description: 'Projenizin tasarımından teslime kadar tüm süreçleri yönetiyor, size sadece anahtarı teslim ediyoruz. Tek bir muhatap ile tüm işlemlerinizi kolayca halledebilirsiniz.',
      features: [
        'Kapsamlı proje planlama',
        'Bütçe yönetimi ve maliyet kontrolü',
        'Tüm yasal süreçlerin takibi',
        'Koordinasyon ve denetim',
        'Anahtar teslim teslimat'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20project%20management%20meeting%20with%20architects%20and%20clients%2C%20construction%20planning%20discussion%2C%20modern%20office%20setting%2C%20business%20collaboration%2C%20simple%20clean%20background%2C%20professional%20photography&width=600&height=400&seq=11&orientation=landscape'
    },
    {
      icon: 'ri-draft-line',
      title: 'Mimari Proje Tasarımı',
      description: 'Detaylı mimari projeler ve teknik çizimler hazırlayarak, inşaat sürecinizin sorunsuz ilerlemesini sağlıyoruz. Tüm ruhsat ve onay süreçlerinde yanınızdayız.',
      features: [
        'Vaziyet planı hazırlama',
        'Kat planları ve kesitler',
        'Cephe çizimleri',
        'Detay projeleri',
        'Statik ve mekanik proje koordinasyonu'
      ],
      image: 'https://readdy.ai/api/search-image?query=Detailed%20architectural%20technical%20drawings%20and%20blueprints%20on%20desk%2C%20professional%20CAD%20design%20work%2C%20architectural%20plans%20and%20elevations%2C%20modern%20architecture%20office%2C%20simple%20background%2C%20high-quality%20photography&width=600&height=400&seq=12&orientation=landscape'
    },
    {
      icon: 'ri-team-line',
      title: 'Proje Yönetimi ve Danışmanlık',
      description: 'Mimarlık ve inşaat projelerinizde uzman danışmanlık hizmeti sunuyoruz. Deneyimli ekibimiz ile projenizin her aşamasında profesyonel destek alabilirsiniz.',
      features: [
        'Fizibilite çalışmaları',
        'Teknik danışmanlık',
        'Proje koordinasyonu',
        'Kalite kontrol ve denetim',
        'Risk yönetimi'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20architecture%20consultants%20reviewing%20building%20plans%2C%20business%20meeting%20with%20construction%20documents%2C%20expert%20advisory%20services%2C%20modern%20office%20environment%2C%20simple%20background%2C%20professional%20photography&width=600&height=400&seq=13&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-6">Hizmetlerimiz</h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Mimarlık ve inşaat sektöründe kapsamlı ve profesyonel hizmetler sunuyoruz
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="w-16 h-16 bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                      <i className={`${service.icon} text-3xl text-white`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-primary-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-primary-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="ri-check-line text-primary-900 text-xl mr-3 mt-1"></i>
                          <span className="text-primary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full h-auto object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-primary-900 mb-4">Neden BOOP Mimarlık?</h3>
              <div className="w-20 h-1 bg-primary-900 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-award-line text-3xl text-white"></i>
                </div>
                <h4 className="text-xl font-bold text-primary-900 mb-3">Deneyimli Ekip</h4>
                <p className="text-primary-600">
                  Alanında uzman mimarlar ve mühendislerden oluşan profesyonel ekibimiz
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-star-line text-3xl text-white"></i>
                </div>
                <h4 className="text-xl font-bold text-primary-900 mb-3">Kalite Garantisi</h4>
                <p className="text-primary-600">
                  Her projede en yüksek kalite standartlarını uyguluyoruz
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-customer-service-2-line text-3xl text-white"></i>
                </div>
                <h4 className="text-xl font-bold text-primary-900 mb-3">Müşteri Odaklı</h4>
                <p className="text-primary-600">
                  Müşteri memnuniyeti bizim için her zaman önceliklidir
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-bold mb-6">Projeniz İçin Teklif Alın</h3>
            <p className="text-xl text-primary-200 mb-8">
              Mimarlık ve inşaat hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin
            </p>
            <a
              href="/iletisim"
              className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold rounded hover:bg-primary-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              İletişime Geçin
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
