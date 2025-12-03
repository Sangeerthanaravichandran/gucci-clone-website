import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Guccihome.css";
import "./Women.css";
import "./Contact.css";

import products from "./productwomen";

// ICONS
import { FaMagnifyingGlass, FaUser, FaBagShopping } from "react-icons/fa6";

export default function Women() {
  // SEARCH STATE
  const [search, setSearch] = useState("");

  // SORT STATE
  const [sortOption, setSortOption] = useState("recommended");

  // FILTER PRODUCTS BASED ON SEARCH
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // SORT PRODUCTS
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") {
      return (
        parseFloat(a.price.replace(/[$,]/g, "")) -
        parseFloat(b.price.replace(/[$,]/g, ""))
      );
    } else if (sortOption === "price-high") {
      return (
        parseFloat(b.price.replace(/[$,]/g, "")) -
        parseFloat(a.price.replace(/[$,]/g, ""))
      );
    } else if (sortOption === "title-asc") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "title-desc") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

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
          <Link to="/" className="brand-title">
            GUCCI
          </Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/child">Children</Link>

          {/* SEARCH */}
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

          {/* CART */}
          <Link to="/Cart" className="nav-icon-link">
            <FaBagShopping />
          </Link>

          {/* LOGIN */}
          <Link to="/login" className="nav-icon-link">
            <FaUser />
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero-container-women">
        <div className="hero-overlay-women">
          <div className="hero-text-women">
            <p className="main-title-women">Women</p>
            <p className="subtitle-women">
              Shop new in women's ready-to-wear, handbags, shoes and more.
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="product-section-women">
        <div className="product-controls-women">
          {/* SORT DROPDOWN */}
          <div className="sort-wrapper">
            <label htmlFor="sort" className="sort-label">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="sort-dropdown"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="title-asc">Title: A-Z</option>
              <option value="title-desc">Title: Z-A</option>
            </select>
          </div>

          {/* FILTERS */}
          <div className="filters-wrapper">
            <p>
              <strong>Filters</strong>
            </p>
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
                to={`/women/product/${product.id}`} // ✅ FIXED LINK
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
        {/* SIGNUP SECTION */}
        <div className="footer-signup">
          <h4>SIGN UP FOR GUCCI UPDATES</h4>
          <p>
            Get exclusive updates on the collection's launch, personalized
            communication and the House's latest news.
          </p>
          <br />
          <br />
          <a href="#" className="subscribe-link">
            + SIGN UP
          </a>
        </div>

        {/* FOOTER LOGOS */}
        <div className="footer-logos">
          <p>GUCCI OSTERIA</p>
          <p>PALAZZO</p>
        </div>

        {/* COPYRIGHT */}
        <p className="footer-copy">
          © 2016 - 2025 Guccio Gucci S.p.A. - All rights reserved. SIAE LICENCE
          # 2294/I/1936 and 5647/I/1936
        </p>

        {/* BIG GUCCI TEXT */}
        <h1 className="footer-brand">GUCCI</h1>
      </footer>
    </>
  );
}
