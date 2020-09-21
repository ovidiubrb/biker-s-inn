import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CartProduct";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  console.log(cart);
  return (
    <div className="cart">
      <div className="cart__left">
        {cart.length == 0 && (
          <h2 id="empty_basket">
            Your Basket is empty, please check the
            <Link to="/products" style={{ textDecoration: "none" }}>
              {" "}
              product page
            </Link>
          </h2>
        )}
        {cart.map((x) => (
          <CheckoutProduct
            title={x.title}
            id={x.id}
            img={x.img}
            price={x.price}
            qty={x.quantity}
            key={x.id}
          />
        ))}
        {cart.length >= 1 && (
          <div>
            <button onClick={() => dispatch({ type: "Clear" })} id="clearCart">
              Clear Cart
            </button>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart__info">
          <h1>Bikers Inn</h1>
          <h2 id="totalPrice">
            Items in cart : {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
          </h2>
          <h2>Total Price: $ {totalPrice}</h2>
          <button>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
