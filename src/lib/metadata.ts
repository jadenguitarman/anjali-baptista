import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const buildMetadata = (
  title: string,
  description: string,
  path: string,
  options?: { image?: string }
): Metadata => {
  const url = `${siteConfig.url}${path}`;
  const baseImage = options?.image || siteConfig.defaultImage;
  const image = baseImage.startsWith('http') ? baseImage : `${siteConfig.url}${baseImage}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [image],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
};
