import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Budget Her Way participates in affiliate marketing programs. Learn how we earn commissions and how that affects our content.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div>
      <div style={{ background: '#1B5E35', padding: '3.5rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <span style={{ fontSize: 11, color: '#C9A84C', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Legal</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', marginTop: 8 }}>Affiliate Disclosure</h1>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '3.5rem 1.5rem 5rem' }} className="prose">

        <div style={{ background: '#FBF5E6', border: '1px solid rgba(201,168,76,0.35)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontSize: 15, color: '#8B6A1F', lineHeight: 1.7 }}>
            <strong>Short version:</strong> Some links on Budget Her Way are affiliate links. If you click and buy, we may earn a small commission at no extra cost to you. We only recommend things we genuinely believe in.
          </p>
        </div>

        <h2>What Is an Affiliate Link?</h2>
        <p>An affiliate link is a special URL that contains a tracking code. When you click one of these links and make a purchase, the retailer or service provider knows the sale came from Budget Her Way, and we receive a small commission as a thank-you.</p>
        <p>You pay the same price whether you use our affiliate link or go directly to the website. Sometimes you may even receive a discount through our link.</p>

        <h2>FTC Disclosure Compliance</h2>
        <p>In accordance with the Federal Trade Commission (FTC) guidelines, Budget Her Way discloses that this site participates in affiliate marketing programs. Posts that contain affiliate links include a notice at the top of the article stating: "This post may contain affiliate links."</p>

        <h2>Affiliate Programs We Participate In</h2>
        <p>Budget Her Way may be affiliated with the following programs, among others:</p>
        <ul>
          <li><strong>Amazon Associates</strong> — "As an Amazon Associate I earn from qualifying purchases."</li>
          <li><strong>ShareASale</strong> — various financial products and tools</li>
          <li><strong>Impact Radius</strong> — financial services and software</li>
          <li>Individual brand affiliate programs for budgeting tools, financial courses, and related products</li>
        </ul>

        <h2>Our Promise to You</h2>
        <p>Earning a commission never influences what we recommend. Our editorial opinions are our own. If we recommend a tool, a book, or a service on Budget Her Way, it is because we genuinely believe it will help you.</p>
        <p>We do not accept payment to feature products we would not otherwise recommend. We do not write sponsored content disguised as organic reviews. What you read on this site reflects honest experience and research.</p>

        <h2>Prices and Availability</h2>
        <p>Prices, features, and availability of products and services linked from Budget Her Way may change at any time. We make our best effort to keep information current, but we cannot guarantee accuracy. Always check the retailer's website for the most up-to-date information before making a purchase.</p>

        <h2>Not Financial Advice</h2>
        <p>Content on Budget Her Way is for informational and educational purposes only. Nothing on this site should be construed as professional financial, legal, or tax advice. Please consult a qualified professional before making significant financial decisions.</p>

        <h2>Questions?</h2>
        <p>If you have questions about our affiliate relationships or disclosure practices, please <a href="/contact">contact us</a>.</p>
      </div>
    </div>
  );
}
