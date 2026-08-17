'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ paddingTop: 'calc(72px + var(--space-5xl))', paddingBottom: 'var(--space-5xl)', background: 'var(--color-cream)', minHeight: '100dvh' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start', maxWidth: '1000px' }}>
        {/* Info */}
        <div>
          <div className="section-label"><span className="label">Get in Touch</span></div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '-0.025em', color: 'var(--color-charcoal)', marginBottom: 'var(--space-xl)' }}>
            We're Here to Help.
          </h1>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-2xl)' }}>
            Have a question about Fateek Protein, your order, or anything else? We'd love to hear from you.
          </p>

          {[
            { icon: '💬', label: 'WhatsApp', value: 'Chat with us instantly', href: 'https://wa.me/91XXXXXXXXXX', external: true },
            { icon: '📧', label: 'Email', value: 'support@fateek.in', href: 'mailto:support@fateek.in', external: false },
          ].map((c) => (
            <a key={c.label} href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined}
              style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)', background: 'var(--color-white)', marginBottom: 'var(--space-md)', transition: 'all 250ms ease', textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-green)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-light)'; }}
            >
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{c.icon}</span>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--color-charcoal)', fontSize: '0.9rem' }}>{c.label}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-green)' }}>{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-2xl)', border: '1px solid var(--color-border-light)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>✅</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--color-charcoal)', marginBottom: 'var(--space-md)' }}>Message Sent!</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--color-charcoal)' }}>Send Us a Message</h2>
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Full name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
                { id: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '+91 9876543210' },
              ].map((f) => (
                <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                  <label className="label-text" htmlFor={f.id}>{f.label}</label>
                  <input id={f.id} name={f.id} type={f.type} className="input" placeholder={f.placeholder} value={(form as any)[f.id]} onChange={handleChange} required={f.id !== 'phone'} />
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                <label className="label-text" htmlFor="message">Message *</label>
                <textarea id="message" name="message" className="input" rows={4} placeholder="How can we help?" value={form.message} onChange={handleChange} required style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn btn-primary btn-full btn-lg">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
