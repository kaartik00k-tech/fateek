import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { title: 'Return & Refund Policy', description: 'Fateek returns and refund policy.' };

function PolicyLayout({ title, lastUpdated, children }: { title: string; lastUpdated: string; children: React.ReactNode }) {
  return (
    <main style={{ paddingTop: 'calc(72px + var(--space-5xl))', paddingBottom: 'var(--space-5xl)', background: 'var(--color-cream)', minHeight: '100dvh' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <span className="label" style={{ display: 'block', marginBottom: 'var(--space-md)' }}>Policies</span>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--color-charcoal)', marginBottom: 'var(--space-sm)', letterSpacing: '-0.025em' }}>{title}</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: 'var(--space-3xl)' }}>Last updated: {lastUpdated}</p>
        <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-3xl)', border: '1px solid var(--color-border-light)', lineHeight: '1.8', color: 'var(--color-charcoal-light)', fontSize: '0.95rem' }}>
          <style>{`
            .pc h2 { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--color-charcoal); margin: var(--space-2xl) 0 var(--space-md); }
            .pc p { margin-bottom: var(--space-md); }
            .pc a { color: var(--color-green); font-weight: 600; }
          `}</style>
          <div className="pc">{children}</div>
        </div>
      </div>
    </main>
  );
}

export default function ReturnsPolicyPage() {
  return <PolicyLayout title="Return & Refund Policy" lastUpdated="August 2026">
    <p>We want you to be completely satisfied with your Fateek purchase. If you are not happy for any reason, please contact us within the return window outlined below.</p>
    <h2>Return Window</h2>
    <p>You may initiate a return within <strong>[— days]</strong> of delivery. Please ensure the product is unused, in its original sealed condition, and in the original packaging.</p>
    <h2>Non-Returnable Items</h2>
    <p>For hygiene and safety reasons, opened or partially used products cannot be returned unless they were damaged or defective upon receipt.</p>
    <h2>How to Initiate a Return</h2>
    <p>Email us at <a href="mailto:support@fateek.in">support@fateek.in</a> or WhatsApp us with your order ID and a brief description of the issue. Our team will guide you through the return process.</p>
    <h2>Refunds</h2>
    <p>Once your return is received and inspected, we will process a refund to your original payment method within 5–7 business days. Shipping charges are non-refundable unless the return is due to a defect on our part.</p>
    <h2>Damaged or Wrong Items</h2>
    <p>If you received a damaged, defective, or incorrect item, please contact us within 48 hours of delivery with photographic evidence. We will arrange a replacement or full refund at no additional charge.</p>
  </PolicyLayout>;
}
