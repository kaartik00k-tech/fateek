import React from 'react';
import { PRODUCT } from '@/data/product';
import styles from './BenefitsSection.module.css';

export default function BenefitsSection() {
  return (
    <section className={`section ${styles.section} bg-cream`} aria-labelledby="benefits-heading">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">
            <span className="label">Benefits</span>
          </div>
          <h2 id="benefits-heading" className="heading-lg">
            Protein That Fits Your Lifestyle.
          </h2>
        </div>

        <div className={styles.grid}>
          {PRODUCT.benefits.map((b, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.cardIcon} aria-hidden="true">{b.icon}</div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
