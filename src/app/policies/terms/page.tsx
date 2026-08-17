import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { title: 'Terms & Conditions', description: 'Fateek terms and conditions of use.' };

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

export default function TermsPage() {
  return <PolicyLayout title="Terms & Conditions" lastUpdated="August 2026">
    <p>By using the Fateek website or placing an order, you agree to these Terms and Conditions. Please read them carefully.</p>
    <h2>Use of This Website</h2>
    <p>This website is intended for personal, non-commercial use. You may not reproduce, distribute, or commercially exploit any content from this website without written permission from Fateek.</p>
    <h2>Orders and Pricing</h2>
    <p>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. We reserve the right to modify prices at any time. Once an order is confirmed, the price at the time of purchase applies.</p>
    <h2>Payment</h2>
    <p>We accept UPI, credit/debit cards, and net banking via our secure payment gateway. By completing a purchase, you confirm that the payment details provided are accurate and authorised.</p>
    <h2>Intellectual Property</h2>
    <p>All content on this website, including text, images, branding, and design, is the property of Fateek and is protected under applicable intellectual property laws.</p>
    <h2>Limitation of Liability</h2>
    <p>To the maximum extent permitted by law, Fateek shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</p>
    <h2>Governing Law</h2>
    <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.</p>
    <h2>Changes to Terms</h2>
    <p>We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
    <h2>Contact</h2>
    <p>For questions about these terms, email <a href="mailto:support@fateek.in">support@fateek.in</a>.</p>
  </PolicyLayout>;
}
