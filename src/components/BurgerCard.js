import React, { Component } from "react";
import "../styles/BurgerCard.css";

export default class BurgerCard extends Component {
  render() {
    const { burger, updateQty } = this.props;
    const { name, price, isVeg, imageURL, qty } = burger;
    return (
      <div className="shadow-sm border-4 card m-2 col-sm-4 col-lg-3">
        <div className="price-tag">₹{price}</div>
        <div
          className="img-wrapper"
          style={{ background: `url(${imageURL})` }}
        ></div>
        <div className="card-body">
          <div className="card-title">
            <div
              className="veg-mark"
              style={{ backgroundColor: isVeg ? "#198754" : "#dc3545" }}
            ></div>
            {name}
          </div>
          <div className="btn-container">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => updateQty(1, name)}
            >
              Add
            </button>
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
      </div>
    );
  }
}
