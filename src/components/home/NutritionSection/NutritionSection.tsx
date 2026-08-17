import React from 'react';
import { PRODUCT } from '@/data/product';
import styles from './NutritionSection.module.css';

export default function NutritionSection() {
  return (
    <section className={`section ${styles.section} bg-cream`} aria-labelledby="nutrition-heading">
      <div className="container">
        <div className={styles.inner}>
          <div className={`${styles.content} reveal`}>
            <div className="section-label">
              <span className="label">Nutrition Facts</span>
            </div>
            <h2 id="nutrition-heading" className="heading-lg">
              Transparent Nutrition, Every Serving.
            </h2>
            <p className="body-md" style={{ marginTop: 'var(--space-lg)' }}>
              The nutrition table below will be populated with exact values from the verified product label. We only display accurate, lab-confirmed data — never estimates.
            </p>
            <div className={styles.noteBox}>
              <span className={styles.noteIcon}>📋</span>
              <p className={styles.noteText}>
                Exact nutrition values pending final product label verification. All figures displayed at launch will be accurate per serving.
              </p>
            </div>
          </div>

          <div className={`${styles.tableWrap} reveal reveal-delay-2`}>
            <div className={styles.tableCard}>
              <div className={styles.tableHeader}>
                <h3 className={styles.tableTitle}>Nutrition Facts</h3>
                <p className={styles.tableSubtitle}>Per Serving (— g) · Servings: —</p>
              </div>
              <div className={styles.tableDividerThick} />
              <div className={styles.tableBody}>
                {PRODUCT.nutrition.map((row, i) => (
                  <div
                    key={i}
                    className={`${styles.tableRow} ${row.highlight ? styles.tableRowHighlight : ''} ${row.indent ? styles.tableRowIndent : ''} ${row.isHeader ? styles.tableRowHeader : ''}`}
                  >
                    <span className={styles.rowLabel}>{row.label}</span>
                    <span className={styles.rowValue}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.tableDividerThick} />
              <p className={styles.tableFooter}>
                *% Daily values are based on a 2,000 kcal diet. Your daily values may be higher or lower depending on your caloric needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
