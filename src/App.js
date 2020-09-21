import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import "./App.css";
import ProductList from "./Components/ProductList";
import { CartProvider } from "./Components/CartContext";
import ProductInfo from "./Components/ProductInfo";
import Slideshow from "./Components/Carousel";
import Contact from "./Components/Contact";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Router>
          <Switch>
            <Route
              path="/products/:id"
              render={(props) => (
                <>
                  <Nav />
                  <ProductInfo {...props} />
                </>
              )}
            />
            <Route path="/products">
              <Nav />
              <ProductList />
            </Route>
            <Route path="/contact">
              <Nav />
              <Contact />
            </Route>
            <Route path="/cart">
              <Nav />
              <Cart />
            </Route>
            <Route path="/">
              <Nav />
              <Slideshow />
            </Route>
          </Switch>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
