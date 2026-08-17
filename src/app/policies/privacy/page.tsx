import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'Fateek privacy policy — how we collect and use your data.' };

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

export default function PrivacyPolicyPage() {
  return <PolicyLayout title="Privacy Policy" lastUpdated="August 2026">
    <p>Fateek ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.</p>
    <h2>Information We Collect</h2>
    <p>We collect information you provide directly, including your name, email address, phone number, and shipping address when you place an order or contact us. We also collect usage data such as pages visited and browsing behaviour via cookies and analytics tools.</p>
    <h2>How We Use Your Information</h2>
    <p>We use your data to process orders, deliver products, send order confirmations and tracking updates, respond to queries, and improve our website and services. We do not sell your personal information to third parties.</p>
    <h2>Payment Security</h2>
    <p>Payments are processed through a secure third-party gateway (e.g., Razorpay). Fateek does not store your card or UPI details on our servers.</p>
    <h2>Cookies</h2>
    <p>We use essential and analytics cookies to operate the site and understand how visitors use it. You may disable cookies in your browser settings, though this may affect site functionality.</p>
    <h2>Data Retention</h2>
    <p>We retain your data for as long as necessary to fulfill orders and comply with legal obligations.</p>
    <h2>Your Rights</h2>
    <p>You may request access to, correction of, or deletion of your personal data by emailing <a href="mailto:support@fateek.in">support@fateek.in</a>.</p>
    <h2>Contact</h2>
    <p>If you have privacy concerns, contact us at <a href="mailto:support@fateek.in">support@fateek.in</a>.</p>
  </PolicyLayout>;
}
