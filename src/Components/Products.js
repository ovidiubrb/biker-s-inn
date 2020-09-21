import React from "react";
import "./Products.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Products({ img, title, price, id }) {
  const [{ cart }, dispatch] = useStateValue();

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

  const addToCart = () => {
    dispatch({
      type: "Add-to-Cart",
      payload: {
        img: img,
        title: title,
        price: price,
        id: id,
      },
    });
  };

  return (
    <div className="product__info">
      <Link
        to={`/products/${id}/${title}`}
        style={{ textDecoration: "none", color: "#111" }}
      >
        <h2>{title}</h2>
        <img className="product__img" src={img} alt={title} />
      </Link>
      <div className="product__price">
        <p>$ {price}</p>
        {cart.findIndex((x) => x.id == id) < 0 ? (
          <button onClick={addToCart}>Add to Cart</button>
        ) : (
          <div className="product__inCart">
            <p className="product__increase" onClick={decrease}>
              <strong>-</strong>
            </p>
            <div className="product__qty">
              {}
              <p className="product__qtyNumber">
                <strong>
                  {cart[cart.findIndex((x) => x.id == id)].quantity}
                </strong>
              </p>
              <p className="product__qtyText">in basket</p>
            </div>
            <p className="product__decrease" onClick={increase}>
              <strong>+</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
