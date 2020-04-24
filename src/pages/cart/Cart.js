import React, { Component } from "react";
import "./Cart.scss";

export class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <div className="cart-wrap">
          <div className="cart-empty">
            <div className="cart-name">
              <p className="cart-list"> 장바구니 (0) </p>
              <div className="cart-bottomline"></div>
            </div>

            <div className="cart-emptycontent">
              <p className="in-nothing"> 장바구니에 담긴 상품이 없습니다. </p>
              <p className="in-nothingcontent">
                {" "}
                척테일러, 척 70, 잭퍼셀, 원스타 등 지금 컨버스의 다양한 상품을
                찾아보세요.{" "}
              </p>

              <div className="first-buttonlogin">
                <button className="click-login">쇼핑 계속 하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
