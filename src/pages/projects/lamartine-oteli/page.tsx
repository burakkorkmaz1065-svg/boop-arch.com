import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LamartineOteliPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/4030d52ccd84dbbd4142fd275a40dd2f.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/b1796e37f0219c3e6faaf500e142ab72.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/afd0f1258cbe85a9de584495b6f9ecec.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/49b63f3ae4720699a59be0e97073b904.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/2756a011207382369c7509d896c5a886.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/a542a741e8bb3c1d930c99b6d65a186f.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/d69dc9232eb90c48f2c704dc5352556c.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/f042eee7c286fe3fecdf763fe9c5508f.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/c8cab52b74ef7aa359e45093b96831b3.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/2f6b563770ea5582d2c9ec724a82621d.jpeg'
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <section className="bg-primary-50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-primary-600">
              <Link to="/" className="hover:text-primary-900 cursor-pointer">Ana Sayfa</Link>
              <i className="ri-arrow-right-s-line mx-2"></i>
              <Link to="/projeler" className="hover:text-primary-900 cursor-pointer">Projeler</Link>
              <i className="ri-arrow-right-s-line mx-2"></i>
              <span className="text-primary-900 font-semibold">Lamartine Oteli</span>
            </div>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-primary-900 mb-6">Lamartine Oteli</h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-600 mb-8">
              <div className="flex items-center">
                <i className="ri-map-pin-line text-xl mr-2"></i>
                <span className="text-lg">İstanbul</span>
              </div>
              <div className="flex items-center">
                <i className="ri-calendar-line text-xl mr-2"></i>
                <span className="text-lg">2024</span>
              </div>
              <div className="flex items-center">
                <i className="ri-building-line text-xl mr-2"></i>
                <span className="text-lg">Otel Projesi</span>
              </div>
            </div>
            <div className="w-20 h-1 bg-primary-900"></div>
          </div>
        </section>

        {/* Project Description */}
        <section className="py-12 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-6">Proje Hakkında</h2>
                <p className="text-lg text-primary-700 leading-relaxed mb-6">
                  Lamartine Oteli, İstanbul'un merkezinde konumlanan butik bir otel projesidir. Modern mimari anlayışla tasarlanan otel, şehrin tarihi dokusuna saygı gösterirken çağdaş konfor standartlarını bir araya getirmektedir.
                </p>
                <p className="text-lg text-primary-700 leading-relaxed mb-6">
                  Proje kapsamında otelin proje uygulama, güçlendirme, proje yönetim ve mimari detaylandırma süreçleri BOOP Mimarlık tarafından yönetilmiştir. Minimalist tasarım anlayışı ve kaliteli malzeme seçimleriyle konuklara unutulmaz bir deneyim sunmayı hedefledik.
                </p>
                <p className="text-lg text-primary-700 leading-relaxed">
                  Otelin lobi, otel odaları restorant ve ortak alanları fonksiyonel ve detaylarıyla dikkat çekmektedir. fonksiyonellik ve estetik mükemmel bir dengede buluşturulmuştur.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">Proje Detayları</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-primary-200 pb-3">
                    <span className="font-semibold text-primary-700">Proje Türü:</span>
                    <span className="text-primary-900">Şehir Oteli</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-200 pb-3">
                    <span className="font-semibold text-primary-700">Konum:</span>
                    <span className="text-primary-900">İstanbul</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-200 pb-3">
                    <span className="font-semibold text-primary-700">Tamamlanma Yılı:</span>
                    <span className="text-primary-900">2024</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-200 pb-3">
                    <span className="font-semibold text-primary-700">Hizmetler:</span>
                    <span className="text-primary-900">Proje Yönetimi, Güçlendirme Çalışması, Proje Uygulama</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-primary-700">Durum:</span>
                    <span className="text-green-600 font-semibold">Tamamlandı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Images Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">Proje Görselleri</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group aspect-[4/3]"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`Lamartine Oteli - Görsel ${index + 1}`}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="ri-search-line text-3xl text-white"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Close"
            >
              <i className="ri-close-line text-3xl"></i>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <i className="ri-arrow-left-s-line text-3xl"></i>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Next"
            >
              <i className="ri-arrow-right-s-line text-3xl"></i>
            </button>

            <div className="max-w-6xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentImageIndex]}
                alt={`Lamartine Oteli - Görsel ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <div className="text-white text-center mt-4 text-lg">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-bold mb-6">Sizin Projenizi de Hayata Geçirelim</h3>
            <p className="text-xl text-primary-200 mb-8">
              Hayalinizdeki projeyi birlikte tasarlayalım
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

export default LamartineOteliPage;
