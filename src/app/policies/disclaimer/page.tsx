import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { title: 'Disclaimer', description: 'Fateek product and health disclaimer.' };

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

export default function DisclaimerPage() {
  return <PolicyLayout title="Disclaimer" lastUpdated="August 2026">
    <p><strong>Important:</strong> Fateek products are food supplements intended to support your daily nutritional intake. They are not medicines, medical treatments, or substitutes for professional medical advice.</p>
    <h2>No Medical Claims</h2>
    <p>No statement on this website, product label, or any Fateek communication is intended to diagnose, treat, cure, or prevent any disease, disorder, or health condition. Any such interpretation is expressly disclaimed.</p>
    <h2>Consult a Professional</h2>
    <p>If you have a pre-existing health condition, are pregnant, nursing, or are under medical care, consult a qualified healthcare professional before using any supplement.</p>
    <h2>Individual Results May Vary</h2>
    <p>Results from using Fateek products will vary based on individual factors including diet, lifestyle, age, and exercise habits. No specific outcome is guaranteed.</p>
    <h2>Ingredient and Nutritional Information</h2>
    <p>All ingredient and nutritional information displayed on this website and on product labelling is accurate to the best of our knowledge at the time of publication. Please refer to the product label for the most current and complete information.</p>
    <h2>Ayurvedic References</h2>
    <p>References to Ayurvedic traditions and principles on this website are for contextual and inspirational purposes only. Fateek products are modern nutritional supplements inspired by Ayurvedic wellness philosophy; they are not Ayurvedic medicines under any regulatory definition.</p>
    <h2>Contact</h2>
    <p>If you have concerns about this disclaimer, contact us at <a href="mailto:support@fateek.in">support@fateek.in</a>.</p>
  </PolicyLayout>;
}
