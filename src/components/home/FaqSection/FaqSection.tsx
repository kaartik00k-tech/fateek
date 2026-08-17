'use client';

import React, { useState } from 'react';
import { PRODUCT } from '@/data/product';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`section ${styles.section} bg-cream`} aria-labelledby="faq-heading">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">
            <span className="label">FAQ</span>
          </div>
          <h2 id="faq-heading" className="heading-lg">
            Common Questions, Honest Answers.
          </h2>
        </div>

        <div className={styles.list}>
          {PRODUCT.faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                id={`faq-q-${i}`}
                aria-controls={`faq-a-${i}`}
              >
                <span>{faq.q}</span>
                <span className={styles.icon} aria-hidden="true">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                className={styles.answer}
                style={open === i ? { maxHeight: '400px' } : { maxHeight: '0' }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
