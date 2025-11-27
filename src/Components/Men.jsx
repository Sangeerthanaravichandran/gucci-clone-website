import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Guccihome.css";

// ICONS (FontAwesome 6)
import { FaMagnifyingGlass, FaUser, FaBagShopping } from "react-icons/fa6";

function Men() {
  return (
    <>
      {/* 
              NAVBAR */}
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
            <input type="text" className="search-input" placeholder="Search" />
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

      {/* PRODUCT SECTION */}
      <div className="product-section">

        <div className="product-controls">
          <p><strong>Sort By:</strong> Recommended</p>
          <p><strong>Filters</strong></p>
        </div>

        <div className="product-grid">

          <div className="product-card">
            <img src="https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1762968611/795347_XKD74_4071_001_100_0000_Light-knit-wool-sweater-with-intarsia.jpg" alt="Sweater" />
            <p className="product-title">Knit wool sweater with intarsia</p>
            <p className="product-price">$1,550</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQPrJ9je7rZ4VMYd6XmyQE0vQHTSuFTX2IYHeaUl3OgETnLO6" alt="Backpack" />
            <p className="product-title">GG large backpack</p>
            <p className="product-price">$3,200</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOLTu5BDCxYkV_l27MKL7tR2KL4MINRbz6AsPMM7NjbeIy3ci" alt="Denim" />
            <p className="product-title">Slim fit cotton denim pant</p>
            <p className="product-price">$980</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK3Lw5_jKz0YzmCmid0T9o3kgrCfOGraxvKM5DtW5fher1xKv" alt="Sneaker" />
            <p className="product-title">Men's Gucci Re-Web sneaker</p>
            <p className="product-price">$1,230</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQz6CeD-Z3sYEa497JmM33DZAaAWd5Q-m8tZSvv14lN7K13WbZ" alt="Men's boot with buckle" />
            <p className="product-title">Men's boot with buckle</p>
            <p className="product-price">$1,456</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnMXnS8itn6w6D7RxjMApeEFfjH29Wgvz7lzgTO3ZRU7l4OgHB" alt="Cotton twill pants" />
            <p className="product-title">Cotton twill pants</p>
            <p className="product-price">$1,350</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51S636Bb45ueRSG3yFCOm9BonrPQcpRNTloXyDW9jNVWgTgmI" alt="Reversible GG Marmont belt" />
            <p className="product-title">Reversible GG Marmont belt</p>
            <p className="product-price">$570</p>
          </div>


          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRoA5MtgLx28vNTxb_DVDgXNvBfjf36Yf9ZOWcoABHB5rdzJn" alt="Single-brest cotton jersey jacket" />
            <p className="product-title">Single-brest cotton jersey jacket</p>
            <p className="product-price">$3,850</p>
          </div>


          <div className="product-card">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSPmg-mpBAJOHNn9apqZaM-yrAHiiUCnbvDyKHpFcD9cKPOP8hF" alt="Striped cotton poplin shirt" />
            <p className="product-title">Striped cotton poplin shirt</p>
            <p className="product-price">$1,250</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhslzzI0NDRPnxd9tl6db1RdGB_sm9lOD_rlha-ciq1S7RY73" alt="Technical panama sportswear pant" />
            <p className="product-title">Technical panama sportswear pant</p>
            <p className="product-price">$1,150</p>
          </div>


          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHgdR64BaVaqjk0ErvTCzQNJuPdnDjBiHcJMPKKV0IxlLIWoV" alt="Reversible GG nylon zip jacket" />
            <p className="product-title">Reversible GG nylon zip jacket</p>
            <p className="product-price">$3,300</p>
          </div>

          <div className="product-card">
            <img src="https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1758644120/850222_AAFOM_1053_001_100_0000_Light.jpg" alt="GG Emblem large briefcase" />
            <p className="product-title">GG Emblem large briefcase</p>
            <p className="product-price">$2,870</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LfanS9WTFxrPI0SaYBYsvgtKtq-AKWeJAYeEbh_oRgqGZ00_" alt="Cotton jersey sweatshirt with print" />
            <p className="product-title">Cotton jersey sweatshirt with print</p>
            <p className="product-price">$1,450</p>
          </div>


          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoH_l4q4oJbvVwaWHt8RAW3ez5UP-rqB1V7LHaI2PAPkubE_ol" alt="Foldable oval-shaped sunglasses" />
            <p className="product-title">Foldable oval-shaped sunglasses</p>
            <p className="product-price">$1,625</p>
          </div>


          <div className="product-card">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTEc3KHESOfjGHGJz99Rh_AOvIFTazDSOVMePRoyq6ldk3_Frh" alt="GG canvas shirt" />
            <p className="product-title">GG canvas shirt</p>
            <p className="product-price">$1,400</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY12EiutQ2I-MSEtCCZDfwy9jByLwmqNdeIZpyB7vJnZTO0w2E" alt="Ring " />
            <p className="product-title">Ring</p>
            <p className="product-price">$430</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1T_sBJ-nO7mijRPdd8tJYOGxHP67m65uoDhtuVHOjRY3wApM" alt="GG canvas padded jacket" />
            <p className="product-title">GG canvas padded jacket</p>
            <p className="product-price">$6,100</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNE-Tls94kCGFzZdqEQT7FfvjU-ZmUgEjTz4CWqoQ91DSo8FcO" alt="Leather baseball hat with Double G" />
            <p className="product-title">Leather baseball hat with Double G</p>
            <p className="product-price">$875</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVWYxtN3RPFFWMcYduNMAVJ89x7MVjoCj9FXtwcC7hAuTSQJbU" alt="Gucci Interlocking pendant necklace" />
            <p className="product-title">Gucci Interlocking pendant necklace</p>
            <p className="product-price">$560</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGpyuOx-JuT-G_7zYd9OIFJe8-6pnJk84YCp8MKudAVC1Q-Ut" alt="Gucci Half Horsebit crossbody bag" />
            <p className="product-title"></p>Gucci Half Horsebit crossbody bag
            <p className="product-price">$3,500</p>
          </div>




        </div>
      </div>
    </>
  );
}

export default Men;