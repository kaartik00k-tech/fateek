'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const bg = heroRef.current.querySelector(`.${styles.bgImage}`) as HTMLElement;
      if (bg) bg.style.transform = `translateY(${scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} aria-label="Hero">
      {/* Background */}
      <div className={styles.bgWrapper}>
        <Image
          src="/images/botanical-bg.png"
          alt=""
          fill
          className={styles.bgImage}
          priority
          sizes="100vw"
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Content */}
        <div className={styles.content}>
          <div className={`label ${styles.label} reveal`}>
            Premium Ayurvedic Protein
          </div>
          <h1 className={`${styles.headline} reveal reveal-delay-1`}>
            Ancient Wisdom.<br />
            <span className={styles.headlineAccent}>Modern Protein.</span>
          </h1>
          <p className={`body-lg ${styles.sub} reveal reveal-delay-2`}>
            Premium Ayurvedic-inspired protein crafted for your everyday fitness and wellness journey.
          </p>
          <div className={`${styles.ctas} reveal reveal-delay-3`}>
            <Link href="/product/fateek-protein" className="btn btn-primary btn-lg">
              Shop Now
            </Link>
            <Link href="#product-showcase" className="btn btn-outline btn-lg">
              Discover the Protein
            </Link>
          </div>
        </div>

        {/* Product Image */}
        <div className={`${styles.productImageWrap} reveal reveal-delay-2`}>
          <div className={styles.productGlow} />
          <Image
            src="/images/product-hero.png"
            alt="Fateek Ayurvedic Protein"
            width={500}
            height={600}
            className={styles.productImage}
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
