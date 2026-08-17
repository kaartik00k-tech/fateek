'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order') || 'FTK00000000';

  return (
    <main style={{ paddingTop: 'calc(72px + var(--space-5xl))', paddingBottom: 'var(--space-5xl)', minHeight: '100dvh', background: 'var(--color-cream)' }}>
      <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: 'var(--space-xl)' }}>🎉</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--color-charcoal)', marginBottom: 'var(--space-lg)' }}>
          Order Placed Successfully!
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, marginBottom: 'var(--space-xl)' }}>
          Thank you for choosing Fateek. Your order <strong>{orderId}</strong> has been placed and is being processed. You will receive an email confirmation and tracking details shortly.
        </p>

        <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-2xl)', border: '1px solid var(--color-border-light)', marginBottom: 'var(--space-2xl)', textAlign: 'left' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-green)', marginBottom: 'var(--space-lg)' }}>
            What Happens Next?
          </h2>
          {[
            { step: '1', label: 'Order Confirmed', desc: 'You\'ll receive a confirmation on your email.' },
            { step: '2', label: 'Processing & Packing', desc: 'Your order is being carefully packed.' },
            { step: '3', label: 'Out for Delivery', desc: 'A tracking link will be sent to you.' },
            { step: '4', label: 'Delivered', desc: 'Your Fateek Protein arrives at your door.' },
          ].map((s) => (
            <div key={s.step} style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-md)', alignItems: 'flex-start' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--color-green-pale)', color: 'var(--color-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{s.step}</div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-charcoal)', marginBottom: 2 }}>{s.label}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/track-order" className="btn btn-primary">Track Your Order</Link>
          <Link href="/" className="btn btn-outline">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div style={{ paddingTop: '200px', textAlign: 'center' }}>Loading...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
