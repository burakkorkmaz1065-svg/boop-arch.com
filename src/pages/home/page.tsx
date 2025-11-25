import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeInSection } from '../../components/base/FadeInSection';
import { useSEO, generateOrganizationSchema, generateLocalBusinessSchema } from '../../utils/seo';

const HomePage = () => {
  useSEO({
    title: 'Mimarlık Müteahhitlik BOOP Mimarlık İnşaat',
    description: 'Profesyonel mimarlık, müteahhitlik ve endüstriyel tasarım hizmetleri. BOOP Mimarlık ile hayalinizdeki projeyi gerçeğe dönüştürün. Konut, ticari ve endüstriyel yapı tasarımı, anahtar teslim proje yönetimi sunuyoruz.',
    keywords: 'mimarlık, müteahhitlik, endüstriyel tasarım, iç mekan tasarımı, mimari proje, Şişli mimarlık',
    canonical: (import.meta.env.VITE_SITE_URL || 'https://example.com') + '/',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateOrganizationSchema(),
        generateLocalBusinessSchema(),
      ],
    },
  });

  const services = [
    {
      icon: 'ri-building-line',
      title: 'Mimarlık ve Tasarım',
      description: 'Modern ve işlevsel mimari çözümler ile hayallerinizdeki mekanları tasarlıyoruz.'
    },
    {
      icon: 'ri-hammer-line',
      title: 'Müteahhitlik',
      description: 'Profesyonel ekibimizle kaliteli ve zamanında teslim edilen inşaat hizmetleri sunuyoruz.'
    },
    {
      icon: 'ri-pencil-ruler-2-line',
      title: 'Endüstriyel Tasarım',
      description: 'İç mekan ve endüstriyel tasarım projelerinde yaratıcı ve özgün çözümler üretiyoruz.'
    },
    {
      icon: 'ri-key-line',
      title: 'Anahtar Teslim Projeler',
      description: 'Projenizin her aşamasını yönetiyor, size sadece anahtarı teslim ediyoruz.'
    }
  ];

  const featuredProjects = [
    {
      name: 'Lamartine Oteli',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/49b63f3ae4720699a59be0e97073b904.jpeg',
      link: '/projeler/lamartine-oteli'
    },
    {
      name: 'Hilton Palazzo Donizetti',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/9515e93e2e0b9670c495218fe0acbd0d.jpeg',
      link: '/projeler/hilton-palazzo-donizetti'
    },
    {
      name: 'Moxy Marriott Oteli',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/3d387941619d7bfa3eae311fc5f5b7df.jpeg',
      link: '/projeler/moxy-marriott-oteli'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(33, 37, 41, 0.7), rgba(33, 37, 41, 0.7)), url('https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/331d9aef63099cb8694d4c218f4b0b2f.jpeg')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <FadeInSection>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Mimarlıkta Mükemmellik
              </h2>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Profesyonel mimarlık, müteahhitlik ve tasarım hizmetleri ile projelerinizi hayata geçiriyoruz
              </p>
            </FadeInSection>
            <FadeInSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projeler"
                  className="px-8 py-4 bg-white text-primary-900 font-semibold rounded hover:bg-primary-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Projelerimizi İnceleyin
                </Link>
                <Link
                  to="/iletisim"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-primary-900 transition-colors whitespace-nowrap cursor-pointer"
                >
                  İletişime Geçin
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-primary-900 mb-4">BOOP Mimarlık Hakkında</h3>
                <div className="w-20 h-1 bg-primary-900 mx-auto"></div>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInSection delay={100}>
                <div>
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20architecture%20office%20interior%20with%20modern%20workspace%2C%20architects%20working%20on%20design%20plans%2C%20contemporary%20office%20design%2C%20clean%20minimalist%20aesthetic%2C%20natural%20lighting%2C%20professional%20business%20environment%2C%20simple%20neutral%20background&width=800&height=600&seq=4&orientation=landscape"
                    alt="BOOP Mimarlık Ofis"
                    className="rounded-lg shadow-lg w-full h-auto object-cover object-top"
                  />
                </div>
              </FadeInSection>
              <FadeInSection delay={200}>
                <div>
                  <p className="text-lg text-primary-700 leading-relaxed mb-6">
                    <strong>BOOP Mimarlık İnşaat</strong>, 2025 yılında Perihan Rakanoğlu Gülerler ve Berk Gülerler tarafından kurulmuştur. Mimarlık sektöründeki derin deneyimimiz ve yenilikçi yaklaşımımızla, müşterilerimize en kaliteli hizmeti sunmayı hedefliyoruz.
                  </p>
                  <p className="text-lg text-primary-700 leading-relaxed mb-6">
                    Mimarlık, müteahhitlik, endüstriyel tasarım, anahtar teslim projeler ve mimari proje tasarımı alanlarında entegre hizmetler sunarak, projelerinizin her aşamasında yanınızdayız.
                  </p>
                  <Link
                    to="/hakkimizda"
                    className="inline-flex items-center text-primary-900 font-semibold hover:text-primary-700 transition-colors cursor-pointer"
                  >
                    Daha Fazla Bilgi
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-primary-900 mb-4">Hizmetlerimiz</h3>
                <div className="w-20 h-1 bg-primary-900 mx-auto mb-4"></div>
                <p className="text-lg text-primary-600 max-w-2xl mx-auto">
                  Mimarlık ve inşaat sektöründe geniş kapsamlı profesyonel hizmetler sunuyoruz
                </p>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="bg-primary-50 p-8 rounded-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="w-16 h-16 bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                      <i className={`${service.icon} text-3xl text-white`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-primary-900 mb-3">{service.title}</h4>
                    <p className="text-primary-600 leading-relaxed">{service.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
            <FadeInSection delay={400}>
              <div className="text-center mt-12">
                <Link
                  to="/hizmetler"
                  className="inline-block px-8 py-4 bg-primary-900 text-white font-semibold rounded hover:bg-primary-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Tüm Hizmetleri Görüntüle
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-primary-900 mb-4">Öne Çıkan Projeler</h3>
                <div className="w-20 h-1 bg-primary-900 mx-auto mb-4"></div>
                <p className="text-lg text-primary-600 max-w-2xl mx-auto">
                  Prestijli projelerimizden bazılarını keşfedin
                </p>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <FadeInSection key={index} delay={index * 150}>
                  <Link to={project.link} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer block">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-primary-900">{project.name}</h4>
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
            <FadeInSection delay={450}>
              <div className="text-center mt-12">
                <Link
                  to="/projeler"
                  className="inline-block px-8 py-4 bg-primary-900 text-white font-semibold rounded hover:bg-primary-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Tüm Projeleri Görüntüle
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInSection>
              <h3 className="text-4xl font-bold mb-6">Projenizi Hayata Geçirelim</h3>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="text-xl text-primary-200 mb-8">
                Mimarlık ve inşaat projeleriniz için profesyonel destek almak ister misiniz? Hemen iletişime geçin.
              </p>
            </FadeInSection>
            <FadeInSection delay={400}>
              <Link
                to="/iletisim"
                className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold rounded hover:bg-primary-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                Bizimle İletişime Geçin
              </Link>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
