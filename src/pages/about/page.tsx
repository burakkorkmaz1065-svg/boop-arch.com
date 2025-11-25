import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useSEO, generateWebPageSchema, generateBreadcrumbSchema } from '../../utils/seo';

const AboutPage = () => {
  useSEO({
    title: 'Hakkımızda - İstanbul Mimarlık Firması BOOP Mimarlık İnşaat',
    description: 'BOOP Mimarlık İnşaat, 2019 yılında kurulmuş İstanbul merkezli profesyonel mimarlık ve müteahhitlik firmasıdır. Deneyimli ekibimiz ve yenilikçi yaklaşımımızla mimarlık, müteahhitlik, endüstriyel tasarım ve anahtar teslim proje hizmetleri sunuyoruz.',
    keywords: 'BOOP Mimarlık, mimarlık firması İstanbul, Şişli mimarlık, Perihan Rakanoğlu Gülerler, Berk Gülerler',
    canonical: (import.meta.env.VITE_SITE_URL || 'https://example.com') + '/hakkimizda',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateWebPageSchema('Hakkımızda - BOOP Mimarlık İnşaat', 'BOOP Mimarlık İnşaat hakkında detaylı bilgi, kurucularımız ve değerlerimiz'),
        generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Hakkımızda', url: '/hakkimizda' },
        ]),
      ],
    },
  });

  const founders = [
    {
      name: 'Perihan Rakanoğlu Gülerler',
      title: 'Kurucu Mimar',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/8c63aba2ba6c33a93a1bebd4bd7d4fc4.jpeg',
      bio: 'Cyprus International University Mimarlık Bölümü ve İstanbul Teknik Üniversitesi Mimarlık Yüksek Lisans Programı mezunu olup, estetik ve fonksiyonelliği bir araya getiren tasarım yaklaşımımızın mimari temelini oluşturmaktadır.'
    },
    {
      name: 'Berk Gülerler',
      title: 'Kurucu',
      image: 'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/f8ca8f345ada82e6a9202b466a66c8f4.jpeg',
      bio: 'Zonguldak Karaelmas Üniversitesi İşletme Bölümü mezunu olup, klasik araç restorasyonundaki uzmanlığı ve detay odaklı yaklaşımıyla hem operasyonel süreçlere hem de yeni eklenen iş kollarımıza stratejik katkılar sunmaktadır.'
    }
  ];

  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Yenilikçilik',
      description: 'Modern mimarlık anlayışı ile yenilikçi ve özgün tasarımlar üretiyoruz.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Kalite',
      description: 'Her projede en yüksek kalite standartlarını uyguluyoruz.'
    },
    {
      icon: 'ri-time-line',
      title: 'Zamanında Teslimat',
      description: 'Projelerinizi planlanan sürede teslim etmeyi taahhüt ediyoruz.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Müşteri Memnuniyeti',
      description: 'Müşterilerimizin beklentilerini aşmayı hedefliyoruz.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-6">Hakkımızda</h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              BOOP Mimarlık İnşaat olarak, mimarlık ve inşaat sektöründe fark yaratan projeler üretiyoruz
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-primary-900 mb-6">Hikayemiz</h3>
                <div className="w-20 h-1 bg-primary-900 mb-6"></div>
                <div className="bg-primary-50 p-8 rounded-lg">
                  <p className="text-lg text-primary-700 leading-relaxed mb-6">
                    <strong>BOOP MİMARLIK İNŞAAT</strong>, 2019 yılında mimari tasarım ve uygulama alanında faaliyet göstermek üzere kurulmuştur. Sektörde edindiğimiz deneyim, genişleyen hizmet ağımız ve büyüyen organizasyon yapımız doğrultusunda şirketimiz 2025 yılında yeniden yapılanarak <strong>BOOP MİMARLIK İNŞAAT OTOMOTİV TURİZM LİMİTED ŞİRKETİ</strong> unvanı ile limited şirket statüsüne geçmiştir.
                  </p>
                  <p className="text-lg text-primary-700 leading-relaxed mb-6">
                    Bu dönüşümle birlikte faaliyet alanlarımızı daha da genişlettik. <strong>Mimarlık</strong>, <strong>müteahhitlik</strong>, <strong>endüstriyel tasarım</strong> ve <strong>anahtar teslim proje</strong> hizmetlerimizin yanı sıra <strong>klasik araç restorasyonu</strong> alanını da bünyemize dahil ederek hizmet çeşitliliğimizi artırdık.
                  </p>
                  <p className="text-lg text-primary-700 leading-relaxed mb-6">
                    Kurucularımız <strong>Perihan RAKANOĞLU GÜLERLER</strong> ve <strong>Berk GÜLERLER</strong>, akademik birikimleri ve profesyonel deneyimleriyle şirketimizin vizyonuna yön vermektedir.
                  </p>
                  <p className="text-lg text-primary-700 leading-relaxed mb-6">
                    <strong>BOOP MİMARLIK İNŞAAT</strong> olarak, tüm projelerimizde kalite, güvenilirlik ve sürdürülebilirlik ilkelerini benimsiyor; tasarımdan uygulamaya kadar tüm aşamaları titizlikle yönetiyoruz. Modern yapı tekniklerini, çevresel ve kentsel dokuya uyumlu tasarım anlayışımızla birleştirerek yenilikçi ve kullanıcı odaklı projeler üretmeyi hedefliyoruz.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20architecture%20office%20team%20working%20together%2C%20professional%20architects%20collaborating%20on%20design%20project%2C%20contemporary%20workspace%20with%20blueprints%20and%20models%2C%20teamwork%20in%20architecture%20firm%2C%20simple%20clean%20background%2C%20professional%20business%20photography&width=800&height=600&seq=7&orientation=landscape"
                  alt="BOOP Mimarlık Ekibi"
                  className="rounded-lg shadow-xl w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-primary-900 mb-4">Kurucularımız</h3>
              <div className="w-20 h-1 bg-primary-900 mx-auto mb-4"></div>
              <p className="text-lg text-primary-600 max-w-2xl mx-auto">
                Deneyimli ve tutkulu mimarlık profesyonelleri
              </p>
            </div>
            <div className="space-y-16">
              {founders.map((founder, index) => (
                <div 
                  key={index} 
                  className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[600px]">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                      <h4 className="text-3xl font-bold text-primary-900 mb-3">{founder.name}</h4>
                      <p className="text-primary-600 font-semibold text-lg mb-6">{founder.title}</p>
                      <p className="text-primary-700 leading-relaxed text-lg">{founder.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-primary-900 mb-4">Değerlerimiz</h3>
              <div className="w-20 h-1 bg-primary-900 mx-auto mb-4"></div>
              <p className="text-lg text-primary-600 max-w-2xl mx-auto">
                Çalışmalarımızı şekillendiren temel prensiplerimiz
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${value.icon} text-4xl text-white`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-primary-900 mb-3">{value.title}</h4>
                  <p className="text-primary-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-6">Hizmet Alanlarımız</h3>
              <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-primary-800 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Mimarlık ve Tasarım Hizmetleri</h4>
                <p className="text-primary-200">Konut, ticari ve endüstriyel yapılar için kapsamlı mimari tasarım hizmetleri</p>
              </div>
              <div className="bg-primary-800 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Müteahhitlik Hizmetleri</h4>
                <p className="text-primary-200">Profesyonel inşaat yönetimi ve kaliteli işçilik garantisi</p>
              </div>
              <div className="bg-primary-800 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Endüstriyel ve İç Mekan Tasarımı</h4>
                <p className="text-primary-200">Yaratıcı ve işlevsel iç mekan çözümleri</p>
              </div>
              <div className="bg-primary-800 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Anahtar Teslim Proje Yönetimi</h4>
                <p className="text-primary-200">Projenizin başından sonuna kadar tam kontrol ve yönetim</p>
              </div>
              <div className="bg-primary-800 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Mimari Proje Tasarımı</h4>
                <p className="text-primary-200">Detaylı mimari projeler ve teknik çizimler</p>
              </div>
              <div className="bg-primary-800 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Klasik Araç Restorasyonu</h4>
                <p className="text-primary-200">Klasik araçların profesyonel restorasyonu ve bakımı</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
