'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCT } from '@/data/product';
import { useCart } from '@/context/CartContext';
import { formatPrice, formatDiscount } from '@/utils/format';
import styles from './ProductShowcase.module.css';

export default function ProductShowcase() {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(PRODUCT.variants[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const discount = formatDiscount(PRODUCT.mrp, PRODUCT.price);

  const handleAddToCart = () => {
    addItem({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.price,
      mrp: PRODUCT.mrp,
      quantity: qty,
      image: PRODUCT.images[0].src,
      variant: selectedVariant.label,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="product-showcase" className={`section ${styles.section} bg-cream`} aria-labelledby="showcase-heading">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">
            <span className="label">The Product</span>
          </div>
          <h2 id="showcase-heading" className="heading-lg">Meet Your Daily Protein.</h2>
        </div>

        <div className={styles.inner}>
          {/* Images */}
          <div className={`${styles.gallery} reveal`}>
            <div className={styles.mainImg}>
              <Image
                src={PRODUCT.images[0].src}
                alt={PRODUCT.images[0].alt}
                fill
                className={styles.img}
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </div>
            <div className={styles.thumbRow}>
              {PRODUCT.images.map((img, i) => (
                <div key={i} className={styles.thumb}>
                  <Image src={img.src} alt={img.alt} fill className={styles.img} sizes="120px" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className={`${styles.info} reveal reveal-delay-2`}>
            <span className="badge badge-green">{PRODUCT.tagline}</span>
            <h3 className={styles.name}>{PRODUCT.name}</h3>
            <p className={styles.desc}>{PRODUCT.shortDescription}</p>

            {/* Price */}
            <div className={styles.pricing}>
              <span className={styles.price}>{formatPrice(PRODUCT.price)}</span>
              <span className={styles.mrp}>{formatPrice(PRODUCT.mrp)}</span>
              <span className="badge badge-gold">{discount}% OFF</span>
            </div>

            {/* Serving info */}
            <div className={styles.specRow}>
              <div className={styles.spec}>
                <span className={styles.specLabel}>Net Qty</span>
                <span className={styles.specValue}>{PRODUCT.netQuantity}</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specLabel}>Protein / Serving</span>
                <span className={styles.specValue}>{PRODUCT.proteinPerServing}</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specLabel}>Servings</span>
                <span className={styles.specValue}>{PRODUCT.servingsPerContainer}</span>
              </div>
            </div>

            {/* Variant */}
            <div className={styles.variantGroup}>
              <p className={styles.variantLabel}>Flavour</p>
              <div className={styles.variants}>
                {PRODUCT.variants.map((v) => (
                  <button
                    key={v.id}
                    className={`${styles.variantBtn} ${selectedVariant.id === v.id ? styles.variantActive : ''} ${!v.available ? styles.variantDisabled : ''}`}
                    onClick={() => v.available && setSelectedVariant(v)}
                    disabled={!v.available}
                    aria-pressed={selectedVariant.id === v.id}
                  >
                    {v.label}
                    {!v.available && <span className={styles.oos}>Out of stock</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + Add to Cart */}
            <div className={styles.addRow}>
              <div className={styles.qtyWrap}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)} aria-label="Increase">+</button>
              </div>
              <button
                className={`btn btn-primary ${styles.addBtn} ${added ? styles.addedState : ''}`}
                onClick={handleAddToCart}
              >
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            <Link href={`/product/${PRODUCT.slug}`} className="btn btn-outline btn-full">
              Buy Now — Full Product Page
            </Link>

            <p className={styles.secure}>
              🔒 Secure Checkout &nbsp;·&nbsp; Free shipping on orders above ₹999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
