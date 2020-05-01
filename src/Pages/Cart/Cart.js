import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SERVICE_CART_URL, CART_URL } from "../../Config";

import CartEmpty from "./CartEmpty/CartEmpty";
import CartAdded from "./CartAdded/CartAdded";

import "./Cart.scss";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [] && false,
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("access_token");

    fetch(`${SERVICE_CART_URL}`, {
      headers: {
        Authorization: token,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState(
          {
            // cart: res.cart,
            cart: res.cart_list[0],
          },
          () => console.log(this.state.cart)
        )
      );
  }

  render() {
    return (
      <>
        {this.state.cart && this.state.cart.length > 0 ? (
          <CartAdded cart={this.state.cart} />
        ) : (
          <CartEmpty />
        )}
      </>
    );
  }
}
export default Cart;
