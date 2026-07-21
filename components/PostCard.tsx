'use client';
import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Budgeting': { bg: '#EAF3EC', text: '#1B5E35' },
  'Saving Money': { bg: '#FBF5E6', text: '#8B6A1F' },
  'Financial Freedom': { bg: '#EAF3EC', text: '#1B5E35' },
  'Investing': { bg: '#FBF5E6', text: '#8B6A1F' },
  'Side Hustles': { bg: '#EAF3EC', text: '#1B5E35' },
  'Debt Payoff': { bg: '#FBF5E6', text: '#8B6A1F' },
};

export default function PostCard({ post }: { post: PostMeta }) {
  const colors = categoryColors[post.category] || { bg: '#EAF3EC', text: '#1B5E35' };
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <article
        style={{ background: '#fff', border: '1px solid #e4e4e0', borderRadius: 14, padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(27,94,53,0.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
        <span style={{ display: 'inline-block', background: colors.bg, color: colors.text, fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 5, marginBottom: 12 }}>
          {post.category}
        </span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.35, marginBottom: 10 }}>{post.title}</h2>
        <p style={{ fontSize: 13.5, color: '#5a5a5a', lineHeight: 1.65, marginBottom: 16, flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {post.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f0f0ec', paddingTop: 12 }}>
          <span style={{ fontSize: 12, color: '#999' }}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span style={{ fontSize: 12, color: '#C9A84C', fontWeight: 500 }}>{post.readingTime}</span>
        </div>
      </article>
    </Link>
  );
}
