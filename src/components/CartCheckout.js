import React, { Component } from "react";

export default class CartCheckout extends Component {
  render() {
    const { subtotal } = this.props;
    const delivery = subtotal > 300 ? 0 : 100;
    const total = subtotal + delivery;
    return (
      <>
        <div className="row Item border-bottom border-3">
          <div>Cart Totals</div>
        </div>
        <div className="row Item border-bottom">
          <div className="col">Subtotal</div>
          <div className="col text-end">₹{subtotal}</div>
        </div>
        <div className="row Item border-bottom">
          <div className="col-4">Delivery</div>
          <div className="col-8 text-end">₹{delivery}</div>
          <div className="col-12 text-end delivery-text">
            Free Delivery For Orders Above ₹300
          </div>
        </div>
        <div className="row Item border-bottom">
          <div className="col">Total</div>
          <div className="col text-end">₹{total}</div>
        </div>
      </>
    );
  }
}
