import React, { useState, useEffect } from "react";

function App() {
  const [desserts, setDesserts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (dessert) => {
    setCart((prevCart) => [...prevCart, dessert]);
    alert(`${dessert.name} added to cart!`);
  };

  return (
    <div id="dessert-list">
      {desserts.map((dessert) => (
        <div key={dessert.id} className="dessert-item">
          <img src={dessert.image} alt={dessert.name} className="dessert-image" />
          <h3 className="dessert-name">{dessert.name}</h3>
          <p className="dessert-category">Category: {dessert.category}</p>
          <p className="dessert-price">Price: ${dessert.price}</p>
          <button onClick={() => addToCart(dessert)} className="Add-to-cart">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
