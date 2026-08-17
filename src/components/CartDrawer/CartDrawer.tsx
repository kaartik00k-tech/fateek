'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';
import { formatPrice } from '@/utils/format';

export default function CartDrawer() {
  const { state, removeItem, updateQty, toggleCart, subtotal, discount, total, shipping, applyCoupon, removeCoupon } = useCart();
  const [couponInput, setCouponInput] = useState('');
  const [couponMsg, setCouponMsg] = useState<{ text: string; success: boolean } | null>(null);

  const handleCoupon = () => {
    if (state.coupon) {
      removeCoupon();
      setCouponMsg(null);
      setCouponInput('');
      return;
    }
    const result = applyCoupon(couponInput);
    setCouponMsg({ text: result.message, success: result.success });
    if (result.success) setCouponInput('');
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${state.isOpen ? styles.overlayVisible : ''}`}
        onClick={() => toggleCart(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`${styles.drawer} ${state.isOpen ? styles.drawerOpen : ''}`}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className={styles.drawerHead}>
          <h2 className={styles.drawerTitle}>Your Cart</h2>
          <button className={styles.closeBtn} onClick={() => toggleCart(false)} aria-label="Close cart">
            <CloseIcon />
          </button>
        </div>

        {state.items.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🛒</div>
            <p className={styles.emptyText}>Your cart is empty</p>
            <Link href="/product/fateek-protein" className="btn btn-primary" onClick={() => toggleCart(false)}>
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className={styles.items}>
              {state.items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className={styles.item}>
                  <div className={styles.itemImg}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemVariant}>{item.variant}</p>
                    <div className={styles.itemBottom}>
                      <div className={styles.qtyCtrl}>
                        <button onClick={() => updateQty(item.id, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, item.quantity + 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <p className={styles.itemPrice}>{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
                    <CloseIcon size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* Coupon */}
            <div className={styles.coupon}>
              {state.coupon ? (
                <div className={styles.couponApplied}>
                  <span>🎉 <strong>{state.coupon}</strong> applied — {state.couponDiscount}% off</span>
                  <button onClick={handleCoupon} className={styles.removeCoupon}>Remove</button>
                </div>
              ) : (
                <div className={styles.couponInput}>
                  <input
                    type="text"
                    className="input"
                    placeholder="Coupon code"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCoupon()}
                  />
                  <button className="btn btn-outline btn-sm" onClick={handleCoupon}>
                    Apply
                  </button>
                </div>
              )}
              {couponMsg && (
                <p className={couponMsg.success ? styles.couponSuccess : styles.couponError}>
                  {couponMsg.text}
                </p>
              )}
            </div>

            {/* Summary */}
            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className={`${styles.summaryRow} ${styles.summaryDiscount}`}>
                  <span>Discount</span>
                  <span>−{formatPrice(discount)}</span>
                </div>
              )}
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className={styles.free}>FREE</span> : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className={styles.freeShipNote}>
                  Add {formatPrice(999 - subtotal)} more for free shipping
                </p>
              )}
              <hr className="divider" />
              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            {/* Checkout */}
            <div className={styles.checkoutSection}>
              <Link href="/checkout" className="btn btn-primary btn-full btn-lg" onClick={() => toggleCart(false)}>
                Proceed to Checkout
              </Link>
              <Link href="/cart" className={styles.viewCart} onClick={() => toggleCart(false)}>
                View Cart
              </Link>
              <p className={styles.secure}>🔒 Secure checkout · UPI · Cards · Net Banking</p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

function CloseIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
