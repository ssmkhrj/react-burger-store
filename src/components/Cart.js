import React, { Component } from "react";
import CartCheckout from "./CartCheckout";
import CartItem from "./CartItem";
import "../styles/Cart.css";
import CheckoutButton from "./CheckoutButton";

export default class Cart extends Component {
  render() {
    const { burgers, updateInCart, updateQty } = this.props;
    return (
      <section
        className="container"
        style={{ paddingTop: 100, paddingBottom: 100 }}
      >
        {burgers.length > 0 ? (
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="row Item border-bottom border-3">
                <div className="col-9 col-sm-5">Product</div>
                <div className="d-none d-sm-block col-sm-2 text-end">Price</div>
                <div className="d-none d-sm-block col-sm-3 text-end">
                  Quantity
                </div>
                <div className="col-3 col-sm-2 text-start text-end">
                  Subtotal
                </div>
              </div>
              {burgers.map((b) => (
                <CartItem key={b.name} burger={b} updateQty={updateQty} />
              ))}
              <button
                className="btn btn-primary mt-4"
                onClick={() => updateInCart(false)}
              >
                Continue Shopping
              </button>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <CartCheckout
                subtotal={burgers.reduce((sum, b) => sum + b.price * b.qty, 0)}
              />
              <CheckoutButton />
            </div>
          </div>
        ) : (
          <>
            <h5>Please Add Some Items To Continue</h5>
            <button
              className="btn btn-primary mt-4"
              onClick={() => updateInCart(false)}
            >
              Continue Shopping
            </button>
          </>
        )}
      </section>
    );
  }
}
