import React from 'react'
import { Link } from "react-router-dom";
import "../App.css";

function Men() {
  return (
    <>
          <nav>
            <Link to="/">Landingpage</Link>
            <Link to="/Men">Men</Link>
            <Link to="/Women">Women</Link>
            <Link to="/Child">Child</Link>
          </nav>
          
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
        </>
  )
}

export default Men
