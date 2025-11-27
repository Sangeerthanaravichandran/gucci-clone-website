import React from "react";
import { Link } from "react-router-dom";
import "./Guccihome.css";

// ICONS
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

export default function Landingpage() {
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

          {/* SEARCH BAR WITH ICON */}
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" className="search-input" placeholder="Search" />
          </div>

          {/* CART */}
          <Link to="/cart" className="nav-icon-link">
            <FaShoppingBag />
          </Link>

          {/* LOGIN */}
          <Link to="/login" className="nav-icon-link">
            <FaUser />
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="gucci-hero">
        <div className="hero-content">
          <p>Gucci Gift</p>
          <br /> <br />
          <div className="buttons">
            <button className="btn">FOR HER</button>
            <button className="btn">FOR HIM</button>
          </div>
        </div>
      </section>

      {/* ================================
           GIFTS CURATED BY THE HOUSE
      ================================= */}
      <section className="gifts-container">
        <h2 className="gifts-title">GIFTS CURATED BY THE HOUSE</h2>

        <div className="gifts-grid">
          {/* Handbags */}
          <a href="/handbags" className="gift-card">
            <img
              src="https://media.gucci.com/dynamic/b3c8/BQeEdSf4KEEYYYZhsN7Qrth9mAFlSb2mMlbZEsSLzTXLYLRRMPBmq2Bz88f94yLOvLSt74M4SfTwj5vqeYSHfo3JJBY6el9zEwwE3IyQEqKQnlvhuopO0o9QFi+RVOBzf3KqC7IFCzz+kFX6qoGjaTfiWoflYILlc+1YXYnrPgneq+0iteCssErjBAL8IberEHnenaizddxbS5t22C78+xolsTGinDhlP_3QVO6eJ6rUU1vvwCiAu72anSmy5HsP+X1rxwoyFOqwCnMhte4yfWapzyTprZOawBMOnNBxud4_ySk8j2gw6YnCJ0vo1k5Z0ubrr8zjL9wuVU8ESJzMCA==/HP_Portrait_Gucci-GIFT-GIVING-NOV25-Set-2-18-0547-C_001_Default.png"
              alt="Handbags"
              className="gift-image"
            />
            <p className="gift-label">Handbags</p>
          </a>

          {/* Women's Shoes */}
          <a href="/womens-shoes" className="gift-card">
            <img
              src="https://media.gucci.com/dynamic/b3c8/Wx3M1NTYeWrOuNP+qd8u97OclFqChNGVcoOubltax4wk44W4eTZA7FpxSKMK4WcAtcv1Yz+eHdy9sV8pQ2ctRpSVJTNXbLC2myXR9rGjN4oC1_lcfzu0xsq37CYtpn4AEN1WpB7Zi80kOtw9_NZq+LCcczgSKTRuKeAXdDJIDYM2HXComZzg1eH3Gy7kmkPS0UPSYjK48KV_BuWu56+QSsI8Ao_FI+uT8HgtuzLKxgQ1hr5u1KsMuFq+6EfZnxVc6LrhNCqMmQm_4pTQcVaT+z_IFpjMycrCxEhFKqTv9OHeMpn45wO+apuOU2J_G9nFCjMGh5qNilDRPop6KiwrnQ==/HP_Portrait_Gucci-GIFT-GIVING-NOV25-11B-BBY-GUC-14-0905_001_Default.png"
              alt="Women's Shoes"
              className="gift-image"
            />
            <p className="gift-label">Women's Shoes</p>
          </a>

          {/* Men's Shoes */}
          <a href="/mens-shoes" className="gift-card">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2rGJTK9mG3PSB9eUcawJIabxuXrG6XyaPoKk23raDNwdadIdP"
              alt="Men's Shoes"
              className="gift-image"
            />
            <p className="gift-label">Men's Shoes</p>
          </a>

          {/* Leather Goods */}
          <a href="/mens-leathergoods" className="gift-card">
            <img
              src="https://images.ctfassets.net/brzb6u29244a/wHfnbSUbtt3VdTphca6UK/caf49f7ede9a6aed5f7ada0ac02581d2/HeroCategory-Mobile_Gucci-GIFT-GIVING-NOV25-Set-1-02-0239-D_001_Default.png?&fm=jpg&q=50"
              alt="Men's Small Leathergoods"
              className="gift-image"
            />
            <p className="gift-label">Men's Small Leathergoods</p>
          </a>
        </div>
      </section>

      <section className="gucci-hero-men">
        <div className="hero-men-content">
          <p>Men's Bags</p>
          <br /> <br />
          <div className="buttons-bag">
            <button className="btn1">SHOP NOW</button>
          </div>
        </div>
      </section>
    </>
  );
}
