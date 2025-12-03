import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Guccihome.css";
import "./Contact.css";

// ICONS
import {
  FaMagnifyingGlass,
  FaUser,
  FaBagShopping,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

import gucciVisitStore1 from "../assets/gucci visit store 1.mp4";

import ContactPanel from "../Components/Contact";

import Login from "../Components/Login";


export default function Landingpage() {

  //contact
  const [contactOpen, setContactOpen] = useState(false);

  // VIDEO refs
  const video1 = useRef(null);
  const video2 = useRef(null);
  const video3 = useRef(null);

  // play/pause states
  const [isPlaying1, setIsPlaying1] = useState(true);
  const [isPlaying2, setIsPlaying2] = useState(true);
  const [isPlaying3, setIsPlaying3] = useState(true);

  const togglePlay = (ref, setState, state) => {
    if (state) {
      ref.current.pause();
      setState(false);
    } else {
      ref.current.play();
      setState(true);
    }
  };

  return (
    <>
      {/* NAVBAR*/}
      <nav className="gucci-navbar">
        {/* LEFT */}
        <div className="nav-left">
          <span className="plus-icon">+</span>
          <button className="contact-link" onClick={() => setContactOpen(true)}>
            Contact Us
          </button>
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
          <Link to="/Cart" className="nav-icon-link">
            <FaBagShopping />
          </Link>

          

          <Link to="/Login" className="nav-icon-link">
            <FaUser />
          </Link>
        </div>
      </nav>

      {/*HERO SECTION*/}
      <section className="gucci-hero">
        <div className="hero-content">
          <p>Gucci Gift</p>
          <br />
          <br />
          <div className="buttons">
            <button className="btn">FOR HER</button>
            <button className="btn">FOR HIM</button>
          </div>
        </div>
      </section>

      {/* GIFTS SECTION */}
      <section className="gifts-container">
        <h2 className="gifts-title">GIFTS CURATED BY THE HOUSE</h2>

        <div className="gifts-grid">
          <a href="/handbags" className="gift-card">
            <img
              src="https://media.gucci.com/dynamic/b3c8/BQeEdSf4KEEYYYZhsN7Qrth9mAFlSb2mMlbZEsSLzTXLYLRRMPBmq2Bz88f94yLOvLSt74M4SfTwj5vqeYSHfo3JJBY6el9zEwwE3IyQEqKQnlvhuopO0o9QFi+RVOBzf3KqC7IFCzz+kFX6qoGjaTfiWoflYILlc+1YXYnrPgneq+0iteCssErjBAL8IberEHnenaizddxbS5t22C78+xolsTGinDhlP_3QVO6eJ6rUU1vvwCiAu72anSmy5HsP+X1rxwoyFOqwCnMhte4yfWapzyTprZOawBMOnNBxud4_ySk8j2gw6YnCJ0vo1k5Z0ubrr8zjL9wuVU8ESJzMCA==/HP_Portrait_Gucci-GIFT-GIVING-NOV25-Set-2-18-0547-C_001_Default.png"
              alt="Handbags"
              className="gift-image"
            />
            <p className="gift-label">Handbags</p>
          </a>

          <a href="/womens-shoes" className="gift-card">
            <img
              src="https://media.gucci.com/dynamic/b3c8/Wx3M1NTYeWrOuNP+qd8u97OclFqChNGVcoOubltax4wk44W4eTZA7FpxSKMK4WcAtcv1Yz+eHdy9sV8pQ2ctRpSVJTNXbLC2myXR9rGjN4oC1_lcfzu0xsq37CYtpn4AEN1WpB7Zi80kOtw9_NZq+LCcczgSKTRuKeAXdDJIDYM2HXComZzg1eH3Gy7kmkPS0UPSYjK48KV_BuWu56+QSsI8Ao_FI+uT8HgtuzLKxgQ1hr5u1KsMuFq+6EfZnxVc6LrhNCqMmQm_4pTQcVaT+z_IFpjMycrCxEhFKqTv9OHeMpn45wO+apuOU2J_G9nFCjMGh5qNilDRPop6KiwrnQ==/HP_Portrait_Gucci-GIFT-GIVING-NOV25-11B-BBY-GUC-14-0905_001_Default.png"
              alt="Women's Shoes"
              className="gift-image"
            />
            <p className="gift-label">Women's Shoes</p>
          </a>

          <a href="/mens-shoes" className="gift-card">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2rGJTK9mG3PSB9eUcawJIabxuXrG6XyaPoKk23raDNwdadIdP"
              alt="Men's Shoes"
              className="gift-image"
            />
            <p className="gift-label">Men's Shoes</p>
          </a>

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

      {/* MEN’S BAGS HERO */}
      <section className="gucci-hero-men">
        <div className="hero-men-content">
          <p>Men's Bags</p>
          <br />
          <br />
          <div className="buttons-bag">
            <button className="btn1">SHOP NOW</button>
          </div>
        </div>
      </section>

      {/* GUCCI SERVICES*/}

      <section className="services-section">
        <p className="services-title">GUCCI SERVICES</p>

        <div className="services-grid">
          {/* CARD 1 */}
          <div className="service-card">
            <video
              ref={video1}
              className="service-video"
              autoPlay
              muted
              loop
              playsInline
              src="https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/72a0a43c-b6a5-4e83-b80e-f82796b8a315/ab6d51c0-ffbd-47d0-b126-8887bcd0adf5/main.mp4?fastly_token=NjkyOGIyMTZfYzIwMWVjYjQ0OTU4YWRjMzQ3MDA0ZDY0NGU2NDNiNTNkYWU5ZTI1ZmQ2NDU5ODRmNzNjZDM2NTAyMDkwZmM5Yl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS83MmEwYTQzYy1iNmE1LTRlODMtYjgwZS1mODI3OTZiOGEzMTUvYWI2ZDUxYzAtZmZiZC00N2QwLWIxMjYtODg4N2JjZDBhZGY1L21haW4ubXA0"
            ></video>

            <button
              className="pause-btn"
              onClick={() => togglePlay(video1, setIsPlaying1, isPlaying1)}
            >
              {isPlaying1 ? <FaPause /> : <FaPlay />}
            </button>

            <p className="service-name">COLLECT IN STORE</p>
            <p className="service-desc">
              Order your gifts online and collect them from your preferred Gucci
              boutique.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="service-card">
            <video
              ref={video2}
              className="service-video"
              autoPlay
              muted
              loop
              playsInline
              src="https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/4687bdf7-c429-45dc-bbf4-dafe31dca93a/bc2a75f8-d2c4-4b71-b02a-6bd7ec0d3d95/main.mp4?fastly_token=NjkyOGMzYTlfNTMzNWJmYzZhOTUwMDRhOTBmOTIxOTgwZDJiNWRlNTM3YzM5YTg0MWNhZDQ1ZTQ0NGYwNGRhMzI3YmE2Y2IxYl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS80Njg3YmRmNy1jNDI5LTQ1ZGMtYmJmNC1kYWZlMzFkY2E5M2EvYmMyYTc1ZjgtZDJjNC00YjcxLWIwMmEtNmJkN2VjMGQzZDk1L21haW4ubXA0"
            ></video>

            <button
              className="pause-btn"
              onClick={() => togglePlay(video2, setIsPlaying2, isPlaying2)}
            >
              {isPlaying2 ? <FaPause /> : <FaPlay />}
            </button>

            <p className="service-name">PERSONALIZATION</p>
            <p className="service-desc">
              Emboss select bags, luggage, belts and leather accessories with
              initials to create a truly unique present.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="service-card">
            <video
              ref={video3}
              className="service-video"
              autoPlay
              muted
              loop
              playsInline
              src={gucciVisitStore1}
            ></video>

            <button
              className="pause-btn"
              onClick={() => togglePlay(video3, setIsPlaying3, isPlaying3)}
            >
              {isPlaying3 ? <FaPause /> : <FaPlay />}
            </button>

            <p className="service-name">BOOK AN APPOINTMENT</p>
            <p className="service-desc">
              Enjoy priority access to the boutique of your choice at the time
              and date that suits you.
            </p>
          </div>
        </div>
      </section>

      <ContactPanel open={contactOpen} setOpen={setContactOpen} />

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
