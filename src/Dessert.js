import React from "react";
import { AddToCart, DecrementQuantity, IncrementQuantity } from "./Icons";

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/";
// ესაა dessert kომპონენტი რომელიც იღებს რამოდენიმე props და returnს ვიყენებთ jsx კომპონენტის გამოსაჩენად
function Dessert({ products, cart, addToCart, decrementQuantity, incrementQuantity }) {
  return (
    <div className="products-container">
      <h1 className="products-header">Desserts</h1>
      <div className="new-products">
        {
            //mapით ყველა პროდუქტი გადადის jsxში, დესერტი რენდერირდება product მასივის მიხედვით
            // მერე კალათაში არსებული პროდუქტის რაოდენობა გამოითვლება და თუ პროდუქტი არაა რაოდენობა 0 იქნება
        }
        {products.map((dessert) => {
          const quantity = cart[dessert.name]?.quantity || 0;
// თითოეული დესერტი გადაეცმა როგორც product card კომპონენტი,
//  key={dessert.name} კი ვიყენებ Reactის მიერ პროდუქტების განახლების სწორად ამოცნობითვის
          return (
            <div key={dessert.name} className="product-card">
              <div className="product-image-container">
                {
                    // შესაბამის სურათს აჩვენებს 
                }
                <picture>
                  <source
                    media="(max-width: 600px)"
                    srcSet={BASE_URL + dessert.images.mobile}
                  />
                  <source
                    media="(min-width: 600px) and (max-width: 1150px)"
                    srcSet={BASE_URL + dessert.images.tablet}
                  />
                  <img
                    src={BASE_URL + dessert.images.desktop}
                    alt={dessert.name}
                    className="product-image"
                  />
                </picture>
                {
                    // თუ პროდუქტი კალათაშია იქნება "add-to-cart-orange" თუ არა "add-to-cart"}
                    // თუ პროდუქტს არ აქვს რაოდენობა addToCart ფუნქცია განხორციელდება
                    // თუ პროდუქტი უკვე კალათშია, მაშინ მას აქვს ღილაკები რაოდენობის გაზრდისა და შემცირებისათვის
                }
                <button
                  className={quantity === 0 ? "add-to-cart" : "add-to-cart-orange"}
                  onClick={quantity === 0 ? () => addToCart(dessert) : null}
                >
                  {quantity === 0 ? (
                    <>
                      <AddToCart />
                      <h5 className="add-to-cart-text">Add to Cart</h5>
                    </>
                  ) : (
                    <>
                    {
                        // 1) როდესაც ღილაკზე დააჭერენ, decrementQuantity ფუნქცია გაივლის შესაბამის "dessert" ობიექტს და ამცირებს მის რაოდენობას.
                        // 2) როდესაც ღილაკზე დააჭერენ, incrementQuantity ფუნქცია მატებს აღნიშნულ "dessert" ობიექტს კალათაში.
                       
                    }
                      <button
                        className="decrease-btn"
                        onClick={() => decrementQuantity(dessert)}
                      >
                        <DecrementQuantity />
                      </button>
                      <h3 className="quantity-header">{quantity}</h3>
                      <button
                        className="increase-btn"
                        onClick={() => incrementQuantity(dessert)}
                      >
                        <IncrementQuantity />
                      </button>
                    </>
                  )}
                </button>
              </div>
              <div className="product-details">
                <h2 className="product-category">{dessert.category}</h2>
                <h1 className="product-name">{dessert.name}</h1>
                <h2 className="product-price">${dessert.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dessert;