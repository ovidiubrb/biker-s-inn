import React from "react";
import { products } from "./ProductList";
import { useStateValue } from "./StateProvider";
import "./ProductInfo.css";

function ProductInfo(props) {
  const id = props.match.params.id;
  const prod = products.find((x) => x.id == id);
  const [{ cart }, dispatch] = useStateValue();
  const increase = () => {
    dispatch({
      type: "Increase",
      id: prod.id,
    });
  };

  const decrease = () => {
    dispatch({
      type: "Decrease",
      id: prod.id,
    });
  };

  const addToCart = () => {
    dispatch({
      type: "Add-to-Cart",
      payload: {
        img: prod.img,
        title: prod.title,
        price: prod.price,
        id: prod.id,
      },
    });
  };
  return (
    <div className="prodInfo">
      <div className="prodInfo__title">
        <h2>{prod.title}</h2>
        <img src={prod.img} alt="" />
      </div>
      <div className="prodInfo__description">
        <p>{prod.description}</p>
        <div className="prodInfo__price">
          <p>
            <strong>$ {prod.price}</strong>
          </p>
          {cart.findIndex((x) => x.id == prod.id) < 0 ? (
            <button onClick={addToCart}>Add to Cart</button>
          ) : (
            <div className="prodInfo__inCart">
              <p className="prodInfo__increase" onClick={decrease}>
                <strong>-</strong>
              </p>
              <div className="product__qty">
                {}
                <p className="product__qtyNumber">
                  <strong>
                    {cart[cart.findIndex((x) => x.id == prod.id)].quantity}
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
    </div>
  );
}

export default ProductInfo;
