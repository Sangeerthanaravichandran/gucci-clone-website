import React, { useEffect, useState } from "react";
import { getCart, saveCart } from "./cartStorage";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
    updateTotal(cart);
  }, []);

  const updateTotal = (cart) => {
    const t = cart.reduce((sum, item) => {
      const numericPrice = Number(String(item.price).replace(/[^0-9.-]+/g, ""));
      return sum + numericPrice * item.quantity;
    }, 0);
    setTotal(t);
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;

    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    );

    setCartItems(updated);
    saveCart(updated);
    updateTotal(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    saveCart(updated);
    updateTotal(updated);
  };

  const clearCart = () => {
    setCartItems([]);
    saveCart([]);
    updateTotal([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <p className="empty-cart">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>

      <div className="cart-layout">
        {/* LEFT SIDE — PRODUCTS */}
        <div className="cart-items">
          {cartItems.map((item) => {
            const numericPrice = Number(
              String(item.price).replace(/[^0-9.-]+/g, "")
            );
            return (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.title} className="cart-img" />

                <div className="cart-info">
                  <h2>{item.title}</h2>
                  <p className="cart-price">
                    $ {numericPrice.toLocaleString()}
                  </p>

                  <div className="cart-qty">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE — SUMMARY */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>$ {total.toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>$ {total.toLocaleString()}</span>
          </div>

          <button className="checkout-btn black">Proceed to Checkout</button>

          <button className="checkout-btn white" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
