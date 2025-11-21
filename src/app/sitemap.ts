import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { blogPosts } from '@/lib/posts';

const routes = [
  '/',
  '/services',
  '/services/haircut-pine-bush-ny',
  '/services/hair-color-pine-bush-ny',
  '/services/balayage-pine-bush-ny',
  '/services/bridal-hair-hudson-valley',
  '/about',
  '/gallery',
  '/reviews',
  '/book',
  '/faq',
  '/blog'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const pages = routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
  const posts = blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.date) }));
  return [...pages, ...posts];
}
