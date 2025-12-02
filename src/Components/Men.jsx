// Men.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Guccihome.css";
import "./Contact.css";

import products from "./product";

// ICONS
import { FaMagnifyingGlass, FaUser, FaBagShopping } from "react-icons/fa6";

// CONTACT PANEL
import ContactPanel from "../Components/Contact";

function Men() {
  // SEARCH
  const [search, setSearch] = useState("");

  // SORT
  const [sortOption, setSortOption] = useState("recommended");

  // CONTACT PANEL
  const [contactOpen, setContactOpen] = useState(false);

  // FILTER
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // SORTING FUNCTION
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[$,]/g, ""));
    const priceB = parseFloat(b.price.replace(/[$,]/g, ""));

    switch (sortOption) {
      case "price-low":
        return priceA - priceB;

      case "price-high":
        return priceB - priceA;

      case "title-asc":
        return a.title.localeCompare(b.title);

      case "title-desc":
        return b.title.localeCompare(a.title);

      default:
        return 0;
    }
  });

  return (
    <>
      {/* NAVBAR */}
      <nav className="gucci-navbar">
        <div className="nav-left">
          <span className="plus-icon">+</span>

          <button className="contact-link" onClick={() => setContactOpen(true)}>
            Contact Us
          </button>
        </div>

        <div className="nav-center">
          <Link to="/" className="brand-title">
            GUCCI
          </Link>
        </div>

        <div className="nav-right">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/child">Children</Link>

          <div className="search-box">
            <FaMagnifyingGlass className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Link to="/cart" className="nav-icon-link">
            <FaBagShopping />
          </Link>

          <Link to="/login" className="nav-icon-link">
            <FaUser />
          </Link>
        </div>
      </nav>

      {/* CONTACT PANEL */}
      <ContactPanel open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* HERO SECTION */}
      <div className="hero-container">
        <div className="hero-overlay">
          <div className="hero-text">
            <p className="new-in">NEW IN:</p>
            <p className="main-title">Men</p>
            <p className="subtitle">
              Shop Fall Winter 2025 men's ready-to-wear, accessories, and the latest arrivals.
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-section">
        {/* SORTING BAR */}
        <div className="product-controls">
          <div className="sort-wrapper">
            <label htmlFor="sort" className="sort-label">Sort By:</label>
            <select
              id="sort"
              className="sort-dropdown"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="title-asc">Title: A–Z</option>
              <option value="title-desc">Title: Z–A</option>
            </select>
          </div>

          <div className="filters-wrapper">
            <p><strong>Filters</strong></p>
          </div>
        </div>

        {/* PRODUCT LIST */}
        <div className="product-grid">
          {sortedProducts.length === 0 ? (
            <h3 className="no-products">No Products Found</h3>
          ) : (
            sortedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card"
              >
                <img src={product.img} alt={product.title} />
                <p className="product-title">{product.title}</p>
                <p className="product-price">{product.price}</p>
              </Link>
            ))
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="gucci-footer">
        <div className="footer-signup">
          <h4>SIGN UP FOR GUCCI UPDATES</h4>
          <p>
            Get exclusive updates on launches, personalized news, and more.
          </p>

          <a href="#" className="subscribe-link">+ SIGN UP</a>
        </div>

        <div className="footer-logos">
          <p>GUCCI OSTERIA</p>
          <p>PALAZZO</p>
        </div>

        <p className="footer-copy">
          © 2016 - 2025 Guccio Gucci S.p.A. - All rights reserved.
        </p>

        <h1 className="footer-brand">GUCCI</h1>
      </footer>
    </>
  );
}

export default Men;
