import React from "react";
import "./Nav.css";
import logo from "./bike.png";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Nav() {
  const [{ cart }] = useStateValue();
  console.log(cart);
  return (
    <div className="nav">
      <Link to="/">
        <img className="nav__logo" src={logo} alt="Bike " />
      </Link>

      <div className="nav__options">
        <Link to="/products" style={{ textDecoration: "none" }}>
          <p className="nav__option">Products</p>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <p className="nav__option">Contact</p>
        </Link>

        <Link to="/cart" style={{ textDecoration: "none", display: "flex" }}>
          <p className="nav__option">Cart</p>

          {cart.length != 0 ? (
            <p className="nav__counter">
              ({cart.reduce((acc, curr) => acc + curr.quantity, 0)})
            </p>
          ) : (
            <p></p>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Nav;
