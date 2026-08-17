import React from 'react';
import { PRODUCT } from '@/data/product';
import styles from './AudienceSection.module.css';

export default function AudienceSection() {
  return (
    <section className={`section ${styles.section} bg-cream`} aria-labelledby="audience-heading">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">
            <span className="label">Who Is It For</span>
          </div>
          <h2 id="audience-heading" className="heading-lg">
            For Every Kind of Wellness Journey.
          </h2>
        </div>

        <div className={styles.grid}>
          {PRODUCT.targetAudience.map((a, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">{a.icon}</span>
                <h3 className={styles.title}>{a.title}</h3>
              </div>
              <p className={styles.desc}>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
