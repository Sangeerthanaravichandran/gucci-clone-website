import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./Components/Landingpage";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Child from "./Components/Child";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import ProductDetails from "./Components/productDetails";

import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />

        {/* Use lowercase paths (recommended) */}
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/child" element={<Child />} />
        <Route path="/Login" element={< Login/>}/>

        {/* Product Detail Page FIXED */}
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
