interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TechPro',
    description: 'Distribuidor autorizado de equipos láser odontológicos. Asesoría por especialistas.',
    url: 'https://techpro-demo.com',
    telephone: '+51900000000',
    email: 'demo@techpro-demo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Ejemplo 456',
      addressLocality: 'San Isidro',
      addressRegion: 'Lima',
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.05,
      longitude: -77.05,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [],
  };

  return <JsonLd data={data} />;
}

export function ProductJsonLd({
  name,
  description,
  brand,
  image,
  url,
}: {
  name: string;
  description: string;
  brand: string;
  image?: string;
  url: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    image: image || 'https://techpro-demo.com/og-default.svg',
    url,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'TechPro',
      },
    },
  };

  return <JsonLd data={data} />;
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TechPro',
    url: 'https://techpro-demo.com',
    logo: 'https://techpro-demo.com/logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+51900000000',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
    sameAs: [],
  };

  return <JsonLd data={data} />;
}
