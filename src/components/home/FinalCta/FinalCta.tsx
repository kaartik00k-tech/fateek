import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.bg}>
        <Image
          src="/images/botanical-bg.png"
          alt=""
          fill
          className={styles.bgImg}
          sizes="100vw"
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className="label" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Start Today
          </span>
          <h2 id="cta-heading" className={`heading-lg ${styles.heading}`}>
            Upgrade Your Daily<br />Protein Routine.
          </h2>
          <p className={styles.sub}>
            Make better nutrition part of your everyday lifestyle.
          </p>
          <div className={styles.ctas}>
            <Link href="/product/fateek-protein" className="btn btn-outline-white btn-lg">
              Shop Now
            </Link>
          </div>
        </div>

        <div className={styles.productWrap}>
          <Image
            src="/images/product-angle2.png"
            alt="Fateek Ayurvedic Protein"
            width={360}
            height={440}
            className={styles.productImg}
            sizes="(max-width: 768px) 240px, 360px"
          />
        </div>
      </div>
    </section>
  );
}
