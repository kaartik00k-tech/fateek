'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export default function Header() {
  const { itemCount, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/product/fateek-protein', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Fateek</span>
          <span className={styles.logoSub}>by nature. for life.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.cartBtn}
            onClick={() => toggleCart()}
            aria-label={`Open cart, ${itemCount} item${itemCount !== 1 ? 's' : ''}`}
          >
            <CartIcon />
            {itemCount > 0 && (
              <span className={styles.cartBadge} aria-live="polite">
                {itemCount}
              </span>
            )}
          </button>

          <Link href="/product/fateek-protein" className={`btn btn-primary btn-sm ${styles.shopBtn}`}>
            Shop Now
          </Link>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={mobileOpen ? styles.hamLineOpen1 : styles.hamLine} />
            <span className={mobileOpen ? styles.hamLineOpen2 : styles.hamLine} />
            <span className={mobileOpen ? styles.hamLineOpen3 : styles.hamLine} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/product/fateek-protein"
          className={`btn btn-primary btn-full`}
          onClick={() => setMobileOpen(false)}
        >
          Shop Now
        </Link>
      </div>
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
