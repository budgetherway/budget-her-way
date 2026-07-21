import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Budget Her Way is a personal finance blog for women who are done waiting to get their money together. Real strategies, warm voice, zero judgment.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1B5E35 0%, #2A7A49 100%)', padding: '4rem 1.5rem 3.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#C9A84C', border: '3px solid #E8C96A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: '#1B5E35', margin: '0 auto 1.5rem' }}>BHW</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>About Budget Her Way</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, lineHeight: 1.75 }}>A finance blog built for women who are ready to stop worrying and start winning with money.</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>

        {/* Mission */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.7rem', fontWeight: 700, color: '#1B5E35', marginBottom: '1rem' }}>Why Budget Her Way Exists</h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4a4a4a', marginBottom: '1rem' }}>
            Most finance content was not written for women. It is dense, jargon-heavy, and assumes a level of financial confidence that many of us never had the chance to build. Budget Her Way exists to change that.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4a4a4a', marginBottom: '1rem' }}>
            This is a space for the woman who has Googled "how to stop living paycheck to paycheck" at 11pm. The woman who saves money into a separate account and moves it back three days later. The woman who knows she should invest but has no idea where to start.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4a4a4a' }}>
            You are not behind. You are not bad with money. You just need a plan that actually makes sense for your life.
          </p>
        </section>

        {/* Who this is for */}
        <section style={{ background: '#EAF3EC', borderRadius: 14, padding: '2rem', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#1B5E35', marginBottom: '1rem' }}>Who This Blog Is For</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              'Women aged 25 to 42 ready to take money seriously',
              'Stay-at-home moms stretching every dollar',
              'Single women building financial independence',
              'Women in career transitions or rebuilding after setbacks',
              'Anyone tired of vague financial advice that never actually helps',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: 16, marginTop: 1, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: 14, color: '#3a3a3a', lineHeight: 1.6, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to expect */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.7rem', fontWeight: 700, color: '#1B5E35', marginBottom: '1rem' }}>What You Will Find Here</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { icon: '📊', title: 'Budgeting', desc: 'Budget templates, cash stuffing, zero-based systems, and paycheck planning that actually stick.' },
              { icon: '💰', title: 'Saving Money', desc: 'Frugal living tips, savings challenges, grocery hacks, and how to build an emergency fund from scratch.' },
              { icon: '🌿', title: 'Financial Freedom', desc: 'Money mindset shifts, wealth-building habits, and what it actually takes to stop worrying about money.' },
              { icon: '📈', title: 'Investing', desc: 'Beginner-friendly guides on index funds, Roth IRAs, compound interest, and getting started with $0 to spare.' },
              { icon: '✨', title: 'Side Hustles', desc: 'Real income ideas with real numbers. Digital products, Etsy, affiliate marketing, and more.' },
              { icon: '🎯', title: 'Debt Payoff', desc: 'Debt snowball, debt avalanche, credit score tips, and the honest truth about what the debt-free journey takes.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', border: '1px solid #e4e4e0', borderRadius: 12, padding: '1.25rem' }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 700, color: '#1B5E35', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: '#5a5a5a', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section style={{ marginBottom: '3rem', borderLeft: '3px solid #C9A84C', paddingLeft: '1.5rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.7rem', fontWeight: 700, color: '#1B5E35', marginBottom: '1rem' }}>What We Believe</h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4a4a4a', marginBottom: '1rem' }}>Every woman deserves access to financial knowledge that does not talk down to her.</p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4a4a4a', marginBottom: '1rem' }}>Progress matters more than perfection. You do not need to have it all figured out to start.</p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4a4a4a' }}>Money is a tool. Budget Her Way is here to help you use it better.</p>
        </section>

        {/* CTA */}
        <section style={{ background: '#1B5E35', borderRadius: 14, padding: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: 10 }}>Ready to start?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, marginBottom: '1.5rem' }}>Browse the blog or start with our most popular topics below.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/blog" style={{ background: '#C9A84C', color: '#1B5E35', padding: '11px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Read the Blog</Link>
            <Link href="/contact" style={{ background: 'transparent', color: '#fff', padding: '11px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)' }}>Get in Touch</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
