import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

// Utility to standardize SEO metadata across pages
export const SEOHead = (title: string, description: string, path: string, image?: string): Metadata =>
  buildMetadata(title, description, path, { image });
