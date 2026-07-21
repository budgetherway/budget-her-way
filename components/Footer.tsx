import Link from 'next/link';

export default function Footer() {
  const topicLinks = ['Budgeting', 'Saving Money', 'Financial Freedom', 'Investing', 'Side Hustles', 'Debt Payoff'];
  const pageLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  ];

  return (
    <footer style={{ background: '#1B5E35', color: 'rgba(255,255,255,0.8)', marginTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#C9A84C', border: '2px solid #E8C96A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 11, color: '#1B5E35', flexShrink: 0 }}>BHW</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, color: '#fff' }}>Budget Her Way</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)' }}>Practical money guidance for women ready to take control of their finances and build the life they want.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#C9A84C', fontSize: 14, fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Topics</h4>
            {topicLinks.map(cat => (
              <Link key={cat} href={`/blog?category=${encodeURIComponent(cat)}`} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: 6 }}>{cat}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#C9A84C', fontSize: 14, fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Pages</h4>
            {pageLinks.map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: 6 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#C9A84C', fontSize: 14, fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Disclaimer</h4>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>Budget Her Way is for informational purposes only. Content on this site may contain affiliate links. We earn a small commission at no extra cost to you.</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: 0 }}>© {new Date().getFullYear()} Budget Her Way. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/privacy-policy" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/affiliate-disclosure" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
