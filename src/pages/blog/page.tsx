import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useSEO, generateWebPageSchema, generateBreadcrumbSchema } from '../../utils/seo';

const BlogPage = () => {
  useSEO({
    title: 'Mimarlık ve İnşaat Blog - BOOP Mimarlık İnşaat',
    description: 'Kentsel dönüşüm, mimarlık trendleri, inşaat teknolojileri ve tasarım hakkında uzman görüşleri. BOOP Mimarlık İnşaat\'ın mimarlık ve inşaat sektörüne dair makaleleri ve analizleri.',
    keywords: 'mimarlık blog, kentsel dönüşüm, inşaat teknolojileri, mimari tasarım, yapı sektörü, mimarlık trendleri',
    canonical: (import.meta.env.VITE_SITE_URL || 'https://example.com') + '/blog',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateWebPageSchema('Blog - BOOP Mimarlık İnşaat', 'Mimarlık ve inşaat sektörüne dair uzman görüşleri ve makaleler'),
        generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]),
      ],
    },
  });

  const blogPosts = [
    {
      id: 1,
      title: 'Kentsel Dönüşüm Nedir? BOOP Mimarlık\'ın Türkiye Perspektifi',
      excerpt: 'Kentsel dönüşüm, modern şehirleri şekillendiren en kritik süreçlerden biridir. Türkiye\'de bu kavram, özellikle son yıllarda, yaşlanan altyapıyı yenilemek, yaşam standartlarını iyileştirmek ve sürdürülebilir kentsel ortamlar yaratmak için önemli bir araç olarak büyük önem kazanmıştır.',
      category: 'Kentsel Dönüşüm',
      date: '2025',
      readTime: '8 dk okuma',
      image: 'https://readdy.ai/api/search-image?query=Modern%20urban%20transformation%20project%20showing%20before%20and%20after%20renovation%20of%20residential%20buildings%2C%20contemporary%20architecture%2C%20sustainable%20city%20development%2C%20professional%20architectural%20photography%20with%20clean%20background%20highlighting%20urban%20renewal&width=800&height=500&seq=blog1&orientation=landscape',
      link: '/blog/what-is-urban-transformation-boop-architecture-perspective-turkey',
      author: 'BOOP Mimarlık İnşaat'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary-900 text-white py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/95"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Mimarlık ve inşaat dünyasından güncel gelişmeler, uzman görüşleri ve sektörel analizler
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Son Yazılar</h2>
              <p className="text-lg text-primary-600 max-w-2xl mx-auto">
                Mimarlık, kentsel dönüşüm ve inşaat sektörüne dair derinlemesine analizler
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={post.link}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary-900">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-primary-600 mb-3">
                      <i className="ri-calendar-line mr-2"></i>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <i className="ri-time-line mr-2"></i>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-primary-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary-600 mb-4">
                      <i className="ri-user-line mr-2"></i>
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center text-primary-900 font-semibold group-hover:text-primary-700">
                      <span>Devamını Oku</span>
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-primary-900 mb-4">Blog Güncellemelerini Kaçırmayın</h3>
            <p className="text-lg text-primary-600 mb-8">
              Yeni yazılarımızdan haberdar olmak için bültenimize abone olun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
              <button className="px-6 py-3 bg-primary-900 text-white font-semibold rounded hover:bg-primary-800 transition-colors whitespace-nowrap cursor-pointer">
                Abone Ol
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
