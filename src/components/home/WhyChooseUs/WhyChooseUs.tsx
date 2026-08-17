import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="why-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Image side */}
          <div className={`${styles.imageWrap} reveal`}>
            <Image
              src="/images/botanical-bg.png"
              alt="Ayurvedic botanicals and herbs"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.imageBadge}>
              <span className={styles.badgeEmoji}>🌿</span>
              <span className={styles.badgeText}>Since Ancient India</span>
            </div>
          </div>

          {/* Content side */}
          <div className={`${styles.content} reveal reveal-delay-2`}>
            <div className="section-label">
              <span className="label">Our Philosophy</span>
            </div>
            <h2 id="why-heading" className="heading-lg">
              Where Ayurveda Meets Modern Nutrition.
            </h2>
            <p className="body-lg" style={{ marginTop: 'var(--space-xl)' }}>
              India has thousands of years of wisdom on how to nourish the body. Fateek takes that heritage seriously, weaving together traditional Indian wellness inspiration with contemporary protein science.
            </p>
            <p className="body-md" style={{ marginTop: 'var(--space-lg)', color: 'var(--color-text-muted)' }}>
              The result isn't a medicine or a cure — it's a premium protein product that reflects a modern understanding of daily nutrition, designed to be a meaningful part of your wellness routine.
            </p>
            <div className={styles.pillars}>
              {[
                { label: 'Tradition-Informed', desc: 'Rooted in the principles of Ayurvedic wellness.' },
                { label: 'Science-Backed', desc: 'Formulated with modern nutritional understanding.' },
                { label: 'Transparently Made', desc: 'No hidden claims, no inflated promises.' },
              ].map((p) => (
                <div key={p.label} className={styles.pillar}>
                  <div className={styles.pillarDot} aria-hidden="true" />
                  <div>
                    <strong className={styles.pillarLabel}>{p.label}</strong>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
