import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Guccihome.css";
import "./Child.css";

// ICONS (FontAwesome 6)
import { FaMagnifyingGlass, FaUser, FaBagShopping } from "react-icons/fa6";

function Child() {
  // SEARCH STATE
  const [search, setSearch] = useState("");

  // SORT STATE
  const [sortOption, setSortOption] = useState("recommended");

  // ALL PRODUCTS
  const products = [
    {
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoELTuidaVb0pGITE1eHrtRigxYoZye9U3P-slxms7FDnmkEzD",
      title: "Knit wool sweater with intarsia",
      price: "$1,550",
    },
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1746807329/812673_AAE2T_2248_002_100_0000_Light.jpg",
      title: "GG Shoe",
      price: "$1,200",
    },
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1739385077/825863_XKEXN_9112_001_100_0000_Light.jpg",
      title: "Toddler jumpsuit",
      price: "$980",
    },
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1756794628/847032_XKE8Y_4030_001_100_0000_Light-baby-wool-trousers-with-embroidery.jpg",
      title: "Cotton pant",
      price: "$630",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRoSmpOK1wt3ZhjjpN1fkNcdTjorNu5FVTVEX7usxxeTsaLJ3fq",
      title: "Toddler Cap",
      price: "$450",
    },
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1756794606/837171_XJHLH_4333_001_100_0000_Light-baby-cotton-t-shirt-with-print.jpg",
      title: "Cotton T-shirt",
      price: "$350",
    },
    {
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1748449874/835302_3K206_9166_001_100_0000_Light.jpg",
      title: "Baby hand gloves",
      price: "$570",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW-cZZ1Z27He2n9rDZpKzKzIvEQVECYcjF1Mx7EOzbMWrQ-bK",
      title: "Toddler blue T-shirt",
      price: "$250",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTmYNr1Gn63Xy31cmsIr_o2T7HjUZK28HMmEB0RkkuE-nucIU8",
      title: "Toddler ankle boot",
      price: "$640",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQaaDbkBLViff7-KGxyEpJ__bwJQsW8wwlduH49hbp5gsTATHsj",
      title: "Baby cotton T-shirt with embroidery",
      price: "$240",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aR8du9iXURYt3idlAewugrPw__hk9Jye-TUsQXJ8OT1MJAL8",
      title: "Large changing bag",
      price: "$2,500",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWs7c43twaRsj2-S4nAZBXDvIS2yrGeGtRNJX3a18hrf_DgwkY",
      title: "Baby ballet flats with Double G",
      price: "$510",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxdMK0fWi-t7_lNcW8aS8qIA9EyBurKSDyXdyPmzm-v6G_YE",
      title: "Baby GG wool jacquard cardigan",
      price: "$650",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMS9J-c0x4biTF00Mq1VKW2J7RxvPAFQATDc7cpC9n5JC03_B",
      title: "Baby GG cotton velvet dress",
      price: "$1,100",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBfEBR3AWWCev-UCxPFWdohzYgPQh3G7W4osfxIg9TeG-nWpDA",
      title: "Baby GG wool jacquard one-piece",
      price: "$820",
    },
    {
      img: "data:image/jpeg;base64,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",
      title: "Baby GG wool coat",
      price: "$1,250",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT32a40GF9aAtXUV6dNHavoGgMd-v4lCQanOHnwZbzcntYCFzdH",
      title: "Baby cotton one-piece with print",
      price: "$470",
    },
    {
      img: "data:image/jpeg;base64,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",
      title: "Baby velvet dress",
      price: "$1,100",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQBOPSHiUAtbZdWzHsTp8HopY39S_rkkTNCTTeYGQl-fsDorTj0",
      title: "Baby GG canvas dress",
      price: "$850",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSXJVoUl8crHpD0wkvx56ebUitW5Kp1q8IjqPey0SJSOC_TVrNu",
      title: "Baby padded GG canvas coat",
      price: "$1570",
    }
  ];

  // FILTER PRODUCTS BASED ON SEARCH
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // SORT PRODUCTS BASED ON SORT OPTION ( Recommended)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") {
      return parseFloat(a.price.replace(/[$,]/g, "")) - parseFloat(b.price.replace(/[$,]/g, ""));
    } else if (sortOption === "price-high") {
      return parseFloat(b.price.replace(/[$,]/g, "")) - parseFloat(a.price.replace(/[$,]/g, ""));
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
          <Link to="/Contact" className="contact-link">
            Contact Us
          </Link>
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

          {/* SEARCH BOX */}
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

      {/* HERO SECTION */}

      <div className="hero-container-child">
        <div className="hero-overlay-child">
          <div className="hero-text-child">
            <p className="main-title-child">Children</p>
            <p className="subtitle-child">
              Clothing and accessories for newborns and babies aged 0-36 months old. Sleepsuits, knitwear, jackets, and dresses mix with playful bibs, hats, and baby shoes.
            </p>
          </div>
        </div>
      </div>


    {/* CATEGORY SECTION */}

      <section className="catagory">
        <div className="boy-catagory">
          <button className="boy-btn">Boys</button>
        </div>
        <div className="girl-catagory">
          <button className="girl-btn">Girls</button>
        </div>
      </section>


      {/* PRODUCT SECTION */}

      <div className="product-section-child">
        <div className="product-controls-child">
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
            <p><strong>Filters</strong></p>
          </div>
        </div>

        <div className="product-grid-child">
          {sortedProducts.length === 0 ? (
            <h3 style={{ width: "100%", textAlign: "center", color: "gray" }}>
              No Products Found
            </h3>
          ) : (
            sortedProducts.map((item, index) => (
              <div className="product-card-child" key={index}>
                <img src={item.img} alt={item.title} />
                <p className="product-title-child">{item.title}</p>
                <p className="product-price-child">{item.price}</p>
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
            Get exclusive updates on the collection's launch, personalized communication and the House's latest news.
          </p>
          <br /><br />
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

export default Child;
