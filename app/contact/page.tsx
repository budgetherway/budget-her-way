import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Budget Her Way for collaborations, sponsorships, reader questions, and media inquiries.',
};

export default function ContactPage() {
  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg, #1B5E35 0%, #2A7A49 100%)', padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>Get in Touch</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, lineHeight: 1.75 }}>Questions, collaborations, or just want to say hi? We would love to hear from you.</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1.5rem 5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
        {/* Form */}
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#1B5E35', marginBottom: '1.5rem' }}>Send a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3a3a3a', marginBottom: 6 }}>Your Name</label>
              <input type="text" placeholder="Jane Smith" style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #e4e4e0', fontSize: 14, color: '#1a1a1a', background: '#fff', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3a3a3a', marginBottom: 6 }}>Email Address</label>
              <input type="email" placeholder="jane@example.com" style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #e4e4e0', fontSize: 14, color: '#1a1a1a', background: '#fff', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3a3a3a', marginBottom: 6 }}>Subject</label>
              <select style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #e4e4e0', fontSize: 14, color: '#1a1a1a', background: '#fff', outline: 'none' }}>
                <option>General Question</option>
                <option>Collaboration / Sponsorship</option>
                <option>Media Inquiry</option>
                <option>Guest Post Pitch</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3a3a3a', marginBottom: 6 }}>Message</label>
              <textarea rows={5} placeholder="Tell us what's on your mind..." style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #e4e4e0', fontSize: 14, color: '#1a1a1a', background: '#fff', resize: 'vertical', outline: 'none', fontFamily: 'Inter, sans-serif' }} />
            </div>
            <button type="submit" style={{ background: '#1B5E35', color: '#fff', padding: '13px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer', textAlign: 'center' }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Info */}
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#1B5E35', marginBottom: '1.5rem' }}>Other Ways to Connect</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '📧', title: 'Email Us', desc: 'For media, PR, and partnership inquiries:', detail: 'hello@budgetherway.com' },
              { icon: '⏱', title: 'Response Time', desc: 'We typically reply within 48 business hours.', detail: '' },
              { icon: '🤝', title: 'Collaborations', desc: 'We work with finance brands, tools, and services that genuinely help our readers. Reach out to discuss sponsored content, product reviews, or affiliate partnerships.', detail: '' },
            ].map(item => (
              <div key={item.title} style={{ background: '#EAF3EC', borderRadius: 12, padding: '1.25rem 1.4rem' }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 700, color: '#1B5E35', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 13.5, color: '#4a4a4a', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                {item.detail && <p style={{ fontSize: 13.5, color: '#1B5E35', fontWeight: 600, margin: '6px 0 0' }}>{item.detail}</p>}
              </div>
            ))}

            <div style={{ background: '#FBF5E6', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 12, padding: '1.25rem 1.4rem' }}>
              <p style={{ fontSize: 13, color: '#8B6A1F', lineHeight: 1.65, margin: 0 }}>
                <strong>Please note:</strong> Budget Her Way does not provide individual financial advice. For personal financial planning, please consult a certified financial advisor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
