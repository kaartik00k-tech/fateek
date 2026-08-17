import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Fateek — Our Story',
  description: 'Learn about Fateek, the premium Ayurvedic-inspired protein brand built for modern India.',
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ background: 'var(--color-green)', padding: 'var(--space-5xl) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '720px' }}>
          <span className="label" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Story</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, color: 'var(--color-white)', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 'var(--space-xl) 0' }}>
            Built for Modern India.<br />Inspired by Ancient Wisdom.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto' }}>
            Fateek was born from a simple belief: that modern nutrition and traditional Indian wellness don't have to be at odds with each other.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-cream">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-label"><span className="label">Our Mission</span></div>
          <h2 className="heading-lg" style={{ marginBottom: 'var(--space-xl)' }}>A Better Protein. A Better Routine.</h2>
          <p className="body-lg" style={{ marginBottom: 'var(--space-lg)' }}>
            We started Fateek because we saw a gap in the Indian market. Protein supplements were either cheap, poorly formulated products, or expensive imports that ignored India's own wellness heritage. Neither felt right.
          </p>
          <p className="body-md" style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-text-muted)' }}>
            Fateek is our answer. A premium protein supplement that takes the best of modern nutrition science and pairs it with the philosophy of Ayurveda — not as a gimmick, but as a genuine inspiration. We believe in transparency, quality, and a nutrition routine that feels as good as it works.
          </p>
          <p className="body-md" style={{ color: 'var(--color-text-muted)' }}>
            Our products are designed for real people living real lives — gym-goers, busy professionals, health-conscious families, and fitness beginners. Whatever your wellness journey looks like, Fateek is here to support it.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-beige">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto var(--space-3xl)' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><span className="label">What We Stand For</span></div>
            <h2 className="heading-lg">Our Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-lg)' }}>
            {[
              { icon: '🔍', title: 'Transparency', desc: 'Every ingredient, every claim — backed by facts. We never invent data or make promises we can\'t keep.' },
              { icon: '🌿', title: 'Quality', desc: 'We source ingredients with care and won\'t compromise on what goes into every scoop of Fateek.' },
              { icon: '🏺', title: 'Heritage', desc: 'Respect for India\'s wellness traditions isn\'t a marketing angle for us — it\'s a genuine commitment to a richer way of thinking about nutrition.' },
              { icon: '💚', title: 'Honesty', desc: 'We\'ll never use fake testimonials, inflated claims, or misleading imagery. Just real nutrition, honestly presented.' },
            ].map((v) => (
              <div key={v.title} style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-2xl)', border: '1px solid var(--color-border-light)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-charcoal)', marginBottom: 'var(--space-sm)' }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--color-text-muted)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-green" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, color: 'white', marginBottom: 'var(--space-lg)', letterSpacing: '-0.02em' }}>
            Ready to Try Fateek?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 'var(--space-2xl)' }}>
            Make premium Ayurvedic-inspired protein part of your everyday routine.
          </p>
          <Link href="/product/fateek-protein" className="btn btn-outline-white btn-lg">Shop Now</Link>
        </div>
      </section>
    </main>
  );
}
