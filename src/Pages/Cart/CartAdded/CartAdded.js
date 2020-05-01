import React, { Component } from "react";
import CartItem from "./CartItem/CartItem";
import Plusimg from "../../../Images/CartAdd-plus.png";
import Minusimg from "../../../Images/CartAdd-minus.png";
import "./CartAdded.scss";

export class CartAdded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickbutton: [false, false],
      showModal: false,
      totalPrice: [],
    };
  }

  getTotalPrice = (price) => {
    const totalPrice = this.state.totalPrice;
    totalPrice.push(price);
    console.log(totalPrice);

    this.setState({
      totalPrice: totalPrice,
    });
  };

  handleClick = (num) => {
    let arr = this.state.clickbutton;
    arr[num] = !arr[num];
    this.setState({
      clickbutton: arr,
    });
  };

  handleOpenModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  handleCloseModal = () => {
    this.setState(
      {
        showModal: false,
      },
      console.log(this.state.showModal)
    );
  };

  render() {
    const { totalPrice } = this.state;

    let totalCost = 0;
    if (totalPrice.length > 0) {
      totalCost = totalPrice.reduce((acc, cur) => {
        return acc + cur;
      });
    }

    return (
      <div className="CartAdded">
        <div className="cart-wrap">
          <div className="cart-empty">
            <div className="cart-name">
              <p className="cart-list"> 장바구니 ({this.props.cart.length}) </p>
              <div className="cart-all">
                {this.props.cart.map((cartItem) => {
                  return (
                    <CartItem
                      showModal={this.state.showModal}
                      handleOpenModal={this.handleOpenModal}
                      handleCloseModal={this.handleCloseModal}
                      cartItem={cartItem}
                      getTotalPrice={this.getTotalPrice}
                    />
                  );
                })}
                <div className="clear-cart">장바구니 비우기</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-summary">
          <h2 class="summary-title">주문금액</h2>
          <div class="summary-content">
            <div class="order-totals">
              <div class="order-total-item">
                <span class="label-align-center">상품금액</span>
                <span class="value">
                  <span class="sale"> {totalCost}원 </span>
                </span>
              </div>
              <div class="order-total-item">
                <span class="label-align-center">배송비</span>
                <span class="value">0 원</span>
              </div>

              <div class="order-total-item">
                <span class="label-center">총 할인 금액</span>
                <span class="value">0 원</span>
              </div>

              <div class="order-total-highlight">
                <span class="label flex flex-align-center">총 결제 금액</span>
                <span class="value">{totalCost}원</span>
              </div>
            </div>
            <div className="order-checkout">
              <div className="first-buttonlogin">
                <button className="click-login">주문하기</button>
              </div>
            </div>
          </div>
          <div className="cart-entry-promo">
            <a href="/#" class="promo-message">
              고객님의 프로모션 코드를 지금 확인하세요!
            </a>
          </div>

          <div className="input-code">
            <div className="row-flex-no">
              <input
                type="text"
                className="promo-code"
                name="promoCode"
                placeholder="코드입력"
              />
            </div>

            <div class="submit-promo">
              <button type="submit" className="btn-submit">
                적용
              </button>
            </div>
          </div>

          <div className="guide">
            <div className="movement-guide">
              <div className="movement-content">
                <button
                  className="movement-icon"
                  onClick={() => {
                    this.handleClick(0);
                  }}
                >
                  <p> 이용 안내 </p>
                  <img
                    className="plus-icon"
                    src={this.state.clickbutton[0] ? Minusimg : Plusimg}
                    alt="icon"
                  />
                </button>
                <div className={this.state.clickbutton[0] ? "block" : "move"}>
                  <ul className="movement-ultag">
                    <li className="movement-litag">
                      실 결제 금액은 주문서 내 고객님의 쿠폰/할인 적용에 따라
                      달라집니다.
                    </li>
                    <li className="movement-litag">
                      실제 쿠폰코드의 적용여부는 금액에서 확인하여 주세요.
                    </li>
                    <li className="movement-litag">
                      적용되지 않는 쿠폰은 등록은 되나 금액은 변동되지 않습니다.
                    </li>
                    <li className="movement-litag">
                      프로모션 제품은 중복할인 또는 쿠폰 사용이 불가합니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="delivery-guide">
              <div className="delivery-content">
                <button
                  className="delivery-icon"
                  onClick={() => {
                    this.handleClick(1);
                  }}
                >
                  <p> 배송비 안내 </p>
                  <img
                    className="plus-icon"
                    src={this.state.clickbutton[1] ? Minusimg : Plusimg}
                    alt="icon"
                  />
                </button>
                <div className={this.state.clickbutton[1] ? "block" : "move"}>
                  <ul className="movement-ultag">
                    <li className="movement-litag">
                      총 구매금액이 5만원 이상인 경우,배송비는 무료입니다.
                      (5만원 미만인 경우,배송비 2,500원이 별도 부가됩니다.)
                    </li>
                    <li className="movement-litag">
                      장기간 장바구니에 보관하신 상품은 시간이 지남에 따라
                      가격과 혜택이 변동 될 수 있으며, 최대 30일 동안
                      보관됩니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CartAdded;
