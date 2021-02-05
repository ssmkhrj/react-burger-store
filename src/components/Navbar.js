import React, { Component } from "react";
import "../styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    const { totalItems, updateInCart } = this.props;
    return (
      <nav className="navbar fixed-top navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <button
            className="btn btn-link btn-navbar btn-brandname"
            onClick={() => updateInCart(false)}
          >
            BurgerMania
          </button>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search Burgers"
              aria-label="Search Burgers"
            />
          </form> */}
          <button
            className="btn btn-link btn-navbar"
            style={{ marginLeft: "auto" }}
            onClick={() => updateInCart(true)}
          >
            Cart{" "}
            {totalItems !== 0 && (
              <span className="badge bg-primary">{totalItems}</span>
            )}
          </button>
        </div>
      </nav>
    );
  }
}
