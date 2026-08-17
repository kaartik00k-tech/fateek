'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { PRODUCT } from '@/data/product';

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main style={{ paddingTop: 'calc(72px + var(--space-5xl))', paddingBottom: 'var(--space-5xl)', background: 'var(--color-cream)', minHeight: '100dvh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-label"><span className="label">Help</span></div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.025em', color: 'var(--color-charcoal)', marginBottom: 'var(--space-xl)' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-3xl)', lineHeight: 1.7 }}>
          Have a question about Fateek? Find answers below. Can't find what you're looking for? <a href="/contact" style={{ color: 'var(--color-green)', fontWeight: 600 }}>Contact us</a>.
        </p>

        <div>
          {PRODUCT.faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--color-border-light)', ...(i === 0 ? { borderTop: '1px solid var(--color-border-light)' } : {}) }}>
              <button
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-lg)', padding: 'var(--space-xl) 0', textAlign: 'left', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: open === i ? 'var(--color-green)' : 'var(--color-charcoal)', transition: 'color 150ms ease' }}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span style={{ fontSize: '1.4rem', color: 'var(--color-green)', flexShrink: 0, width: 24, textAlign: 'center' }}>{open === i ? '−' : '+'}</span>
              </button>
              <div style={{ overflow: 'hidden', maxHeight: open === i ? '400px' : '0', transition: 'max-height 400ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
                <p style={{ paddingBottom: 'var(--space-xl)', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--color-charcoal-light)' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-4xl)', background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-2xl)', border: '1px solid var(--color-border-light)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--color-charcoal)', marginBottom: 'var(--space-md)' }}>Still Have Questions?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)', fontSize: '0.9rem' }}>Our team is happy to help.</p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            <a href="mailto:support@fateek.in" className="btn btn-outline">Email Us</a>
          </div>
        </div>
      </div>
    </main>
  );
}
