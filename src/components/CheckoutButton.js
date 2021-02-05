import React, { Component } from "react";

export default class CheckoutButton extends Component {
  render() {
    return (
      <>
        <button
          className="btn btn-primary mt-4"
          data-bs-toggle="modal"
          data-bs-target="#notavailable"
        >
          Checkout
        </button>
        <div
          className="modal fade"
          id="notavailable"
          tabIndex="-1"
          aria-labelledby="checkoutnotavailable"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                Checkout functionality is not yet available.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
