import React from "react";
import { OrderConfirmed } from "./Icons";
import dessert from "./data.json";

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/";
// react კომპონენტს გადავცემთ 2 props
// შემდეგ რაც წერია მაგით გვერდი რეფრეშდება
export default function ModalContent({ cart, onClose }) {
  const handleStartNewOrder = () => {
    window.location.reload();
  };
//ეს ფუნქცია გვიჩვენებს კალათის ჯამურ ღირებულებას
  const calculateCartTotal = () => {
    return Object.keys(cart).reduce((total, key) => {
      return total + cart[key].quantity * cart[key].price;
    }, 0);
  };

  return (
    <div className="modal-container">
      <OrderConfirmed />
      <div className="order-status">Order Confirmed</div>
      <div className="order-message">We hope you enjoy your food!</div>
      <div className="order-summary-container">
        <ul className="order-item-list">
          {Object.keys(cart).map((key) => ( // ვარენდერებ დესერტებს, ვქმნი სიას
            <li key={key} className="order-item">
              <div className="order-item-details">
                <img
                  src={`${BASE_URL}${cart[key].images.thumbnail}`}
                  alt={cart[key].name}
                  className="item-thumbnail"
                />
                <div className="order-item-info">
                  {cart[key].name}
                  <br />
                  {cart[key].quantity} x ${cart[key].price}
                </div>
                <div className="order-item-total">
                  ${cart[key].quantity * cart[key].price}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="order-total-container">
          Order Total: ${calculateCartTotal()}
        </div>
      {
        // ამ ღილაკზე დაჭერით შეგიძლია შეკვეთა თავიდან დაიწყო, ფუნქციით გვერდი რეფრეშდება
      }
      </div>
      <button onClick={handleStartNewOrder} className="new-order-button">
        Start New Order
      </button>
    </div>
  );
}