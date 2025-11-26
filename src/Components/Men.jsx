import React from 'react'
import { Link } from "react-router-dom";

function Men() {
  return (
    <>
          <nav>
            <Link to="/">Landingpage</Link>
            <Link to="/Men">Men</Link>
            <Link to="/Women">Women</Link>
            <Link to="/Child">Child</Link>
          </nav>
          
          <div>
            <h1>Men page </h1>
          </div>
        </>
  )
}

export default Men
