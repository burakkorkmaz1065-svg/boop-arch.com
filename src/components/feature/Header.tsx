import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Projeler', path: '/projeler' },
    { name: 'Blog', path: '/blog' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-primary-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://static.readdy.ai/image/e78687b2456904d2334721dafeba36ce/e34817f07a9d5e648c57a2d8e9d19a3c.png" 
              alt="BOOP Mimarlık Logo" 
              className="h-12 w-auto object-contain"
            />
            <h1 className="text-2xl font-bold text-primary-900 tracking-tight">
              
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-primary-900 border-b-2 border-primary-900 pb-1'
                    : 'text-primary-600 hover:text-primary-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary-700 hover:text-primary-900 cursor-pointer"
            aria-label="Menu"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-900 bg-primary-50'
                    : 'text-primary-600 hover:text-primary-900 hover:bg-primary-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
