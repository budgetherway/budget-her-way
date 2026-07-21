import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: 'article' },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div>
      {/* Article Header */}
      <div style={{ background: 'linear-gradient(135deg, #1B5E35 0%, #2A7A49 100%)', padding: '3.5rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <Link href={`/blog?category=${encodeURIComponent(post.category)}`}
            style={{ display: 'inline-block', background: 'rgba(201,168,76,0.2)', color: '#E8C96A', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 12, marginBottom: 16, textDecoration: 'none', border: '1px solid rgba(201,168,76,0.3)' }}>
            {post.category}
          </Link>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 16 }}>
            {post.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.65, marginBottom: 20, maxWidth: 600 }}>{post.description}</p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
            <span style={{ fontSize: 12, color: '#C9A84C', fontWeight: 500 }}>{post.readingTime}</span>
          </div>
        </div>
      </div>

      {/* Affiliate disclaimer */}
      <div style={{ background: '#FBF5E6', borderBottom: '1px solid rgba(201,168,76,0.25)', padding: '10px 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#8B6A1F', margin: 0 }}>
          This post may contain affiliate links. <Link href="/affiliate-disclosure" style={{ color: '#8B6A1F', textDecoration: 'underline' }}>Learn more</Link>.
        </p>
      </div>

      {/* Article Body */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e4e4e0' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {post.tags.map(tag => (
                <span key={tag} style={{ background: '#EAF3EC', color: '#1B5E35', fontSize: 12, padding: '4px 10px', borderRadius: 5, fontWeight: 500 }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back to blog */}
        <div style={{ marginTop: '2.5rem' }}>
          <Link href="/blog" style={{ color: '#1B5E35', fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            ← Back to all posts
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section style={{ background: '#FAFAF7', borderTop: '1px solid #e4e4e0', padding: '3rem 1.5rem 4rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#1B5E35', marginBottom: '1.5rem' }}>
              More in {post.category}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 }}>
              {related.map(p => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
