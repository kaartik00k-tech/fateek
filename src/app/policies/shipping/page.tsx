import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { title: 'Shipping Policy', description: 'Fateek shipping and delivery information.' };

export default function ShippingPolicyPage() {
  return <PolicyLayout title="Shipping Policy" lastUpdated="August 2026">
    <p>We process orders within 1–2 business days. Delivery typically takes 3–7 business days across India, depending on your location.</p>
    <h2>Shipping Charges</h2>
    <p>Orders above ₹999 qualify for <strong>free shipping</strong>. A flat shipping fee of ₹79 is applied to orders below ₹999.</p>
    <h2>Tracking</h2>
    <p>Once your order is dispatched, you will receive an email and/or SMS with a tracking link. You can also track your order on our <a href="/track-order">order tracking page</a>.</p>
    <h2>Delivery Partners</h2>
    <p>We ship via reputable courier partners across India. Delivery timelines may vary during peak periods or due to factors outside our control.</p>
    <h2>Non-Deliverable Locations</h2>
    <p>We currently ship to most PIN codes across India. If we are unable to deliver to your location, we will notify you promptly and arrange a full refund.</p>
    <h2>Contact</h2>
    <p>For shipping-related queries, email us at <a href="mailto:support@fateek.in">support@fateek.in</a> or WhatsApp us.</p>
  </PolicyLayout>;
}

function PolicyLayout({ title, lastUpdated, children }: { title: string; lastUpdated: string; children: React.ReactNode }) {
  return (
    <main style={{ paddingTop: 'calc(72px + var(--space-5xl))', paddingBottom: 'var(--space-5xl)', background: 'var(--color-cream)', minHeight: '100dvh' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <span className="label" style={{ display: 'block', marginBottom: 'var(--space-md)' }}>Policies</span>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--color-charcoal)', marginBottom: 'var(--space-sm)', letterSpacing: '-0.025em' }}>{title}</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: 'var(--space-3xl)' }}>Last updated: {lastUpdated}</p>
        <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-3xl)', border: '1px solid var(--color-border-light)', lineHeight: '1.8', color: 'var(--color-charcoal-light)', fontSize: '0.95rem' }}>
          <style>{`
            .policy-content h2 { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--color-charcoal); margin: var(--space-2xl) 0 var(--space-md); letter-spacing: 0.02em; }
            .policy-content p { margin-bottom: var(--space-md); }
            .policy-content a { color: var(--color-green); font-weight: 600; }
          `}</style>
          <div className="policy-content">{children}</div>
        </div>
      </div>
    </main>
  );
}
