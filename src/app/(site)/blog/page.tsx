import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { blogPosts } from '@/lib/posts';

export const metadata = buildMetadata(
  'Hair blog for Pine Bush, NY | Hair by Anjali',
  'Hair care tips for Pine Bush and Hudson Valley weather, including bridal timelines, low-maintenance color, and frizz control.',
  '/blog'
);

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container-box space-y-6">
        <header className="space-y-3 max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-dark">Blog: Hudson Valley hair tips</h1>
          <p className="text-gray-700 text-lg">
            Practical advice for Pine Bush, Montgomery, and Walden residents—written to keep hair healthy in real Hudson Valley
            conditions.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card block hover:-translate-y-0.5 transition">
              <p className="text-xs uppercase tracking-wide text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
              <h2 className="text-xl font-semibold text-brand-dark mt-2">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.description}</p>
              <p className="mt-3 text-sm text-brand-primary">Read more →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
