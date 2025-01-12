import React from "react";
import { EmptyCart, RemoveItem, CarbonNeutral } from "./Icons";
import PortalExample from "./PortalExample";

function Cart({ cart, removeFromCart, calculateTotal }) {
  return (
    // "cart-container" არის კალთის მთავარი კონტეინერი სადაცაა შენახულია მონაცემები ხოლო
    //cart-title აჩვენებს და თვლის პროდუქტების რაოდენობას კალათაში
    <div className="cart-container"> 
      <h1 className="cart-title">Your Cart ({Object.keys(cart).length})</h1>
      {Object.keys(cart).length === 0 ? (
        // თუ კალათა ცარიელი ვაჩვენებთ ამ შეტყობინებას
        <div className="empty-cart-message">
          <EmptyCart />
          <p className="empty-message">Your added items will appear here</p>
        </div>
      ) : (
        // კალათაში არსებულ ყველა პრუდუქტს ვაჩვენებთ და mapს გადავატარებთ თითოულ ელემენტზე და მის დეტალებზე
        <>
          <ul className="cart-items-list">
            {Object.keys(cart).map((key) => (
              <li key={key} className="cart-item">
                <div className="cart-item-details">
                  <span className="item-name">
                    {cart[key].name} <br />
                  </span>
                  <span className="item-summary">
                    <div>
                      <span className="item-quantity">
                        {cart[key].quantity}x&nbsp;&nbsp;&nbsp;
                      </span>
                      <span className="item-price">
                        @ ${cart[key].price} &nbsp;&nbsp;&nbsp;
                      </span>
                      <span className="item-total">
                        ${cart[key].quantity * cart[key].price}
                      </span>
                    </div>
                    <button
                      className="remove-item-btn"
                      onClick={() => removeFromCart(cart[key])}
                    >
                      <RemoveItem />
                    </button>
                  </span>
                </div>
              </li>
            ))}
          </ul> 
          {
            // cart total აჩვენებს საერთო ღირებულებას ხოლო calculate total გამოთვლის ამ ღირებულებას,
            // carbon-neutral-info იმისთვის რომ არის თუ არა ეს პროდუქტები carbon-neutral
            // PortalExample არის სხვა კომპონენტი სადაც კალათის მონაცემებს ვაგზავნი
          }
          <div className="cart-summary">
            <div className="cart-total">
              <h3 className="total-text">
                Order Total: <span className="total-amount">${calculateTotal()}</span>
              </h3>
            </div>
            <div className="carbon-neutral-info">
              <p className="carbon-neutral-text">
                <CarbonNeutral /> This is a <strong>carbon-neutral</strong> delivery
              </p>
            </div>
            <PortalExample cart={cart} />
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;