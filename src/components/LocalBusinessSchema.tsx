import React from 'react';
import { siteConfig } from '@/config/site';

type Props = {
  type?: 'HairSalon' | 'BeautySalon';
};

export const LocalBusinessSchema: React.FC<Props> = ({ type = 'HairSalon' }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': type,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.defaultImage}`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'US'
    },
    areaServed: siteConfig.serviceAreas,
    priceRange: '$$'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
};
