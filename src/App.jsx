import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./Components/Landingpage";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Child from "./Components/Child";
import Contact from "./Components/Contact";
<<<<<<< HEAD
import Login from "./Components/Login";
import ProductDetails from "./Components/productDetails";

=======
import ProductDetails from "./Components/ProductDetails";
>>>>>>> 557b7b47a6e11856190d7c7489fbf17c0e90a80e

function App() {
  return (
<<<<<<< HEAD
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path="/Men" element={<Men />}></Route>
          <Route path="/Women" element={<Women />}></Route>
          <Route path="/Child" element={<Child />}></Route>
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/Login" element={< Login/>}/>
          <Route path="/ProductDetails" element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />

        {/* Use lowercase paths (recommended) */}
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/child" element={<Child />} />

        {/* Product Detail Page FIXED */}
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 557b7b47a6e11856190d7c7489fbf17c0e90a80e
  );
}

export default App;
