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
    name: 'LaserTech',
    description: 'Distribuidor autorizado de equipos láser odontológicos. Asesoría por especialistas.',
    url: 'https://lasertech-demo.com',
    telephone: '+51999888777',
    email: 'demo@lasertech-demo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Principal 123',
      addressLocality: 'San Isidro',
      addressRegion: 'Lima',
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.09,
      longitude: -77.03,
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
    image: image || 'https://lasertech-demo.com/og-default.svg',
    url,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'LaserTech',
      },
    },
  };

  return <JsonLd data={data} />;
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LaserTech',
    url: 'https://lasertech-demo.com',
    logo: 'https://lasertech-demo.com/logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+51999888777',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
    sameAs: [],
  };

  return <JsonLd data={data} />;
}
