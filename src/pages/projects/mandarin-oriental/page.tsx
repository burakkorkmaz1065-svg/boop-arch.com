import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MandarinOrientalPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/62baa3cf535d9103c065ac398119e5e7.jpeg',
    'https://readdy.ai/api/search-image?query=Elegant%20hotel%20event%20space%20interior%20with%20sophisticated%20design%2C%20luxury%20furnishings%2C%20contemporary%20decor%2C%20premium%20hospitality%20venue%2C%20professional%20photography%2C%20simple%20neutral%20background&width=1200&height=800&seq=902&orientation=landscape',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/426e816a2ea67345c2eb8926727cf6ed.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/484289c235b9a37f36fcf846be7c6e74.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/8ef356d2a21ca3f8349ff457b183096d.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/7bfaedcbfba0482ce8f0764eb2f73d76.jpeg',
    'https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/abfe93c289bc83796f9fed48a5baaa74.jpeg'
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
              <span className="text-primary-900 font-semibold">Mandarin Oriental Etkinlik Alanı</span>
            </div>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-primary-900 mb-6">Mandarin Oriental Bosphorus</h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-600 mb-8">
              <div className="flex items-center">
                <i className="ri-map-pin-line text-xl mr-2"></i>
                <span className="text-lg">İstanbul</span>
              </div>
              <div className="flex items-center">
                <i className="ri-calendar-line text-xl mr-2"></i>
                <span className="text-lg">2021</span>
              </div>
              <div className="flex items-center">
                <i className="ri-building-line text-xl mr-2"></i>
                <span className="text-lg">Lüks Otel Kompleksi</span>
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
                  Büyüleyici İstanbul Boğazı’nın kıyısında

İstanbul Boğazı’nın Avrupa kıyısında yer alan Mandarin Oriental Bosphorus Istanbul, 200 metre Boğaz cephesi, asırlık Naile Sultan Korusu ve tarihi Kuruçeşme sokaklarının çevrelediği eşsiz konumda hizmet vermeye başladı.

                </p>
                <p className="text-lg text-primary-700 leading-relaxed mb-6">
                  Mandarin Oriental Bosphorus ‘un eventspace, peyzaj, otopark, BOH proje kontrolleri yapılmıştır.


Mandarin Oriental’ın Asya sıcaklığıyla bütünleşmiş efsanevi hizmetleri, Mandarin Oriental Bosphorus, Istanbul’unşehrin kalbindeki resort atmosferinde benzersiz deneyimler sunuyor.
                </p>
                <p className="text-lg text-primary-700 leading-relaxed">
                  Proje kapsamında modern otopark çözümleri, zarif peyzaj düzenlemeleri ve şık pavyon tasarımları gerçekleştirildi. Her detay, Mandarin Oriental'ın mükemmellik anlayışını yansıtacak şekilde özenle planlandı ve uygulandı. Doğal unsurlar ve çağdaş mimari dil harmonik bir şekilde bir araya getirildi.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">Proje Detayları</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-primary-200 pb-3">
                    <span className="font-semibold text-primary-700">Proje Türü:</span>
                    <span className="text-primary-900">Karma Kullanım</span>
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
                    <span className="text-primary-900">Mimari, Peyzaj, Yönetim</span>
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
                    alt={`Mandarin Oriental - Görsel ${index + 1}`}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="ri-zoom-in-line text-white text-3xl"></i>
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

export default MandarinOrientalPage;
