import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Guccihome.css";
import "./Child.css";

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
      <div className="hero-container-child">
        <div className="hero-overlay-child">
          <div className="hero-text-child">
            
            <p className="main-title-child">Children</p>
            <p className="subtitle-child">
             Clothing and accessories for newborns and babies aged 0-36 months old. Sleepsuits, knitwear, jackets and dresses mix with playful bibs, hats and baby shoes.
            </p>
          </div>
        </div>
      </div>

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
          <p><strong>Sort By:</strong> Recommended</p>
          <p><strong>Filters</strong></p>
        </div>

        <div className="product-grid-child">

          <div className="product-card-child">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoELTuidaVb0pGITE1eHrtRigxYoZye9U3P-slxms7FDnmkEzD" alt="Sweater" />
            <p className="product-title-child">Knit wool sweater with intarsia</p>
            <p className="product-price-child">$1,550</p>
          </div>

          <div className="product-card-child">
            <img src="https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1746807329/812673_AAE2T_2248_002_100_0000_Light.jpg" alt="Backpack" />
            <p className="product-title-child">GG large backpack</p>
            <p className="product-child">$3,200</p>
          </div>

          <div className="product-card-child">
            <img src="https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1739385077/825863_XKEXN_9112_001_100_0000_Light.jpg" alt="Denim" />
            <p className="product-title-child">Slim fit cotton denim pant</p>
            <p className="product-price-child">$980</p>
          </div>

          <div className="product-card-child">
            <img src="https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1756794628/847032_XKE8Y_4030_001_100_0000_Light-baby-wool-trousers-with-embroidery.jpg" alt="Sneaker" />
            <p className="product-title-child">Men's Gucci Re-Web sneaker</p>
            <p className="product-price-child">$1,230</p>
          </div>

          <div className="product-card-child">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRoSmpOK1wt3ZhjjpN1fkNcdTjorNu5FVTVEX7usxxeTsaLJ3fq" alt="Men's boot with buckle" />
            <p className="product-title-child">Men's boot with buckle</p>
            <p className="product-price-child">$1,456</p>
          </div>

          <div className="product-card-child">
            <img src="https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1756794606/837171_XJHLH_4333_001_100_0000_Light-baby-cotton-t-shirt-with-print.jpg" alt="Cotton twill pants" />
            <p className="product-title-child">Cotton twill pants</p>
            <p className="product-price-child">$1,350</p>
          </div>

          <div className="product-card-child">
            <img src="https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1748449874/835302_3K206_9166_001_100_0000_Light.jpg" alt="Reversible GG Marmont belt" />
            <p className="product-title-child">Reversible GG Marmont belt</p>
            <p className="product--child">$570</p>
          </div>


          <div className="product-card-child">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW-cZZ1Z27He2n9rDZpKzKzIvEQVECYcjF1Mx7EOzbMWrQ-bK" alt="Single-brest cotton jersey jacket" />
            <p className="product-title-child">Single-brest cotton jersey jacket</p>
            <p className="product-price-child">$3,850</p>
          </div>


          <div className="product-card-child">
            <img src="data:image/jpeg;base64,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" alt="Striped cotton poplin shirt" />
            <p className="product-title-child">Striped cotton poplin shirt</p>
            <p className="product-price-child">$1,250</p>
          </div>

          <div className="product-card-child">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4A_j-eBywmSX9mTZCUTQ4wjtyrhewrroXKlBGErPuwHKr89SL" alt="Technical panama sportswear pant" />
            <p className="product-title-child">Technical panama sportswear pant</p>
            <p className="product-price-child">$1,150</p>
          </div>


          <div className="product-card-child">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gV5C2nvo9EPk-LGqdUahcc90JUJwOlJPGWyJM7pRJoq_ovg6" alt="Reversible GG nylon zip jacket" />
            <p className="product-title-child">Reversible GG nylon zip jacket</p>
            <p className="product-price-child">$3,300</p>
          </div>

          <div className="product-card-child">
            <img src="https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1758644120/850222_AAFOM_1053_001_100_0000_Light.jpg" alt="GG Emblem large briefcase" />
            <p className="product-title-child">GG Emblem large briefcase</p>
            <p className="product-price-child">$2,870</p>
          </div>

          <div className="product-card-child">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhMLwi4R0aDkCkLkcS1T_Qbiyh1-ysr9VAeC4RAkYMcS-QrLNk" alt="Cotton jersey sweatshirt with print" />
            <p className="product-title-child">Cotton jersey sweatshirt with print</p>
            <p className="product-price-child">$1,450</p>
          </div>


          <div className="product-card-child">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiCETfDeAja5oLZThcU-snWXi9pBarJL7RzmmJeuw6Vmosikat" alt="Foldable oval-shaped sunglasses" />
            <p className="product-title-child">Foldable oval-shaped sunglasses</p>
            <p className="product-price-child">$1,625</p>
          </div>


          <div className="product-card-child">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNRsEtCitAmfQceoMrY9o2Nk8IL92bCwHrNsSRBOT_i95mnTf2" alt="GG canvas shirt" />
            <p className="product-title-child">GG canvas shirt</p>
            <p className="product-price-child">$1,400</p>
          </div>

          <div className="product-card-child">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdGibNKd6pwmXx5iflzoy3G6Q7XnKDn3mtpG7V2PdRDcKSpb5K" alt="Ring " />
            <p className="product-title-child">Ring</p>
            <p className="product-price-child">$430</p>
          </div>

          <div className="product-card-child">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQApK3OhNRd2IwENF8XdZIFvts9cBFZ_rwktBgt1mMKqwi-EfJK" alt="GG canvas padded jacket" />
            <p className="product-title-child">GG canvas padded jacket</p>
            <p className="product-price-child">$6,100</p>
          </div>

          <div className="product-card-child">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezOLtWeg8ETIwLUG8Hoap9bzP5iAfdWoJ-QzjaxHrg6DofPSc" alt="Leather baseball hat with Double G" />
            <p className="product-title-child">Leather baseball hat with Double G</p>
            <p className="product-price-child">$875</p>
          </div>

          <div className="product-card-child">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgqe_Gi4Mk73OJYI3aeqTz8GcR-WTfKIZ1xXLxhQs0ptSMEUAJ" alt="Gucci Interlocking pendant necklace" />
            <p className="product-title-child">Gucci Interlocking pendant necklace</p>
            <p className="product-price-child">$560</p>
          </div>

          <div className="product-card-child">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQ3Y3JjGaAgz5lgJWDtXJyesUB3ZxbTivGH5DsC6O8cce8J96Z" alt="Gucci Half Horsebit crossbody bag" />
            <p className="product-title-child"></p>Gucci Half Horsebit crossbody bag
            <p className="product-price-child">$3,500</p>
          </div>




        </div>
      </div>
    </>
  );
}

export default Men;