import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Budget Her Way | Women's Personal Finance Blog",
  description: "Practical budgeting, saving, investing, and debt payoff tips written for real women building financial freedom on their own terms.",
};

const MAILCHIMP_URL = "https://app.us16.list-manage.com/subscribe/post?u=dbcb86a1aabb2399bc5ed8544&id=371e2970cb&f_id=0053a6e0f0";

const categories = [
  { name: 'Budgeting', icon: '📊', desc: 'Zero-based budgets, cash stuffing, paycheck planning and more.' },
  { name: 'Saving Money', icon: '💰', desc: 'Saving challenges, frugal living, and grocery hacks that work.' },
  { name: 'Financial Freedom', icon: '🌿', desc: 'Money mindset, wealth habits, and building the life you want.' },
  { name: 'Investing', icon: '📈', desc: 'Beginner investing, index funds, Roth IRA, and compound interest.' },
  { name: 'Side Hustles', icon: '✨', desc: 'Real income ideas: digital products, Etsy, affiliate marketing.' },
  { name: 'Debt Payoff', icon: '🎯', desc: 'Debt snowball, avalanche, credit scores, and the debt-free journey.' },
];

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 6);

  return (
    <div>
      <style>{`
        .cat-card { transition: all 0.2s; }
        .cat-card:hover { border-color: #C9A84C !important; transform: translateY(-2px); }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.5); }
        .newsletter-input:focus { outline: none; border-color: #C9A84C !important; }
        .popup-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 1000; align-items: center; justify-content: center; }
        .popup-overlay.active { display: flex; }
        .popup-box { background: #fff; border-radius: 16px; padding: 2.5rem; max-width: 480px; width: 90%; position: relative; text-align: center; }
        .popup-close { position: absolute; top: 14px; right: 18px; background: none; border: none; font-size: 22px; cursor: pointer; color: #888; }
      `}</style>

      {/* Popup Newsletter */}
      <div className="popup-overlay" id="newsletterPopup">
        <div className="popup-box">
          <button className="popup-close" onclick="document.getElementById('newsletterPopup').classList.remove('active')" aria-label="Close">×</button>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🎁</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#1B5E35', marginBottom: 10 }}>Get Your Free Budget Planner!</h2>
          <p style={{ fontSize: 15, color: '#5a5a5a', lineHeight: 1.7, marginBottom: 20 }}>
            Join thousands of women taking control of their money. Subscribe and get a <strong>free Budget Planner</strong> delivered straight to your inbox.
          </p>
          <form action={MAILCHIMP_URL} method="post" target="_blank" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <input type="email" name="EMAIL" placeholder="your@email.com" required style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid #e4e4e0', fontSize: 15, outline: 'none', textAlign: 'center' }} />
            <input type="hidden" name="b_dbcb86a1aabb2399bc5ed8544_371e2970cb" value="" />
            <button type="submit" style={{ background: '#1B5E35', color: '#fff', padding: '13px', borderRadius: 8, fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer' }}>
              Yes! Send Me the Free Planner 🌿
            </button>
          </form>
          <p style={{ fontSize: 11, color: '#aaa', marginTop: 10 }}>No spam. Unsubscribe any time.</p>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        setTimeout(function() {
          if (!localStorage.getItem('bhw_popup_shown')) {
            document.getElementById('newsletterPopup').classList.add('active');
            localStorage.setItem('bhw_popup_shown', 'true');
          }
        }, 5000);
        document.getElementById('newsletterPopup').addEventListener('click', function(e) {
          if (e.target === this) this.classList.remove('active');
        });
      `}} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1B5E35 0%, #2A7A49 100%)', padding: '5rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', border: '2px solid rgba(201,168,76,0.15)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -60, width: 350, height: 350, borderRadius: '50%', border: '2px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
          <span style={{ display: 'inline-block', background: 'rgba(201,168,76,0.2)', color: '#E8C96A', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: '1.25rem', border: '1px solid rgba(201,168,76,0.3)' }}>
            Women's Personal Finance
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Your money. Your rules.<br />
            <span style={{ color: '#C9A84C' }}>Your way.</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 540, margin: '0 auto 2rem' }}>
            Practical budgeting, saving, investing, and debt payoff tips written for real women who are done waiting to get their money together.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/blog" style={{ background: '#C9A84C', color: '#1B5E35', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>Read the Blog</Link>
            <Link href="/about" style={{ background: 'transparent', color: '#fff', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', display: 'inline-block' }}>About Me</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem', fontWeight: 700, color: '#1B5E35', marginBottom: 10 }}>Browse by Topic</h2>
          <p style={{ color: '#5a5a5a', fontSize: '1rem' }}>Find exactly what you need for where you are right now.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {categories.map((cat) => (
            <Link key={cat.name} href={`/blog?category=${encodeURIComponent(cat.name)}`} style={{ textDecoration: 'none' }}>
              <div className="cat-card" style={{ background: '#fff', border: '1px solid #e4e4e0', borderRadius: 13, padding: '1.4rem 1.5rem', cursor: 'pointer', height: '100%' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{cat.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 700, color: '#1B5E35', marginBottom: 6 }}>{cat.name}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6, margin: 0 }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem', flexWrap: 'wrap', gap: 8 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem', fontWeight: 700, color: '#1B5E35' }}>Latest Posts</h2>
            <Link href="/blog" style={{ fontSize: 13, color: '#C9A84C', fontWeight: 600, textDecoration: 'none' }}>See all posts &rarr;</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {recentPosts.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        </section>
      )}

      {recentPosts.length === 0 && (
        <section style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 1.5rem 5rem', textAlign: 'center' }}>
          <div style={{ background: '#EAF3EC', borderRadius: 16, padding: '3rem 2rem' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🌿</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#1B5E35', marginBottom: 12 }}>Articles Coming Soon</h2>
            <p style={{ color: '#4a4a4a', fontSize: 15 }}>Drop your first Markdown file in <code style={{ background: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 13 }}>content/posts/</code> to get started.</p>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section style={{ background: '#1B5E35', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>🎁</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Get Your Free Budget Planner</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, marginBottom: '1.75rem', lineHeight: 1.7 }}>
            Subscribe and get a <strong style={{ color: '#C9A84C' }}>free Budget Planner</strong> delivered straight to your inbox. Plus weekly money tips every week.
          </p>
          <form action={MAILCHIMP_URL} method="post" target="_blank" style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input type="email" name="EMAIL" placeholder="your@email.com" required className="newsletter-input" style={{ flex: 1, minWidth: 200, padding: '12px 16px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: 14 }} />
            <input type="hidden" name="b_dbcb86a1aabb2399bc5ed8544_371e2970cb" value="" />
            <button type="submit" style={{ background: '#C9A84C', color: '#1B5E35', padding: '12px 22px', borderRadius: 8, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>Get Free Planner</button>
          </form>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 12 }}>No spam, ever. Unsubscribe any time.</p>
        </div>
      </section>
    </div>
  );
}
