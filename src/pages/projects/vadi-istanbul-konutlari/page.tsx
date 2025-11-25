
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ZorluCenterRiceteriaPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/cf0f7c0253228c8d9b6358c1edcbc3fe.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/9d1f7d2fa3536a49c57975f94f0ac685.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/f6c4b18decf2de4fca35339421b5e786.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/3a544d84579d14d6e773812d454d8990.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/0f7f1de5ea72787f64073505a465fda6.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/0b6dec1815e83831d3f5714a2cb8211d.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/0b0cabfbce82f906aa8f26c020e865ba.jpeg'
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
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
              <span className="text-primary-900 font-semibold">Zorlu Center Riceteria Mağazası</span>
            </div>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-primary-900 mb-6">Zorlu Center Riceteria Mağazası</h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-600 mb-8">
              <div className="flex items-center">
                <i className="ri-map-pin-line text-xl mr-2"></i>
                <span className="text-lg">İstanbul, Zorlu Center</span>
              </div>
              <div className="flex items-center">
                <i className="ri-calendar-line text-xl mr-2"></i>
                <span className="text-lg">2018</span>
              </div>
              <div className="flex items-center">
                <i className="ri-building-line text-xl mr-2"></i>
                <span className="text-lg">Ticari Mekan</span>
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
                  Zorlu Center Riceteria Mağazası, İstanbul'un en prestijli alışveriş merkezlerinden biri olan Zorlu Center'da konumlanan modern bir perakende mağaza projesidir. 2018 yılında tamamlanan bu proje, çağdaş tasarım anlayışı ve fonksiyonel mekan organizasyonu ile dikkat çekmektedir.
                </p>
                <p className="text-lg text-primary-700 leading-relaxed mb-6">
                  BOOP Mimarlık olarak, bu projede proje uygulama ve proje kontrol hizmetleri sunduk. Mağaza iç mekan tasarımı, ürün sergileme alanları ve müşteri dolaşım dinamikleri göz önünde bulundurularak planlandı. Modern vitrin düzenlemeleri ve aydınlatma çözümleriyle ürünlerin en iyi şekilde sergilenmesi sağlandı.
                </p>
                <p className="text-lg text-primary-700 leading-relaxed">
                  Minimalist ve şık tasarım anlayışı, kaliteli malzeme seçimleri ve ergonomik mekan organizasyonu ile müşteri deneyimi ön planda tutuldu. Zorlu Center'ın prestijli atmosferine uygun, modern ve çekici bir perakende mekanı yaratıldı.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">Proje Detayları</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-primary-200 pb-3">
                    <span className="font-semibold text-primary-700">Proje Türü:</span>
                    <span className="text-primary-900">Ticari Mekan</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-200 pb-3">
                    <span className="font-semibold text-primary-700">Konum:</span>
                    <span className="text-primary-900">İstanbul, Zorlu Center</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-200 pb-3">
                    <span className="font-semibold text-primary-700">Tamamlanma Yılı:</span>
                    <span className="text-primary-900">2018</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-200 pb-3">
                    <span className="font-semibold text-primary-700">Hizmetler:</span>
                    <span className="text-primary-900">Proje Uygulama, Proje Kontrol</span>
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

        {/* Project Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">Proje Galerisi</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`Zorlu Center Riceteria Mağazası - Görsel ${index + 1}`}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
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
              className="absolute top-4 right-4 text-white hover:text-primary-300 transition-colors z-10 w-12 h-12 flex items-center justify-center cursor-pointer"
            >
              <i className="ri-close-line text-4xl"></i>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-primary-300 transition-colors z-10 w-12 h-12 flex items-center justify-center cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-5xl"></i>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-primary-300 transition-colors z-10 w-12 h-12 flex items-center justify-center cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-5xl"></i>
            </button>

            <div className="max-w-6xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentImageIndex]}
                alt={`Görsel ${currentImageIndex + 1}`}
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

export default ZorluCenterRiceteriaPage;
