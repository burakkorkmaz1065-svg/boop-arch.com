import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const ProjectsPage = lazy(() => import('../pages/projects/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const GalleryPage = lazy(() => import('../pages/gallery/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const KVKKPage = lazy(() => import('../pages/kvkk/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

// Project Detail Pages
const LamartineOteliPage = lazy(() => import('../pages/projects/lamartine-oteli/page'));
const HiltonPalazzoDonizettiPage = lazy(() => import('../pages/projects/hilton-palazzo-donizetti/page'));
const BesiktasApartmaniPage = lazy(() => import('../pages/projects/besiktas-apartmani/page'));
const EtilerErginApartmaniPage = lazy(() => import('../pages/projects/etiler-ergin-apartmani/page'));
const AjdaPekkanBodrumEviPage = lazy(() => import('../pages/projects/ajda-pekkan-bodrum-evi/page'));
const ZorluCenterRiceteriaPage = lazy(() => import('../pages/projects/vadi-istanbul-konutlari/page'));
const MoxyMarriottOteliPage = lazy(() => import('../pages/projects/moxy-marriott-oteli/page'));
const AvcilarBelediyesiSergiSalonuPage = lazy(() => import('../pages/projects/avcilar-belediyesi-sergi-salonu/page'));
const BayrampasaWishMoreHotelPage = lazy(() => import('../pages/projects/bayram-pasa-wish-more-hotel/page'));
const MandarinOrientalPage = lazy(() => import('../pages/projects/mandarin-oriental/page'));
const KaramanBuldakHukukBurosuPage = lazy(() => import('../pages/projects/karaman-buldak-hukuk-burosu/page'));

// Blog Detail Pages
const UrbanTransformationBlogPost = lazy(() => import('../pages/blog/what-is-urban-transformation-boop-architecture-perspective-turkey/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/hakkimizda',
    element: <AboutPage />,
  },
  {
    path: '/hizmetler',
    element: <ServicesPage />,
  },
  {
    path: '/projeler',
    element: <ProjectsPage />,
  },
  {
    path: '/projeler/lamartine-oteli',
    element: <LamartineOteliPage />,
  },
  {
    path: '/projeler/hilton-palazzo-donizetti',
    element: <HiltonPalazzoDonizettiPage />,
  },
  {
    path: '/projeler/besiktas-apartmani',
    element: <BesiktasApartmaniPage />,
  },
  {
    path: '/projeler/etiler-ergin-apartmani',
    element: <EtilerErginApartmaniPage />,
  },
  {
    path: '/projeler/ajda-pekkan-bodrum-evi',
    element: <AjdaPekkanBodrumEviPage />,
  },
  {
    path: '/projeler/zorlu-center-riceteria',
    element: <ZorluCenterRiceteriaPage />,
  },
  {
    path: '/projeler/moxy-marriott-oteli',
    element: <MoxyMarriottOteliPage />,
  },
  {
    path: '/projeler/avcilar-belediyesi-sergi-salonu',
    element: <AvcilarBelediyesiSergiSalonuPage />,
  },
  {
    path: '/projeler/bayram-pasa-wish-more-hotel',
    element: <BayrampasaWishMoreHotelPage />,
  },
  {
    path: '/projeler/mandarin-oriental',
    element: <MandarinOrientalPage />,
  },
  {
    path: '/projeler/karaman-buldak-hukuk-burosu',
    element: <KaramanBuldakHukukBurosuPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/what-is-urban-transformation-boop-architecture-perspective-turkey',
    element: <UrbanTransformationBlogPost />,
  },
  {
    path: '/galeri',
    element: <GalleryPage />,
  },
  {
    path: '/iletisim',
    element: <ContactPage />,
  },
  {
    path: '/kvkk',
    element: <KVKKPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
