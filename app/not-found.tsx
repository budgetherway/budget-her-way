import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem', textAlign: 'center' }}>
      <div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 80, fontWeight: 700, color: '#1B5E35', lineHeight: 1, marginBottom: 16 }}>404</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 12 }}>Page not found</h1>
        <p style={{ color: '#5a5a5a', fontSize: 15, marginBottom: '1.75rem' }}>This page does not exist. But your financial goals do.</p>
        <Link href="/" style={{ background: '#1B5E35', color: '#fff', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Back to Home</Link>
      </div>
    </div>
  );
}
