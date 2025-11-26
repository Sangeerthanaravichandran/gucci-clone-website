import React from "react";
import { Link } from "react-router-dom";
import "./Guccihome.css";

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
          <h1 className="brand-title">GUCCI</h1>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <Link to="/Men">Men</Link>
          <Link to="/Women">Women</Link>
          <Link to="/Child">Children</Link>
          <span className="nav-icon">🔍</span> {/* Search */}
          <span className="nav-icon">🛒</span> {/* Cart */}
          <span className="nav-icon">👤</span> {/* Login */}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="gucci-hero">
        <div className="hero-content">
          <h1>Gucci Gift.</h1>

          <div className="buttons">
            <button className="btn">FOR HER</button>
            <button className="btn">FOR HIM</button>
          </div>
        </div>
      </section>
    </>
  );
}
