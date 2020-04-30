import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    this.setState(
      {
        // cart: res.cart,
        cart: [
          {
            name: "척 70 컨크리트 히트",
            url:
              "https://image.converse.co.kr/cmsstatic/product/167677C_167677C_primary.jpg?gallery=",
            color_name: "일렉트릭블러쉬",
            size: "245",
            quantity: 3,
            price: 95000,
          },
          {
            name: "척 70 컨크리트 히트",
            url:
              "https://image.converse.co.kr/cmsstatic/product/167678C_167678C_primary.jpg?gallery=",
            color_name: "화이트",
            size: "225",
            quantity: 2,
            price: 89000,
          },
          {
            name: "척테일러 올스타 컷어웨이",
            url:
              "https://image.converse.co.kr/cmsstatic/product/150249C_150249C_primary.jpg?gallery=",
            color_name: "네이비",
            size: "225",
            quantity: 2,
            price: 45000,
          },
          {
            name: "척테일러 올스타 컷어웨이",
            url:
              "https://image.converse.co.kr/cmsstatic/product/150247C_150247C_primary.jpg?gallery=",
            color_name: "블랙",
            size: "Free Size",
            quantity: 1,
            price: 45000,
          },
        ],
      },
      () => console.log(this.state.cart)
    );

    fetch("/cart")
      .then((res) => res.json())
      .then((res) =>
        this.setState(
          {
            // cart: res.cart,
            cart: [{ code: "161723C", size: "220", quantity: 3 }],
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
