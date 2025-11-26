import React from 'react'
import {Link} from 'react-router-dom'


export default function Landingpage() {
  return (
    <>
      <nav>
        <Link to="/">Landingpage</Link>
        <Link to="/Men">Men</Link>
        <Link to="/Women">Women</Link>
        <Link to="/Child">Child</Link>
      </nav>

{/* herosection */}
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
