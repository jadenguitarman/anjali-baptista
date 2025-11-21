import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { blogPosts, getPostBySlug } from '@/lib/posts';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata(`${post.title} | Hair by Anjali`, post.description, `/blog/${post.slug}`);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="section">
      <div className="container-box space-y-4 max-w-3xl">
        <p className="text-xs uppercase tracking-wide text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
        <h1 className="text-3xl font-semibold text-brand-dark">{post.title}</h1>
        <p className="text-gray-700 text-lg">{post.description}</p>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>
      </div>
    </div>
  );
}
