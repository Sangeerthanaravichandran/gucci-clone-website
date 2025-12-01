import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Guccihome.css";
import "./Contact.css";

// ICONS
import { FaMagnifyingGlass, FaUser, FaBagShopping } from "react-icons/fa6";

import ContactPanel from "../components/Contact";

function Men() {
  // SEARCH
  const [search, setSearch] = useState("");

  // SORT
  const [sortOption, setSortOption] = useState("recommended");

  // CONTACT PANEL STATE (FIX)
  const [contactOpen, setContactOpen] = useState(false);

  // PRODUCTS
  const products = [
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1762968611/795347_XKD74_4071_001_100_0000_Light-knit-wool-sweater-with-intarsia.jpg",
      title: "Knit wool sweater with intarsia",
      price: "$1,550",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQPrJ9je7rZ4VMYd6XmyQE0vQHTSuFTX2IYHeaUl3OgETnLO6",
      title: "GG large backpack",
      price: "$3,200",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOLTu5BDCxYkV_l27MKL7tR2KL4MINRbz6AsPMM7NjbeIy3ci",
      title: "Slim fit cotton denim pant",
      price: "$980",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK3Lw5_jKz0YzmCmid0T9o3kgrCfOGraxvKM5DtW5fher1xKv",
      title: "Men's Gucci Re-Web sneaker",
      price: "$1,230",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQz6CeD-Z3sYEa497JmM33DZAaAWd5Q-m8tZSvv14lN7K13WbZ",
      title: "Men's boot with buckle",
      price: "$1,456",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnMXnS8itn6w6D7RxjMApeEFfjH29Wgvz7lzgTO3ZRU7l4OgHB",
      title: "Cotton twill pants",
      price: "$1,350",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51S636Bb45ueRSG3yFCOm9BonrPQcpRNTloXyDW9jNVWgTgmI",
      title: "Reversible GG Marmont belt",
      price: "$570",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRoA5MtgLx28vNTxb_DVDgXNvBfjf36Yf9ZOWcoABHB5rdzJn",
      title: "Single-brest cotton jersey jacket",
      price: "$3,850",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSPmg-mpBAJOHNn9apqZaM-yrAHiiUCnbvDyKHpFcD9cKPOP8hF",
      title: "Striped cotton poplin shirt",
      price: "$1,250",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhslzzI0NDRPnxd9tl6db1RdGB_sm9lOD_rlha-ciq1S7RY73",
      title: "Technical panama sportswear pant",
      price: "$1,150",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHgdR64BaVaqjk0ErvTCzQNJuPdnDjBiHcJMPKKV0IxlLIWoV",
      title: "Reversible GG nylon zip jacket",
      price: "$3,300",
    },
    {
      img: "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1758644120/850222_AAFOM_1053_001_100_0000_Light.jpg",
      title: "GG Emblem large briefcase",
      price: "$2,870",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LfanS9WTFxrPI0SaYBYsvgtKtq-AKWeJAYeEbh_oRgqGZ00_",
      title: "Cotton jersey sweatshirt with print",
      price: "$1,450",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoH_l4q4oJbvVwaWHt8RAW3ez5UP-rqB1V7LHaI2PAPkubE_ol",
      title: "Foldable oval-shaped sunglasses",
      price: "$1,625",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTEc3KHESOfjGHGJz99Rh_AOvIFTazDSOVMePRoyq6ldk3_Frh",
      title: "GG canvas shirt",
      price: "$1,400",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY12EiutQ2I-MSEtCCZDfwy9jByLwmqNdeIZpyB7vJnZTO0w2E",
      title: "Ring",
      price: "$430",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1T_sBJ-nO7mijRPdd8tJYOGxHP67m65uoDhtuVHOjRY3wApM",
      title: "GG canvas padded jacket",
      price: "$6,100",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNE-Tls94kCGFzZdqEQT7FfvjU-ZmUgEjTz4CWqoQ91DSo8FcO",
      title: "Leather baseball hat with Double G",
      price: "$875",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVWYxtN3RPFFWMcYduNMAVJ89x7MVjoCj9FXtwcC7hAuTSQJbU",
      title: "Gucci Interlocking pendant necklace",
      price: "$560",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGpyuOx-JuT-G_7zYd9OIFJe8-6pnJk84YCp8MKudAVC1Q-Ut",
      title: "Gucci Half Horsebit crossbody bag",
      price: "$3,500",
    },
  ];

  // FILTER PRODUCTS
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
    } else {
      return 0;
    }
  });

  return (
    <>
      {/* NAVBAR */}
      <nav className="gucci-navbar">
        <div className="nav-left">
          <span className="plus-icon">+</span>

          {/* FIXED BUTTON */}
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
          <Link to="/Men">Men</Link>
          <Link to="/Women">Women</Link>
          <Link to="/Child">Children</Link>

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
          <Link to="/Login" className="nav-icon-link">
            <FaUser />
          </Link>
        </div>
      </nav>

      {/* CONTACT PANEL (WORKING NOW) */}
      <ContactPanel open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* HERO */}
      <div className="hero-container">
        <div className="hero-overlay">
          <div className="hero-text">
            <p className="new-in">NEW IN:</p>
            <p className="main-title">Men</p>
            <p className="subtitle">
              Shop Fall Winter 2025 men's ready-to-wear, accessories, and the
              latest arrivals.
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="product-section">
        <div className="product-controls">
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

          <div className="filters-wrapper">
            <p>
              <strong>Filters</strong>
            </p>
          </div>
        </div>

        <div className="product-grid">
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
              <div className="product-card" key={index}>
                <img src={item.img} alt={item.title} />
                <p className="product-title">{item.title}</p>
                <p className="product-price">{item.price}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="gucci-footer">
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
