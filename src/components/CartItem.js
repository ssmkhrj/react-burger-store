import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    const { burger, updateQty } = this.props;
    const { name, price, qty } = burger;
    return (
      <div className="row Item border-bottom">
        <div className="col-9 col-sm-5 order-sm-1">{name}</div>
        <div className="col-3 col-sm-2 text-end order-sm-4">₹{price * qty}</div>
        <div className="col-3 mt-2 mt-sm-0 col-sm-2 text-start order-sm-2 text-sm-end">
          ₹{price}
        </div>
        <div className="col-9 mt-2 mt-sm-0 col-sm-3 text-start order-sm-3 text-sm-end">
          <div>
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={() => updateQty(-1, name)}
              disabled={!qty}
            >
              <i className="fas fa-caret-down"></i>
            </button>
            <div type="text" className="btn btn-sm" style={{ width: 35 }}>
              {qty}
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={() => updateQty(1, name)}
            >
              <i className="fas fa-caret-up"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
