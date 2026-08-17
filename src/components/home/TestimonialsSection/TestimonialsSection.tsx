import React from 'react';
import { PRODUCT } from '@/data/product';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const hasTestimonials = PRODUCT.testimonials.length > 0;

  return (
    <section className={`section ${styles.section}`} aria-labelledby="testimonials-heading">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">
            <span className="label">Reviews</span>
          </div>
          <h2 id="testimonials-heading" className="heading-lg">
            Loved By People Who Take Their Wellness Seriously.
          </h2>
        </div>

        {!hasTestimonials ? (
          <div className={styles.empty}>
            <div className={styles.emptyStars} aria-hidden="true">
              {'★★★★★'}
            </div>
            <p className={styles.emptyTitle}>Reviews Coming Soon</p>
            <p className={styles.emptyText}>
              We only display genuine, verified customer reviews. This section will be populated with real feedback once the product launches. Be the first to try Fateek and share your experience.
            </p>
            <a href="/product/fateek-protein" className="btn btn-primary">
              Be the First to Try
            </a>
          </div>
        ) : (
          <div className={styles.grid}>
            {PRODUCT.testimonials.map((t, i) => (
              <div key={i} className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}>
                <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} style={{ color: j < t.rating ? 'var(--color-gold)' : 'var(--color-border)' }}>★</span>
                  ))}
                </div>
                <p className={styles.review}>"{t.review}"</p>
                <div className={styles.reviewer}>
                  <div className={styles.reviewerInitial}>{t.name[0]}</div>
                  <div>
                    <p className={styles.reviewerName}>{t.name}</p>
                    {t.verified && <p className={styles.verified}>✓ Verified Purchase</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
