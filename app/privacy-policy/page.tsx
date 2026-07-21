import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Budget Her Way collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  const updated = 'July 21, 2025';
  return (
    <div>
      <div style={{ background: '#1B5E35', padding: '3.5rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <span style={{ fontSize: 11, color: '#C9A84C', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Legal</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', marginTop: 8, marginBottom: 10 }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>Last updated: {updated}</p>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '3.5rem 1.5rem 5rem' }} className="prose">
        <p>Budget Her Way ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit budgetherway.com.</p>

        <h2>Information We Collect</h2>
        <h3>Information you provide directly</h3>
        <p>When you subscribe to our email newsletter or use our contact form, we collect your name and email address. We use this information only to send you content you have requested and to respond to your messages.</p>

        <h3>Automatically collected information</h3>
        <p>When you visit our website, we automatically collect certain information including your IP address, browser type, operating system, referring URLs, and pages you view. This helps us understand how visitors use our site so we can improve it.</p>

        <h2>Cookies and Analytics</h2>
        <p>We use Google Analytics to understand how visitors interact with Budget Her Way. Google Analytics uses cookies, which are small text files placed on your device. These cookies collect information such as how often you visit the site, what pages you visit, and what other sites you visited before coming to ours.</p>
        <p>You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Send you our email newsletter (only if you have subscribed)</li>
          <li>Respond to your contact form messages</li>
          <li>Analyze site traffic to improve content and user experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>Budget Her Way may use the following third-party services that have their own privacy policies:</p>
        <ul>
          <li><strong>Google Analytics</strong> — website analytics</li>
          <li><strong>Email service providers</strong> — for newsletter delivery</li>
          <li><strong>Affiliate networks</strong> — including Amazon Associates, ShareASale, and others (see our <a href="/affiliate-disclosure">Affiliate Disclosure</a>)</li>
        </ul>

        <h2>Affiliate Links and Third-Party Data</h2>
        <p>Some posts on Budget Her Way contain affiliate links. When you click an affiliate link and make a purchase, the merchant may place a cookie on your browser. We do not share your personal information with affiliate partners directly. Please review the privacy policies of any third-party sites you visit through our links.</p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have rights under applicable privacy laws including GDPR (European Union) and CCPA (California). These rights may include:</p>
        <ul>
          <li>The right to access the personal data we hold about you</li>
          <li>The right to request correction or deletion of your data</li>
          <li>The right to opt out of email communications at any time</li>
          <li>The right to request a copy of your personal data</li>
        </ul>
        <p>To exercise any of these rights, contact us at hello@budgetherway.com.</p>

        <h2>Data Retention</h2>
        <p>We retain your email address for as long as you remain subscribed to our newsletter. You can unsubscribe at any time using the link at the bottom of any email we send. Contact form submissions are retained for a reasonable period to allow us to respond.</p>

        <h2>Children's Privacy</h2>
        <p>Budget Her Way is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:hello@budgetherway.com">hello@budgetherway.com</a> or visit our <a href="/contact">Contact page</a>.</p>
      </div>
    </div>
  );
}
