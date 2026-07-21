'use client';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog?category=Budgeting', label: 'Budgeting' },
  { href: '/blog?category=Saving+Money', label: 'Saving' },
  { href: '/blog?category=Investing', label: 'Investing' },
  { href: '/blog?category=Side+Hustles', label: 'Side Hustles' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: '#1B5E35', borderBottom: '1px solid #164d2c' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#C9A84C', border: '2px solid #E8C96A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: '#1B5E35', flexShrink: 0 }}>
            BHW
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, color: '#fff', lineHeight: 1.1 }}>Budget Her Way</div>
            <div style={{ fontSize: 10, color: '#E8C96A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Women's Finance Blog</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500, padding: '6px 12px', borderRadius: 6, textDecoration: 'none', transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="mobile-menu-btn" aria-label="Toggle menu">
          <div style={{ width: 22, height: 2, background: '#fff', marginBottom: 5, transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: 22, height: 2, background: '#fff', marginBottom: 5, opacity: open ? 0 : 1, transition: 'all 0.2s' }} />
          <div style={{ width: 22, height: 2, background: '#fff', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#164d2c', padding: '1rem 1.5rem 1.5rem' }} className="mobile-menu">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: 15, fontWeight: 500, padding: '10px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
