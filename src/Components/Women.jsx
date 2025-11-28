import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Guccihome.css";
import "./Women.css";

// ICONS
import { FaMagnifyingGlass, FaUser, FaBagShopping } from "react-icons/fa6";

export default function Women() {
  // ⭐ SEARCH STATE
  const [search, setSearch] = useState("");

  // ⭐ SORT STATE
  const [sortOption, setSortOption] = useState("recommended");

  // ⭐ PRODUCTS
  const products = [
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1747324804/853971_FAFFP_2547_001_100_0000_Light-gucci-giglio-large-tote-bag.jpg",
      title: "Gucci Giglio Large Tote Bag",
      price: "$2,850",
    },
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1739385077/825863_XKEXN_9112_001_100_0000_Light.jpg",
      title: "Slim Fit Cotton Denim Pant",
      price: "$980",
    },
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1748449874/835302_3K206_9166_001_100_0000_Light.jpg",
      title: "Reversible GG Marmont Belt",
      price: "$570",
    },
  ];

  // ⭐ FILTER PRODUCTS BASED ON SEARCH
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // ⭐ SORT PRODUCTS BASED ON SORT OPTION
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
    } else {
      return 0; // ⭐ Recommended
    }
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
          <Link to="/Men">Men</Link>
          <Link to="/Women">Women</Link>
          <Link to="/Child">Children</Link>

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
          <Link to="/cart" className="nav-icon-link">
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

        {/* PRODUCT GRID */}
        <div className="product-grid-women">
          {sortedProducts.length === 0 ? (
            <h3
              style={{
                width: "100%",
                textAlign: "center",
                color: "gray",
              }}
            >
              No Products Found
            </h3>
          ) : (
            sortedProducts.map((item, index) => (
              <div className="product-card-women" key={index}>
                <img src={item.img} alt={item.title} />
                <p className="product-title-women">{item.title}</p>
                <p className="product-price-women">{item.price}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/*FOOTER*/}

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

        {/* FOOTER LINKS / LOGOS */}
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
