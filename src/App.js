import React, { useState } from "react";
import Dessert from "./Dessert";
import Cart from "./Cart";
import "./App.css";
import dessertProducts from "./data.json";

//ვიყენებ usestate რომ შერჩეული დესერტები და რაოდენობა შეინახოს, თავიდან ობიექტი ცარიელია
function App() {
  const [cart, setCart] = useState({});

// დესერტს ვამატებ კალათაში, რაოდენობა შეიცვლება 1ით, თუ დესერტი არ არის ჯერ დამატებული, დაემატება რაოდენობით 1 
  const addToCart = (dessert) => {
    setCart((prevCart) => ({
      ...prevCart,
      [dessert.name]: {
        ...dessert,
        quantity: (prevCart[dessert.name]?.quantity || 0) + 1,
      },
    }));
  };

//როცა გვინდა რაიმე დესერტის წშლა და ღილაკს დავაჭერთ 1თ შემცირდება
  const decrementQuantity = (dessert) => {
    const updatedCart = { ...cart };
    if (updatedCart[dessert.name]?.quantity > 1) {
      updatedCart[dessert.name].quantity -= 1;
    } else {
      delete updatedCart[dessert.name];
    }
    setCart(updatedCart);
  };
//როცა დამატება გვინდა და ღილაკს დავაჭერთ 1ით გაიზრდება
  const incrementQuantity = (dessert) => {
    setCart((prevCart) => ({
      ...prevCart,
      [dessert.name]: {
        ...dessert,
        quantity: (prevCart[dessert.name]?.quantity || 0) + 1,
      },
    }));
  };
//მთლიანად შლის დესერტს
  const removeFromCart = (dessert) => {
    const updatedCart = { ...cart };
    delete updatedCart[dessert.name];
    setCart(updatedCart);
  };
//ჯამური თანხისთვის
  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, key) => {
      const item = cart[key];
      return total + item.quantity * item.price;
    }, 0);
  };


  //dessert კომპონენტს გადავცემ პროდუქტების სიას და ფუნქციებს Cart კომპონენტს კალათის მონაცემები
  return (
    <div className="all">
      <Dessert
        products={dessertProducts}
        cart={cart}
        addToCart={addToCart}
        decrementQuantity={decrementQuantity}
        incrementQuantity={incrementQuantity}
      />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}
