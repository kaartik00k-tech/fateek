'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';
import styles from './checkout.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: string;
}

const STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal',
];

export default function CheckoutPage() {
  const router = useRouter();
  const { state, subtotal, discount, total, shipping, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '', paymentMethod: 'upi',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.includes('@')) e.email = 'Valid email required';
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Valid 10-digit Indian mobile number required';
    if (!form.address.trim()) e.address = 'Address is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.state) e.state = 'State is required';
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = 'Valid 6-digit PIN required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    // Simulate payment gateway integration
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    clearCart();
    const orderId = 'FTK' + Date.now().toString().slice(-8);
    router.push(`/order-confirmation?order=${orderId}`);
  };

  if (state.items.length === 0 && step === 1) {
    return (
      <main className={styles.page}>
        <div className="container">
          <div className={styles.empty}>
            <h1 className="heading-md">Your cart is empty</h1>
            <a href="/product/fateek-protein" className="btn btn-primary btn-lg">Shop Now</a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Checkout</h1>

        <div className={styles.inner}>
          {/* Form */}
          <div className={styles.form}>
            {/* Step indicator */}
            <div className={styles.steps}>
              {['Delivery Info', 'Payment'].map((s, i) => (
                <div key={s} className={`${styles.stepItem} ${step > i + 1 ? styles.stepDone : ''} ${step === i + 1 ? styles.stepActive : ''}`}>
                  <div className={styles.stepCircle}>{step > i + 1 ? '✓' : i + 1}</div>
                  <span>{s}</span>
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Delivery Information</h2>
                <div className={styles.fields}>
                  <div className={styles.fieldGroup}>
                    <label className="label-text" htmlFor="name">Full Name *</label>
                    <input id="name" name="name" className="input" value={form.name} onChange={handleChange} placeholder="Your full name" />
                    {errors.name && <p className={styles.err}>{errors.name}</p>}
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.fieldGroup}>
                      <label className="label-text" htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" className="input" value={form.email} onChange={handleChange} placeholder="you@email.com" />
                      {errors.email && <p className={styles.err}>{errors.email}</p>}
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className="label-text" htmlFor="phone">Phone *</label>
                      <div className={styles.phoneWrap}>
                        <span className={styles.phonePrefix}>+91</span>
                        <input id="phone" name="phone" type="tel" className={`input ${styles.phoneInput}`} value={form.phone} onChange={handleChange} placeholder="9876543210" maxLength={10} />
                      </div>
                      {errors.phone && <p className={styles.err}>{errors.phone}</p>}
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className="label-text" htmlFor="address">Address *</label>
                    <textarea id="address" name="address" className={`input ${styles.textarea}`} value={form.address} onChange={handleChange} placeholder="Flat/House no., Street, Area" rows={3} />
                    {errors.address && <p className={styles.err}>{errors.address}</p>}
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.fieldGroup}>
                      <label className="label-text" htmlFor="city">City *</label>
                      <input id="city" name="city" className="input" value={form.city} onChange={handleChange} placeholder="City" />
                      {errors.city && <p className={styles.err}>{errors.city}</p>}
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className="label-text" htmlFor="state">State *</label>
                      <select id="state" name="state" className="input" value={form.state} onChange={handleChange}>
                        <option value="">Select State</option>
                        {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.state && <p className={styles.err}>{errors.state}</p>}
                    </div>
                    <div className={styles.fieldGroup} style={{ maxWidth: '140px' }}>
                      <label className="label-text" htmlFor="pincode">PIN Code *</label>
                      <input id="pincode" name="pincode" className="input" value={form.pincode} onChange={handleChange} placeholder="400001" maxLength={6} />
                      {errors.pincode && <p className={styles.err}>{errors.pincode}</p>}
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary btn-full btn-lg" style={{ marginTop: 'var(--space-xl)' }} onClick={() => { if (validate()) setStep(2); }}>
                  Continue to Payment →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Payment Method</h2>
                <div className={styles.paymentOptions}>
                  {[
                    { id: 'upi', label: 'UPI (GPay, PhonePe, Paytm)', icon: '📱' },
                    { id: 'card', label: 'Credit / Debit Card', icon: '💳' },
                    { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
                    { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                  ].map((opt) => (
                    <label key={opt.id} className={`${styles.payOpt} ${form.paymentMethod === opt.id ? styles.payOptActive : ''}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={opt.id}
                        checked={form.paymentMethod === opt.id}
                        onChange={handleChange}
                        className={styles.payRadio}
                      />
                      <span className={styles.payIcon}>{opt.icon}</span>
                      <span className={styles.payLabel}>{opt.label}</span>
                    </label>
                  ))}
                </div>

                <div className={styles.payNote}>
                  <p>🔒 Your payment is secured. Fateek does not store card details.</p>
                  <p>You will be redirected to our secure payment gateway (Razorpay) after clicking Place Order.</p>
                </div>

                <div className={styles.actionRow}>
                  <button className="btn btn-outline" onClick={() => setStep(1)}>← Back</button>
                  <button
                    className={`btn btn-primary btn-lg ${styles.placeOrder}`}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className={styles.spinner} />
                    ) : `Place Order · ${formatPrice(total)}`}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary sidebar */}
          <div className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Order Summary</h2>
            {state.items.map((item) => (
              <div key={item.id} className={styles.sidebarItem}>
                <span className={styles.sidebarItemName}>{item.name} × {item.quantity}</span>
                <span className={styles.sidebarItemPrice}>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
            <hr className="divider" />
            <div className={styles.sidebarRow}><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            {discount > 0 && <div className={`${styles.sidebarRow} ${styles.sidebarDiscount}`}><span>Discount</span><span>−{formatPrice(discount)}</span></div>}
            <div className={styles.sidebarRow}><span>Shipping</span><span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
            <hr className="divider" />
            <div className={`${styles.sidebarRow} ${styles.sidebarTotal}`}><span>Total</span><span>{formatPrice(total)}</span></div>
          </div>
        </div>
      </div>
    </main>
  );
}
