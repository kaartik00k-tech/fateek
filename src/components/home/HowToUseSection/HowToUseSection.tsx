import React from 'react';
import { PRODUCT } from '@/data/product';
import styles from './HowToUseSection.module.css';

export default function HowToUseSection() {
  return (
    <section className={`section ${styles.section} bg-green`} aria-labelledby="how-heading">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">
            <span className="label" style={{ color: 'rgba(255,255,255,0.6)' }}>Usage</span>
          </div>
          <h2 id="how-heading" className="heading-lg text-white">
            Make It Part of Your Routine.
          </h2>
        </div>

        <div className={styles.steps}>
          {PRODUCT.howToUse.map((step, i) => (
            <div key={step.step} className={`${styles.step} reveal reveal-delay-${i + 1}`}>
              <div className={styles.stepNum} aria-hidden="true">
                {String(step.step).padStart(2, '0')}
              </div>
              <div className={styles.stepIcon} aria-hidden="true">{step.icon}</div>
              <h3 className={styles.stepLabel}>{step.label}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              {i < PRODUCT.howToUse.length - 1 && (
                <div className={styles.connector} aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
