'use client';

import React, { useState } from 'react';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <main style={{ paddingTop: 'calc(72px + var(--space-5xl))', paddingBottom: 'var(--space-5xl)', minHeight: '100dvh', background: 'var(--color-cream)' }}>
      <div className="container" style={{ maxWidth: '560px' }}>
        <div className="section-label"><span className="label">Order Tracking</span></div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--color-charcoal)', marginBottom: 'var(--space-xl)', letterSpacing: '-0.02em' }}>
          Track Your Order
        </h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-3xl)', lineHeight: 1.7 }}>
          Enter your order ID and email address to track your Fateek delivery.
        </p>

        {!submitted ? (
          <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-2xl)', border: '1px solid var(--color-border-light)', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              <label className="label-text" htmlFor="track-order">Order ID</label>
              <input id="track-order" className="input" value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="e.g. FTK12345678" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              <label className="label-text" htmlFor="track-email">Email Address</label>
              <input id="track-email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" />
            </div>
            <button className="btn btn-primary btn-full btn-lg" onClick={() => orderId && email && setSubmitted(true)}>
              Track Order
            </button>
          </div>
        ) : (
          <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-2xl)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)', padding: 'var(--space-lg)', background: 'var(--color-green-pale)', borderRadius: 'var(--radius-lg)' }}>
              <span style={{ fontSize: '1.5rem' }}>📦</span>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--color-green)' }}>Order: {orderId}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-green-muted)' }}>Status: Processing</p>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
              Your order is being processed. Tracking details will be sent to <strong>{email}</strong> once your order is dispatched.
            </p>
            <button className="btn btn-ghost" style={{ marginTop: 'var(--space-lg)' }} onClick={() => setSubmitted(false)}>
              Track another order
            </button>
          </div>
        )}

        <p style={{ marginTop: 'var(--space-xl)', fontSize: '0.85rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
          Need help? <a href="https://wa.me/91XXXXXXXXXX" style={{ color: 'var(--color-green)', fontWeight: 600 }}>WhatsApp us</a> or email <a href="mailto:support@fateek.in" style={{ color: 'var(--color-green)', fontWeight: 600 }}>support@fateek.in</a>
        </p>
      </div>
    </main>
  );
}
