import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./Components/Landingpage";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Child from "./Components/Child";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import ProductDetails from "./Components/ProductDetails";
import ProductDetailsWomen from "./Components/ProductDetailsWomen";

import Cart from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />

        {/* Use lowercase paths (recommended) */}
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/child" element={<Child />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/cart" element={<Cart />} />

        {/* Product Detail Page FIXED */}
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/women/product/:id" element={<ProductDetailsWomen />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
