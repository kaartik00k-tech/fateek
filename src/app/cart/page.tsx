'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';
import styles from './cart.module.css';

export default function CartPage() {
  const { state, removeItem, updateQty, subtotal, discount, total, shipping, applyCoupon, removeCoupon } = useCart();
  const [couponInput, setCouponInput] = React.useState('');
  const [couponMsg, setCouponMsg] = React.useState<{ text: string; success: boolean } | null>(null);

  const handleCoupon = () => {
    if (state.coupon) { removeCoupon(); setCouponMsg(null); setCouponInput(''); return; }
    const r = applyCoupon(couponInput);
    setCouponMsg({ text: r.message, success: r.success });
    if (r.success) setCouponInput('');
  };

  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="heading-lg">Your Cart</h1>
          {state.items.length > 0 && (
            <p className={styles.count}>{state.items.reduce((s, i) => s + i.quantity, 0)} item(s)</p>
          )}
        </div>

        {state.items.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🛒</div>
            <h2 className={styles.emptyTitle}>Your cart is empty</h2>
            <p className={styles.emptyText}>Add Fateek Protein to get started on your wellness journey.</p>
            <Link href="/product/fateek-protein" className="btn btn-primary btn-lg">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className={styles.inner}>
            {/* Items */}
            <div className={styles.items}>
              {state.items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className={styles.item}>
                  <div className={styles.itemImg}>
                    <Image src={item.image} alt={item.name} fill className={styles.img} sizes="100px" />
                  </div>
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemVariant}>{item.variant}</p>
                    <div className={styles.itemPriceRow}>
                      <span className={styles.itemPrice}>{formatPrice(item.price)}</span>
                      <span className={styles.itemMrp}>{formatPrice(item.mrp)}</span>
                    </div>
                  </div>
                  <div className={styles.itemControls}>
                    <div className={styles.qty}>
                      <button onClick={() => updateQty(item.id, item.quantity - 1)} aria-label="Decrease">−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, item.quantity + 1)} aria-label="Increase">+</button>
                    </div>
                    <p className={styles.itemTotal}>{formatPrice(item.price * item.quantity)}</p>
                    <button className={styles.remove} onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className={styles.summary}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>

              {/* Coupon */}
              <div className={styles.couponSection}>
                {state.coupon ? (
                  <div className={styles.couponApplied}>
                    <span>🎉 <strong>{state.coupon}</strong> — {state.couponDiscount}% off applied</span>
                    <button onClick={handleCoupon} className={styles.removeCoupon}>Remove</button>
                  </div>
                ) : (
                  <div className={styles.couponInput}>
                    <input type="text" className="input" placeholder="Enter coupon code" value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleCoupon()} />
                    <button className="btn btn-outline btn-sm" onClick={handleCoupon}>Apply</button>
                  </div>
                )}
                {couponMsg && <p className={couponMsg.success ? styles.success : styles.error}>{couponMsg.text}</p>}
              </div>

              <div className={styles.summaryRows}>
                <div className={styles.row}>
                  <span>Subtotal</span><span>{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className={`${styles.row} ${styles.rowDiscount}`}>
                    <span>Coupon Discount</span><span>−{formatPrice(discount)}</span>
                  </div>
                )}
                <div className={styles.row}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className={styles.free}>FREE</span> : formatPrice(shipping)}</span>
                </div>
                {shipping > 0 && <p className={styles.freeNote}>Add {formatPrice(999 - subtotal)} more for free delivery</p>}
                <hr className="divider" />
                <div className={`${styles.row} ${styles.rowTotal}`}>
                  <span>Total</span><span>{formatPrice(total)}</span>
                </div>
              </div>

              <Link href="/checkout" className="btn btn-primary btn-full btn-lg">
                Proceed to Checkout
              </Link>
              <p className={styles.secure}>🔒 Secure checkout · UPI · Cards · Net Banking</p>
              <Link href="/product/fateek-protein" className={styles.continueShopping}>
                ← Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
