import React from 'react';
import { PRODUCT } from '@/data/product';
import styles from './IngredientsSection.module.css';

export default function IngredientsSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="ingredients-heading">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">
            <span className="label">Ingredients</span>
          </div>
          <h2 id="ingredients-heading" className="heading-lg">
            Know What Goes Into Your Protein.
          </h2>
          <p className="body-md" style={{ marginTop: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
            All ingredient information will be populated with verified, brand-supplied data before launch. No invented claims or unofficial names are shown.
          </p>
        </div>

        <div className={styles.grid}>
          {PRODUCT.ingredients.map((ing, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.cardNum} aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.cardBadge}>{ing.role}</div>
              <h3 className={styles.cardName}>{ing.name}</h3>
              <p className={styles.cardDesc}>{ing.description}</p>
            </div>
          ))}

          <div className={`${styles.card} ${styles.comingSoon} reveal reveal-delay-4`}>
            <div className={styles.comingSoonInner}>
              <span className={styles.comingSoonIcon}>🔍</span>
              <p className={styles.comingSoonText}>Full ingredient list coming soon</p>
              <p className={styles.comingSoonSub}>
                We believe in full transparency. Every ingredient will be listed with its verified role and source before this product goes live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
