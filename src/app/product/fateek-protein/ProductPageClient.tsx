'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCT } from '@/data/product';
import { useCart } from '@/context/CartContext';
import { formatPrice, formatDiscount } from '@/utils/format';
import styles from './ProductPage.module.css';

export default function ProductPageClient() {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(PRODUCT.variants[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const discount = formatDiscount(PRODUCT.mrp, PRODUCT.price);

  const handleAdd = () => {
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

  const tabs = ['overview', 'ingredients', 'nutrition', 'directions', 'reviews'];

  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumbList}>
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/product/fateek-protein">Shop</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{PRODUCT.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Above fold */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          {/* Gallery */}
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <Image
                src={PRODUCT.images[activeImage].src}
                alt={PRODUCT.images[activeImage].alt}
                fill
                className={styles.mainImg}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.thumbs}>
              {PRODUCT.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${activeImage === i ? styles.thumbActive : ''}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={img.alt}
                  aria-pressed={activeImage === i}
                >
                  <Image src={img.src} alt={img.alt} fill className={styles.thumbImg} sizes="100px" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className={styles.info}>
            <div className={styles.badges}>
              <span className="badge badge-green">{PRODUCT.tagline}</span>
            </div>

            <h1 className={styles.name}>{PRODUCT.name}</h1>
            <p className={styles.desc}>{PRODUCT.description}</p>

            {/* Pricing */}
            <div className={styles.pricing}>
              <span className={styles.price}>{formatPrice(PRODUCT.price)}</span>
              <span className={styles.mrp}>{formatPrice(PRODUCT.mrp)}</span>
              <span className="badge badge-gold">{discount}% OFF</span>
            </div>

            <p className={styles.taxNote}>Inclusive of all taxes. Free shipping above ₹999.</p>

            {/* Specs */}
            <div className={styles.specs}>
              <div className={styles.spec}>
                <span className={styles.specLabel}>Net Qty</span>
                <span className={styles.specVal}>{PRODUCT.netQuantity}</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specLabel}>Protein/Serving</span>
                <span className={styles.specVal}>{PRODUCT.proteinPerServing}</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specLabel}>Servings</span>
                <span className={styles.specVal}>{PRODUCT.servingsPerContainer}</span>
              </div>
            </div>

            {/* Variant */}
            <div className={styles.variantSection}>
              <p className={styles.variantLabel}>Flavour: <strong>{selectedVariant.label}</strong></p>
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
                    {!v.available && <small className={styles.oos}>Out of stock</small>}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + Add */}
            <div className={styles.addSection}>
              <div className={styles.qty}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity">+</button>
              </div>
              <button
                className={`btn btn-primary ${styles.addBtn} ${added ? styles.added : ''}`}
                onClick={handleAdd}
              >
                {added ? '✓ Added!' : 'Add to Cart'}
              </button>
            </div>

            <button className={`btn btn-outline btn-full ${styles.buyNow}`} onClick={handleAdd}>
              Buy Now
            </button>

            {/* Trust */}
            <div className={styles.trustList}>
              {['🔒 Secure Payment', '🚚 Fast Delivery', '↩️ Easy Returns', '🇮🇳 Made in India'].map((t) => (
                <span key={t} className={styles.trustItem}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className={styles.mobileSticky}>
        <div className={styles.mobileStickyPrice}>{formatPrice(PRODUCT.price)}</div>
        <button className="btn btn-primary" onClick={handleAdd} style={{ flex: 1 }}>
          {added ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>

      {/* Tabs section */}
      <section className={styles.tabs}>
        <div className="container">
          <div className={styles.tabList} role="tablist">
            {tabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={activeTab === t}
                className={`${styles.tab} ${activeTab === t ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'overview' && (
              <div className={styles.overviewGrid}>
                {PRODUCT.benefits.map((b, i) => (
                  <div key={i} className={styles.benefitCard}>
                    <span className={styles.benefitIcon}>{b.icon}</span>
                    <h3 className={styles.benefitTitle}>{b.title}</h3>
                    <p className={styles.benefitDesc}>{b.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className={styles.ingredientList}>
                {PRODUCT.ingredients.map((ing, i) => (
                  <div key={i} className={styles.ingredient}>
                    <div className={styles.ingredientNum}>{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <p className={styles.ingredientName}>{ing.name}</p>
                      <p className={styles.ingredientRole}>{ing.role}</p>
                      <p className={styles.ingredientDesc}>{ing.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className={styles.nutritionWrap}>
                <div className={styles.nutritionCard}>
                  <h3 className={styles.nutritionTitle}>Nutrition Facts</h3>
                  <p className={styles.nutritionSub}>Per Serving ({PRODUCT.servingSize})</p>
                  <hr className="divider" style={{ margin: '12px 0', borderColor: 'rgba(255,255,255,0.3)' }} />
                  {PRODUCT.nutrition.map((row, i) => (
                    <div key={i} className={`${styles.nutritionRow} ${row.highlight ? styles.nutritionHighlight : ''} ${row.indent ? styles.nutritionIndent : ''}`}>
                      <span>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'directions' && (
              <div className={styles.directionsGrid}>
                {PRODUCT.howToUse.map((step) => (
                  <div key={step.step} className={styles.directionCard}>
                    <span className={styles.directionIcon}>{step.icon}</span>
                    <h3 className={styles.directionLabel}>Step {step.step}: {step.label}</h3>
                    <p className={styles.directionDesc}>{step.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className={styles.reviewsEmpty}>
                <p className={styles.reviewsEmptyTitle}>No reviews yet</p>
                <p className={styles.reviewsEmptyText}>Be the first to review Fateek after purchase.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
