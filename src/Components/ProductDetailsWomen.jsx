import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./productwomen"; // ✅ FIXED
import "./ProductDetailsWomen.css";
import { addToCartStorage } from "./cartStorage";

export default function ProductDetailsWomen() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [active, setActive] = useState(0);

  if (!product) return <h2>Product Not Found</h2>;

  const images = Array.isArray(product.img) ? product.img : [product.img];

   const handleAddToBag = () => {
      addToCartStorage(product);
      alert("Added to Bag!");
    };

  return (
    <div className="detail-wrapper">
      <div className="detail-left">
        <img className="main-image" src={images[active]} alt={product.title} />

        <div className="thumb-row">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`thumb ${index === active ? "active-thumb" : ""}`}
              onClick={() => setActive(index)}
              alt="thumbnail"
            />
          ))}
        </div>
      </div>

      <div className="detail-right">
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <p>{product.Description}</p>

        <button className="bag-btn" onClick={handleAddToBag}>
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}
