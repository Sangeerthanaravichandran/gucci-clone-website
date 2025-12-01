import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Guccihome.css";
import "./Women.css";
import "./Contact.css";

// ICONS
import { FaMagnifyingGlass, FaUser, FaBagShopping } from "react-icons/fa6";

export default function Women() {
  // SEARCH STATE
  const [search, setSearch] = useState("");

  // SORT STATE
  const [sortOption, setSortOption] = useState("recommended");

  // PRODUCTS
  const products = [
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1747324804/853971_FAFFP_2547_001_100_0000_Light-gucci-giglio-large-tote-bag.jpg",
      title: "Gucci Giglio Large Tote Bag",
      price: "$2,850",
    },
    {
      img: "data:image/jpeg;base64,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",
      title: "Navigator sunglasses",
      price: "$690",
    },
    {
      img: "data:image/jpeg;base64,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",
      title: "Diagonal GG silk jacquard dress",
      price: "$5,600",
    },
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
  ];

  // FILTER PRODUCTS BASED ON SEARCH
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // SORT PRODUCTS BASED ON SORT OPTION
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
      return 0; 
    }
  });

  return (
    <>
      {/* NAVBAR */}
      <nav className="gucci-navbar">
        {/* LEFT */}
        <div className="nav-left">
          <span className="plus-icon">+</span>
          <Link to="/Contact" className="contact-link">
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
