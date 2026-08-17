'use client';

import React, { createContext, useContext, useReducer, useState, useCallback } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  mrp: number;
  quantity: number;
  image: string;
  variant: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  coupon: string | null;
  couponDiscount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QTY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART'; payload?: boolean }
  | { type: 'APPLY_COUPON'; payload: { code: string; discount: number } }
  | { type: 'REMOVE_COUPON' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id && i.variant === action.payload.variant
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
          isOpen: true,
        };
      }
      return { ...state, items: [...state.items, action.payload], isOpen: true };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case 'UPDATE_QTY':
      if (action.payload.quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== action.payload.id) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [], coupon: null, couponDiscount: 0 };
    case 'TOGGLE_CART':
      return { ...state, isOpen: action.payload !== undefined ? action.payload : !state.isOpen };
    case 'APPLY_COUPON':
      return { ...state, coupon: action.payload.code, couponDiscount: action.payload.discount };
    case 'REMOVE_COUPON':
      return { ...state, coupon: null, couponDiscount: 0 };
    default:
      return state;
  }
}

const VALID_COUPONS: Record<string, number> = {
  FATEEK10: 10,
  WELCOME15: 15,
  FITNESS20: 20,
};

interface CartContextValue {
  state: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: (open?: boolean) => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  itemCount: number;
  subtotal: number;
  discount: number;
  total: number;
  shipping: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
    coupon: null,
    couponDiscount: 0,
  });

  const addItem = useCallback((item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item }), []);
  const removeItem = useCallback((id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id }), []);
  const updateQty = useCallback(
    (id: string, quantity: number) => dispatch({ type: 'UPDATE_QTY', payload: { id, quantity } }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), []);
  const toggleCart = useCallback(
    (open?: boolean) => dispatch({ type: 'TOGGLE_CART', payload: open }),
    []
  );
  const applyCoupon = useCallback(
    (code: string) => {
      const discount = VALID_COUPONS[code.toUpperCase()];
      if (discount) {
        dispatch({ type: 'APPLY_COUPON', payload: { code: code.toUpperCase(), discount } });
        return { success: true, message: `${discount}% discount applied!` };
      }
      return { success: false, message: 'Invalid coupon code.' };
    },
    []
  );
  const removeCoupon = useCallback(() => dispatch({ type: 'REMOVE_COUPON' }), []);

  const subtotal = state.items.reduce((s, i) => s + i.price * i.quantity, 0);
  const itemCount = state.items.reduce((s, i) => s + i.quantity, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= 999 ? 0 : 79;
  const discount = (subtotal * state.couponDiscount) / 100;
  const total = subtotal - discount + shipping;

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        toggleCart,
        applyCoupon,
        removeCoupon,
        itemCount,
        subtotal,
        discount,
        total,
        shipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
