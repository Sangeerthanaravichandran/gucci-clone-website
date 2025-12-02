import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Child from "./Components/Child";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import ProductDetails from "./Components/productDetails";


function App() {
  const [count, setCount] = useState(0);

  return (
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
  );
}

export default App;
