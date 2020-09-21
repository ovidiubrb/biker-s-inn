import React from "react";
import "./CartProduct.css";
import { useStateValue } from "./StateProvider";
import {
  AiFillPlusCircle,
  AiFillDelete,
  AiFillMinusCircle,
} from "react-icons/ai";

function CheckoutProduct({ title, img, price, id, qty }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "Remove-from-Cart",
      id: id,
    });
  };
  const increase = () => {
    dispatch({
      type: "Increase",
      id: id,
    });
  };

  const decrease = () => {
    dispatch({
      type: "Decrease",
      id: id,
    });
  };
  return (
    <div className="cartProduct">
      <div className="cartProduct__info">
        <p>{title}</p>
        <img className="cartProduct__img" src={img} alt={title} />
      </div>

      <div className="cartProduct__price">
        <p>$ {price}</p>
        <p>qty:{qty}</p>
        <div className="cart__buttons">
          {qty > 1 ? (
            <button onClick={decrease} className="cart__button">
              <AiFillMinusCircle size={20} />
            </button>
          ) : (
            <button
              onClick={removeFromCart}
              className="cart__button"
              title="remove"
            >
              <AiFillDelete size={20} style={{ color: "red" }} />
            </button>
          )}
          <button onClick={increase} className="cart__button">
            <AiFillPlusCircle size={20} />
          </button>
        </div>
      </div>
      <div className="cartProduct__subtotal">
        <h4 id="subtotal">Subtotal: $ {qty * price}</h4>
      </div>
    </div>
  );
}

export default CheckoutProduct;
