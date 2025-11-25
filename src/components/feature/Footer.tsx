
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BOOP MİMARLIK</h3>
            <p className="text-primary-300 text-sm leading-relaxed">
              İstanbul'da mimarlık, müteahhitlik ve endüstriyel tasarım alanlarında profesyonel hizmetler sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/hakkimizda" className="text-primary-300 hover:text-white text-sm transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-primary-300 hover:text-white text-sm transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link to="/projeler" className="text-primary-300 hover:text-white text-sm transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-primary-300 hover:text-white text-sm transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link to="/kvkk" className="text-primary-300 hover:text-white text-sm transition-colors">
                  KVKK
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm text-primary-300">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-lg mr-2 mt-0.5"></i>
                <span>19 Mayıs Mah. Tayyareci Cemal Sok. No:6, Şişli / İstanbul</span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line text-lg mr-2"></i>
                <span>0545-646-6761 / 0533-456-7008</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line text-lg mr-2"></i>
                <a href="mailto:boop.arch@gmail.com" className="hover:text-white transition-colors">
                  boop.arch@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-sm text-primary-400">
          <p>© {currentYear} BOOP Mimarlık İnşaat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
