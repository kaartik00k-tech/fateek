'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>Fateek</Link>
              <p className={styles.brandDesc}>
                Premium Ayurvedic-inspired protein for your everyday fitness and wellness journey.
                Ancient wisdom, modern nutrition.
              </p>
              <div className={styles.social}>
                <a href="https://instagram.com/fateek" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                  <InstagramIcon />
                </a>
                <a href="https://facebook.com/fateek" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
                  <FacebookIcon />
                </a>
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
                  <WhatsAppIcon />
                </a>
              </div>
            </div>

            {/* Shop */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Shop</h3>
              <ul className={styles.colLinks}>
                <li><Link href="/product/fateek-protein">Fateek Protein</Link></li>
                <li><Link href="/cart">My Cart</Link></li>
                <li><Link href="/track-order">Track Order</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Company</h3>
              <ul className={styles.colLinks}>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Policies</h3>
              <ul className={styles.colLinks}>
                <li><Link href="/policies/shipping">Shipping Policy</Link></li>
                <li><Link href="/policies/returns">Return &amp; Refund</Link></li>
                <li><Link href="/policies/privacy">Privacy Policy</Link></li>
                <li><Link href="/policies/terms">Terms &amp; Conditions</Link></li>
                <li><Link href="/policies/disclaimer">Disclaimer</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Support</h3>
              <ul className={styles.colLinks}>
                <li>
                  <a href="mailto:support@fateek.in">support@fateek.in</a>
                </li>
                <li>
                  <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                    WhatsApp Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>© {year} Fateek. All rights reserved.</p>
            <p className={styles.disclaimer}>
              *These statements have not been evaluated by any regulatory authority. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}
