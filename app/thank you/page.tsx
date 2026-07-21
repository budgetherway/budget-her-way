import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You! Your Free Budget Planner is Ready',
  description: 'Thank you for subscribing to Budget Her Way. Download your free Budget Planner now.',
};

const DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1Y5d3A880CN6JuvRwnwcH05mKdvlmjvLW";

export default function ThankYouPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem', background: '#FAFAF7' }}>
      <div style={{ maxWidth: 580, width: '100%', textAlign: 'center' }}>

        {/* Success icon */}
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#EAF3EC', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: 36 }}>
          🎉
        </div>

        {/* Heading */}
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1B5E35', marginBottom: 12, lineHeight: 1.25 }}>
          You're in! Welcome to<br />Budget Her Way. 🌿
        </h1>

        <p style={{ fontSize: 16, color: '#5a5a5a', lineHeight: 1.75, marginBottom: '2rem' }}>
          Thank you for joining our community of women taking control of their money. Your free <strong style={{ color: '#1B5E35' }}>Monthly Budget Planner</strong> is ready to download right now!
        </p>

        {/* Download box */}
        <div style={{ background: '#fff', border: '2px solid #C9A84C', borderRadius: 16, padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎁</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#1B5E35', marginBottom: 8 }}>
            Your Free Budget Planner
          </h2>
          <p style={{ fontSize: 14, color: '#5a5a5a', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            A beautiful 6-page monthly budget planner with income tracker, expense tracker, savings goals, debt payoff tracker, and more — all in Budget Her Way green and gold!
          </p>
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#1B5E35', color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 10 }}>
            ⬇ Download Your Free Planner
          </a>
          <p style={{ fontSize: 12, color: '#aaa', margin: 0 }}>PDF format • Free forever • No strings attached</p>
        </div>

        {/* What's inside */}
        <div style={{ background: '#EAF3EC', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem', textAlign: 'left' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#1B5E35', marginBottom: 12, textAlign: 'center' }}>
            What's inside your planner:
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              '✓ Income Tracker', '✓ Fixed Expenses',
              '✓ Variable Expenses', '✓ Savings Goals',
              '✓ Debt Payoff Tracker', '✓ Monthly Reflection',
              '✓ Spending Breakdown', '✓ Motivational Quotes',
            ].map(item => (
              <div key={item} style={{ fontSize: 13, color: '#2A7A49', fontWeight: 500 }}>{item}</div>
            ))}
          </div>
        </div>

        {/* Next steps */}
        <div style={{ background: '#1B5E35', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 10 }}>
            While you're here — start reading!
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            Check out our most popular articles to help you get started on your money journey right now.
          </p>
          <Link href="/blog" style={{ display: 'inline-block', background: '#C9A84C', color: '#1B5E35', padding: '11px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
            Read the Blog →
          </Link>
        </div>

        {/* Social share */}
        <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>
          Know a woman who needs this? Share Budget Her Way with a friend who's ready to get their money together. 💚
        </p>

      </div>
    </div>
  );
}
