import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  schema?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  schema,
}: SEOProps) => {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical || siteUrl + window.location.pathname;

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonical || siteUrl + window.location.pathname, true);

    // Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);

    // Last modified
    updateMetaTag('last-modified', new Date().toISOString().split('T')[0]);

    // Schema.org JSON-LD
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      
      scriptTag.textContent = JSON.stringify(schema);
    }

    // Cleanup function
    return () => {
      const schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogType, schema]);
};

// Schema.org generators
export const generateOrganizationSchema = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BOOP Mimarlık İnşaat',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Profesyonel mimarlık, müteahhitlik ve endüstriyel tasarım hizmetleri',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '19 Mayıs Mah. Tayyareci Cemal Sok. No:6',
      addressLocality: 'Şişli',
      addressRegion: 'İstanbul',
      postalCode: '34360',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0602,
      longitude: 28.9887,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-545-646-6761',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: 'Turkish',
    },
    sameAs: [],
  };
};

export const generateLocalBusinessSchema = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'BOOP Mimarlık İnşaat',
    image: `${siteUrl}/logo.png`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+90-545-646-6761',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '19 Mayıs Mah. Tayyareci Cemal Sok. No:6',
      addressLocality: 'Şişli',
      addressRegion: 'İstanbul',
      postalCode: '34360',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0602,
      longitude: 28.9887,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
  };
};

export const generateWebPageSchema = (name: string, description: string) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: siteUrl + window.location.pathname,
    inLanguage: 'tr-TR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'BOOP Mimarlık İnşaat',
      url: siteUrl,
    },
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: siteUrl + item.url,
    })),
  };
};

export const generateServiceSchema = (serviceName: string, description: string) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: 'BOOP Mimarlık İnşaat',
      url: siteUrl,
    },
    areaServed: {
      '@type': 'City',
      name: 'İstanbul',
    },
    serviceType: 'Mimarlık ve İnşaat Hizmetleri',
  };
};
