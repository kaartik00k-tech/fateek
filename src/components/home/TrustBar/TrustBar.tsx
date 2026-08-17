import React from 'react';
import styles from './TrustBar.module.css';

const ITEMS = [
  { icon: '🌿', label: 'Premium Ingredients' },
  { icon: '🏺', label: 'Ayurvedic-Inspired Formula' },
  { icon: '💪', label: 'Fitness Focused' },
  { icon: '✅', label: 'Quality Tested' },
];

export default function TrustBar() {
  return (
    <section className={styles.bar} aria-label="Trust points">
      <div className="container">
        <ul className={styles.list}>
          {ITEMS.map((item, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
