'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PostCard from '@/components/PostCard';
import type { PostMeta } from '@/lib/posts';

const categories = ['Budgeting', 'Saving Money', 'Financial Freedom', 'Investing', 'Side Hustles', 'Debt Payoff'];

function BlogContent({ allPosts }: { allPosts: PostMeta[] }) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || '';
  const filtered = activeCategory ? allPosts.filter(p => p.category === activeCategory) : allPosts;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1B5E35', marginBottom: 10 }}>
          {activeCategory || 'All Posts'}
        </h1>
        <p style={{ color: '#5a5a5a', fontSize: 15 }}>
          {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}{activeCategory ? ` in ${activeCategory}` : ''}
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        <a href="/blog" style={{ padding: '7px 16px', borderRadius: 20, fontSize: 13, fontWeight: 500, textDecoration: 'none', border: '1px solid', background: !activeCategory ? '#1B5E35' : 'transparent', color: !activeCategory ? '#fff' : '#4a4a4a', borderColor: !activeCategory ? '#1B5E35' : '#e4e4e0' }}>All</a>
        {categories.map(cat => (
          <a key={cat} href={`/blog?category=${encodeURIComponent(cat)}`} style={{ padding: '7px 16px', borderRadius: 20, fontSize: 13, fontWeight: 500, textDecoration: 'none', border: '1px solid', background: activeCategory === cat ? '#1B5E35' : 'transparent', color: activeCategory === cat ? '#fff' : '#4a4a4a', borderColor: activeCategory === cat ? '#1B5E35' : '#e4e4e0' }}>{cat}</a>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {filtered.map(post => <PostCard key={post.slug} post={post} />)}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 1.5rem', background: '#EAF3EC', borderRadius: 14 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📝</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#1B5E35', marginBottom: 8 }}>No posts yet</h2>
          <p style={{ color: '#5a5a5a' }}>Articles in this category are coming soon.</p>
        </div>
      )}
    </div>
  );
}

export default function BlogClient({ allPosts }: { allPosts: PostMeta[] }) {
  return (
    <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#1B5E35' }}>Loading...</div>}>
      <BlogContent allPosts={allPosts} />
    </Suspense>
  );
}
