import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const KVKKPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gizlilik Politikası ve KVKK Aydınlatma Metni</h1>
            <p className="text-xl text-primary-200">
              Kişisel verilerinizin korunması bizim için önemlidir
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-primary-700 leading-relaxed mb-4">
                  BOOP Mimarlık İnşaat olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, 
                  kişisel verilerinizin güvenliğine önem veriyor ve bu konuda azami hassasiyeti gösteriyoruz. 
                  Bu aydınlatma metni ile kişisel verilerinizin nasıl toplandığı, işlendiği, saklandığı ve 
                  korunduğu hakkında sizi bilgilendirmeyi amaçlıyoruz.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-start">
                  <i className="ri-shield-check-line text-primary-900 mr-3 mt-1"></i>
                  1. Veri Sorumlusu
                </h2>
                <p className="text-primary-700 leading-relaxed mb-3">
                  KVKK uyarınca kişisel verilerinizin veri sorumlusu BOOP Mimarlık İnşaat'tır.
                </p>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <p className="text-primary-800 mb-2"><strong>Adres:</strong> 19 Mayıs Mah. Tayyareci Cemal Sok. No:6, Şişli / İstanbul</p>
                  <p className="text-primary-800 mb-2"><strong>Telefon:</strong> 0545-646-6761 / 0533-456-7008</p>
                  <p className="text-primary-800"><strong>E-posta:</strong> boop.arch@gmail.com</p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-start">
                  <i className="ri-database-2-line text-primary-900 mr-3 mt-1"></i>
                  2. Toplanan Kişisel Veriler
                </h2>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Web sitemiz ve hizmetlerimiz kapsamında aşağıdaki kişisel verileriniz toplanabilmektedir:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start text-primary-700">
                    <i className="ri-checkbox-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span><strong>Kimlik Bilgileri:</strong> Ad, soyad</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-checkbox-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, adres</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-checkbox-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span><strong>Proje Bilgileri:</strong> Proje detayları, talep edilen hizmetler</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-checkbox-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span><strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, çerez kayıtları, tarayıcı bilgileri</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-start">
                  <i className="ri-file-list-3-line text-primary-900 mr-3 mt-1"></i>
                  3. Kişisel Verilerin İşlenme Amaçları
                </h2>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start text-primary-700">
                    <i className="ri-arrow-right-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span>Mimarlık ve inşaat hizmetlerinin sunulması</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-arrow-right-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span>Teklif hazırlanması ve müşteri ilişkileri yönetimi</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-arrow-right-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span>İletişim taleplerinin yanıtlanması</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-arrow-right-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span>Sözleşme süreçlerinin yürütülmesi</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-arrow-right-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span>Yasal yükümlülüklerin yerine getirilmesi</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-arrow-right-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span>Web sitesi güvenliğinin sağlanması</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-arrow-right-circle-fill text-primary-900 mr-3 mt-1"></i>
                    <span>Hizmet kalitesinin geliştirilmesi</span>
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-start">
                  <i className="ri-share-forward-line text-primary-900 mr-3 mt-1"></i>
                  4. Kişisel Verilerin Aktarılması
                </h2>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak 
                  aşağıdaki durumlarda üçüncü kişilerle paylaşılabilir:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start text-primary-700">
                    <i className="ri-building-line text-primary-900 mr-3 mt-1"></i>
                    <span>İş ortaklarımız ve tedarikçilerimiz (proje yürütme amacıyla)</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-government-line text-primary-900 mr-3 mt-1"></i>
                    <span>Yasal yükümlülükler gereği yetkili kamu kurum ve kuruluşları</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-scales-3-line text-primary-900 mr-3 mt-1"></i>
                    <span>Hukuki danışmanlar ve denetim firmaları</span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-start">
                  <i className="ri-cookie-line text-primary-900 mr-3 mt-1"></i>
                  5. Çerezler (Cookies)
                </h2>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Web sitemiz, kullanıcı deneyimini geliştirmek ve site trafiğini analiz etmek amacıyla 
                  çerezler kullanmaktadır. Çerezler, tarayıcınız tarafından bilgisayarınıza kaydedilen 
                  küçük metin dosyalarıdır. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-start">
                  <i className="ri-user-settings-line text-primary-900 mr-3 mt-1"></i>
                  6. KVKK Kapsamındaki Haklarınız
                </h2>
                <p className="text-primary-700 leading-relaxed mb-4">
                  KVKK'nın 11. maddesi uyarınca, kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start text-primary-700">
                    <i className="ri-check-double-line text-primary-900 mr-3 mt-1"></i>
                    <span>Kişisel verilerinizin işlenip işlenmediğini öğrenme</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-check-double-line text-primary-900 mr-3 mt-1"></i>
                    <span>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-check-double-line text-primary-900 mr-3 mt-1"></i>
                    <span>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-check-double-line text-primary-900 mr-3 mt-1"></i>
                    <span>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-check-double-line text-primary-900 mr-3 mt-1"></i>
                    <span>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-check-double-line text-primary-900 mr-3 mt-1"></i>
                    <span>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-check-double-line text-primary-900 mr-3 mt-1"></i>
                    <span>Kişisel verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</span>
                  </li>
                  <li className="flex items-start text-primary-700">
                    <i className="ri-check-double-line text-primary-900 mr-3 mt-1"></i>
                    <span>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</span>
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-start">
                  <i className="ri-mail-send-line text-primary-900 mr-3 mt-1"></i>
                  7. Başvuru Yöntemi
                </h2>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle başvuruda bulunabilirsiniz:
                </p>
                <div className="bg-primary-50 p-6 rounded-lg mb-4">
                  <p className="text-primary-800 mb-3"><strong>Yazılı Başvuru:</strong></p>
                  <p className="text-primary-700 mb-2">19 Mayıs Mah. Tayyareci Cemal Sok. No:6, Şişli / İstanbul adresine ıslak imzalı dilekçe ile</p>
                  <p className="text-primary-800 mb-3 mt-4"><strong>E-posta:</strong></p>
                  <p className="text-primary-700">boop.arch@gmail.com adresine güvenli elektronik imza veya mobil imza ile</p>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  Başvurularınız, talebinizin niteliğine göre en geç 30 gün içinde ücretsiz olarak 
                  sonuçlandırılacaktır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde, 
                  Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-start">
                  <i className="ri-lock-2-line text-primary-900 mr-3 mt-1"></i>
                  8. Veri Güvenliği
                </h2>
                <p className="text-primary-700 leading-relaxed mb-4">
                  BOOP Mimarlık İnşaat olarak, kişisel verilerinizin güvenliğini sağlamak için gerekli 
                  teknik ve idari tedbirleri almaktayız. Verileriniz, yetkisiz erişime, kayba veya 
                  değişikliğe karşı korunmaktadır.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-start">
                  <i className="ri-time-line text-primary-900 mr-3 mt-1"></i>
                  9. Saklama Süresi
                </h2>
                <p className="text-primary-700 leading-relaxed">
                  Kişisel verileriniz, işlendikleri amaç için gerekli olan süre boyunca ve ilgili 
                  mevzuatta öngörülen süreler dahilinde saklanmaktadır. Saklama süresinin sona ermesi 
                  durumunda, kişisel verileriniz silinir, yok edilir veya anonim hale getirilir.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-start">
                  <i className="ri-refresh-line text-primary-900 mr-3 mt-1"></i>
                  10. Politika Güncellemeleri
                </h2>
                <p className="text-primary-700 leading-relaxed">
                  Bu gizlilik politikası ve KVKK aydınlatma metni, yasal düzenlemelerdeki değişiklikler 
                  veya şirket politikalarındaki güncellemeler doğrultusunda revize edilebilir. 
                  Güncellemeler web sitemizde yayınlanacaktır.
                </p>
              </div>

              {/* Last Update */}
              <div className="mt-12 pt-8 border-t border-primary-200">
                <p className="text-sm text-primary-600">
                  <strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-question-line text-3xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold text-primary-900 mb-4">Sorularınız mı var?</h3>
            <p className="text-lg text-primary-700 mb-8">
              Kişisel verilerinizin işlenmesi hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz
            </p>
            <a
              href="/iletisim"
              className="inline-block px-8 py-4 bg-primary-900 text-white font-semibold rounded hover:bg-primary-800 transition-colors whitespace-nowrap cursor-pointer"
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

export default KVKKPage;
