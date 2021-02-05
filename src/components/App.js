import React, { Component } from "react";
import burgers from "../data/burgers";
import BurgerList from "./BurgerList";
import Navbar from "./Navbar";
import Cart from "./Cart";
import "../styles/App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      burgers: burgers.map((b) => ({ ...b, qty: 0 })),
      inCart: false,
    };
    this.updateQty = this.updateQty.bind(this);
    this.updateInCart = this.updateInCart.bind(this);
  }
  updateQty(delta, burger) {
    this.setState((currSt) => ({
      burgers: currSt.burgers.map((b) =>
        b.name === burger ? { ...b, qty: b.qty + delta } : b
      ),
    }));
  }
  updateInCart(flag) {
    this.setState((currSt) => ({
      inCart: flag,
    }));
  }
  render() {
    const { burgers, inCart } = this.state;
    return (
      <div>
        <Navbar
          totalItems={burgers.reduce((sum, b) => b.qty + sum, 0)}
          updateInCart={this.updateInCart}
        />

        {inCart ? (
          <Cart
            burgers={burgers.filter((b) => b.qty)}
            updateInCart={this.updateInCart}
            updateQty={this.updateQty}
          />
        ) : (
          <BurgerList burgers={burgers} updateQty={this.updateQty} />
        )}
        <div className="App-footer">Keep Loving Us ♥</div>
      </div>
    );
  }
}
