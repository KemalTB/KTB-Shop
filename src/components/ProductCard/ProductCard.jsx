import React, { useState } from 'react';
import { products } from "../../helper/data";
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="container">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <div className="price">
            <h3>{(item.price).toFixed(2)}$</h3>
          </div>
          <img src={item.image} alt="user" />
          <div className="card-over">
            <h2 className="title">{item.title}</h2>
          </div>
          <EscapingButton />
        </div>
      ))}
    </div>
  );
};

const EscapingButton = () => {
  const [position, setPosition] = useState({ top: 10, left: 80 });

  const escapeButton = () => {
    const newTop = Math.random() * 80 + 10; // Yeni konumun %10 ile %90 arasında olması için
    const newLeft = Math.random() * 80 + 10; // Yeni konumun %10 ile %90 arasında olması için
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <button
      className="escaping-button"
      style={{ top: `${position.top}%`, left: `${position.left}%` }}
      onMouseEnter={escapeButton}
      onTouchStart={escapeButton} // Dokunmatik ekranlar için
    >
      Buy Now!
    </button>
  );
};

export default ProductCard;
