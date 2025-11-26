import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Men() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="gucci-navbar">
        {/* LEFT */}
        <div className="nav-left">
          <span className="plus-icon">+</span>
          <Link to="/contact" className="contact-link">
            Contact Us
          </Link>
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <h1 className="brand-title">GUCCI</h1>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <Link to="/Men">Men</Link>
          <Link to="/Women">Women</Link>
          <Link to="/Child">Children</Link>
          <span className="nav-icon">🔍</span>
          <span className="nav-icon">🛒</span>
          <span className="nav-icon">👤</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero-container">
        <div className="hero-overlay">
          <div className="hero-text">
            <p className="new-in">NEW IN:</p>
            <h1 className="main-title">Men</h1>
            <p className="subtitle">
              Shop Fall Winter 2025 men's ready-to-wear, accessories, and the latest arrivals.
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="product-section">

        <div className="product-controls">
          <p><strong>Sort By:</strong> Recommended</p>
          <p><strong>Filters</strong></p>
        </div>

        <div className="product-grid">

          <div className="product-card">
            <img src="https://media.gucci.com/product-img/..." alt="Sweater" />
            <h3 className="product-title">Knit wool sweater with intarsia</h3>
            <p className="product-price">$1,550</p>
          </div>

          <div className="product-card">
            <img src="https://media.gucci.com/product-img/..." alt="Backpack" />
            <h3 className="product-title">GG large backpack</h3>
            <p className="product-price">$3,200</p>
          </div>

          <div className="product-card">
            <img src="https://media.gucci.com/product-img/..." alt="Denim" />
            <h3 className="product-title">Slim fit cotton denim pant</h3>
            <p className="product-price">$980</p>
          </div>

          <div className="product-card">
            <img src="https://media.gucci.com/product-img/..." alt="Sneaker" />
            <h3 className="product-title">Men's Gucci Re-Web sneaker</h3>
            <p className="product-price">$1,230</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Men;