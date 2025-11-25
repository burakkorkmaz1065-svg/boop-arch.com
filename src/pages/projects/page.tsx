import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useSEO, generateWebPageSchema, generateBreadcrumbSchema } from '../../utils/seo';

const ProjectsPage = () => {
  useSEO({
    title: 'Mimarlık Projeleri İstanbul - BOOP Mimarlık Tamamlanan Projeler',
    description: 'BOOP Mimarlık İnşaat tarafından İstanbul\'da tamamlanan mimarlık projeleri. Lamartine Oteli, Hilton Palazzo Donizetti, Mandarin Oriental, Moxy Marriott ve daha fazla prestijli proje. Konut, otel ve ticari yapı projelerimizi keşfedin.',
    keywords: 'mimarlık projeleri, İstanbul projeleri, otel tasarımı, konut projeleri, ticari yapı tasarımı, mimari portföy',
    canonical: (import.meta.env.VITE_SITE_URL || 'https://example.com') + '/projeler',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateWebPageSchema('Projelerimiz - BOOP Mimarlık İnşaat', 'Tamamlanan mimarlık ve inşaat projelerimiz'),
        generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Projeler', url: '/projeler' },
        ]),
      ],
    },
  });

  const projects = [
    {
      id: 1,
      title: 'Lamartine Oteli',
      category: 'Otel',
      location: 'İstanbul',
      year: '2024',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/4030d52ccd84dbbd4142fd275a40dd2f.jpeg',
      link: '/projeler/lamartine-oteli'
    },
    {
      id: 2,
      title: 'Hilton Palazzo Donizetti by Hilton',
      category: 'Otel',
      location: 'İstanbul',
      year: '2025',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/9515e93e2e0b9670c495218fe0acbd0d.jpeg',
      link: '/projeler/hilton-palazzo-donizetti'
    },
    {
      id: 3,
      title: 'Beşiktaş Apartmanı',
      category: 'Konut',
      location: 'İstanbul',
      year: '2024',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/c1a9227d11b97c16fd6ccb95bc502a01.jpeg',
      link: '/projeler/besiktas-apartmani'
    },
    {
      id: 4,
      title: 'Etiler Ergin Apartmanı',
      category: 'Kentsel Dönüşüm',
      location: 'İstanbul',
      year: '2021',
      image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20residential%20building%20exterior%20with%20contemporary%20architecture%2C%20elegant%20facade%20design%2C%20urban%20transformation%20project%2C%20high-end%20apartment%20complex%2C%20glass%20and%20concrete%20materials%2C%20sophisticated%20residential%20design%2C%20professional%20architectural%20photography%2C%20simple%20clean%20background&width=600&height=400&seq=405&orientation=landscape',
      link: '/projeler/etiler-ergin-apartmani'
    },
    {
      id: 5,
      title: 'Bodrum Evi',
      category: 'Villa',
      location: 'Bodrum',
      year: '2025',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/cca082022a21cbae80830bcec0fbcbc5.jpeg',
      link: '/projeler/ajda-pekkan-bodrum-evi'
    },
    {
      id: 6,
      title: 'Zorlu Center Riceteria Mağazası',
      category: 'Ticari',
      location: 'İstanbul',
      year: '2018',
      image: 'https://readdy.ai/api/search-image?query=Modern%20retail%20store%20interior%20design%20with%20contemporary%20display%20shelving%2C%20elegant%20product%20presentation%2C%20sophisticated%20commercial%20space%2C%20clean%20minimalist%20design%2C%20professional%20interior%20photography%2C%20simple%20neutral%20background&width=600&height=400&seq=608&orientation=landscape',
      link: '/projeler/zorlu-center-riceteria'
    },
    {
      id: 7,
      title: 'Moxy Marriott Oteli',
      category: 'Otel',
      location: 'İstanbul',
      year: '2024',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/3d387941619d7bfa3eae311fc5f5b7df.jpeg',
      link: '/projeler/moxy-marriott-oteli'
    },
    {
      id: 8,
      title: 'Avcılar belediyesi Ispartakule Kapalı Fuar ve Sergi Salonu',
      category: 'Kültürel',
      location: 'İstanbul',
      year: '2020',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/f70e54bb0a0575db87d7ca4cf1111969.jpeg',
      link: '/projeler/avcilar-belediyesi-sergi-salonu'
    },
    {
      id: 9,
      title: 'Bayrampaşa Wish More Hotel',
      category: 'Otel',
      location: 'İstanbul',
      year: '2015',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/2b53d43763552e59ea50c2915d45d1cc.jpeg',
      link: '/projeler/bayram-pasa-wish-more-hotel'
    },
    {
      id: 10,
      title: 'Mandarin Oriental Bosphorus',
      category: 'Karma',
      location: 'İstanbul',
      year: '2024',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/8187f0e41406a789b0ee8dfb069dc758.jpeg',
      link: '/projeler/mandarin-oriental'
    },
    {
      id: 11,
      title: 'Karaman Bulduk Hukuk Bürosu',
      category: 'Büro Yenileme',
      location: 'Beşiktaş / İstanbul',
      year: '2018',
      image: 'https://readdy.ai/api/search-image?query=Modern%20professional%20law%20office%20interior%20design%20with%20elegant%20contemporary%20furniture%2C%20sophisticated%20workspace%2C%20refined%20aesthetic%2C%20wooden%20accents%2C%20professional%20lighting%2C%20clean%20minimalist%20design%2C%20functional%20layout%2C%20high-end%20office%20renovation%2C%20simple%20neutral%20background&width=600&height=400&seq=703&orientation=landscape',
      link: '/projeler/karaman-buldak-hukuk-burosu'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary-900 text-white py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/95"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Projelerimiz</h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Mimarlık ve inşaat alanında gerçekleştirdiğimiz başarılı projelerimizi keşfedin
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-900 mb-2">30+</div>
                <div className="text-primary-600">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-900 mb-2">10+</div>
                <div className="text-primary-600">Devam Eden Proje</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-900 mb-2">100%</div>
                <div className="text-primary-600">Müşteri Memnuniyeti</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-900 mb-2">2019-2025</div>
                <div className="text-primary-600">Kuruluş Yılı</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Öne Çıkan Projelerimiz</h2>
              <p className="text-lg text-primary-600 max-w-2xl mx-auto">
                Her biri özenle tasarlanmış ve başarıyla tamamlanmış projelerimiz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={project.link}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary-900">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-primary-600 mb-2">
                      <i className="ri-map-pin-line mr-2"></i>
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-primary-600">
                      <i className="ri-calendar-line mr-2"></i>
                      <span>{project.year}</span>
                    </div>
                    <div className="mt-4 flex items-center text-primary-900 font-semibold group-hover:text-primary-700">
                      <span>Detayları Görüntüle</span>
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-bold mb-6">Projenizi Birlikte Hayata Geçirelim</h3>
            <p className="text-xl text-primary-200 mb-8">
              Mimarlık ve inşaat projeleriniz için profesyonel çözümler sunuyoruz
            </p>
            <Link
              to="/iletisim"
              className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold rounded hover:bg-primary-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              İletişime Geçin
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
