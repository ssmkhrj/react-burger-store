import React, { Component } from "react";
import BurgerCard from "./BurgerCard";

export default class BurgerList extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ searchTerm: evt.target.value });
  }

  render() {
    const { searchTerm } = this.state;
    const { burgers, updateQty } = this.props;
    const searchedBurgers = burgers.filter((b) =>
      b.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <section
        className="container"
        style={{ paddingTop: 100, paddingBottom: 100 }}
      >
        <input
          className="form-control mb-4 mx-auto"
          style={{ maxWidth: 400 }}
          type="text"
          value={searchTerm}
          placeholder="Search Burgers"
          onChange={this.handleChange}
        />
        <div className="row justify-content-center">
          {searchedBurgers.map((b) => (
            <BurgerCard key={b.name} burger={b} updateQty={updateQty} />
          ))}
        </div>
      </section>
    );
  }
}
