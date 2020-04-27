import React, { Component } from "react";
import "./Cartadd.scss";
import Plusimg from "../../Images/Cartadd-plus.png";
import Minusimg from "../../Images/Cartadd-minus.png";
import Modal from "../Modal/modal";

export class Cartadd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickbutton: [false, false],
      showModal: false,
    };
  }

  handleClick = (num) => {
    let arr = this.state.clickbutton;
    arr[num] = !arr[num];
    this.setState({
      clickbutton: arr,
    });
  };

  handleOpenModal = () => {
    this.setState({
      showModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div className="Cartadd">
        <div className="cart-wrap">
          <div className="cart-empty">
            <div className="cart-name">
              <p className="cart-list"> 장바구니 (1) </p>
              <div className="cart-all">
                <div className="cart-bottomline">
                  <div className="cart-bottomimg">
                    <img
                      className="cart-imgsize"
                      src="https://image.converse.co.kr/cmsstatic/product/167708C_167708C_primary.jpg?browse"
                      alt=""
                    />
                  </div>

                  <div className="cart-content">
                    <div className="shoseinfo">
                      <div className="shoseinfo-left">
                        <a href="/#">
                          척 70 아카이브 프린트 스타 앤 스트라이프
                        </a>

                        <div className="shose-info">
                          <span className="shoes-color"> 블랙</span>
                          <span> / </span>
                          <span className="shoes-size"> 270 </span>
                        </div>

                        <div className="shoes-amount">
                          <span> 수량 : 1 </span>
                        </div>
                      </div>

                      <div className="shoseinfo-right">
                        <span className="price"> 95,000원</span>
                        <div className="button">
                          <input
                            className="input-account"
                            type="text"
                            placeholder=""
                          />

                          <button className="minus-button"> - </button>
                          <button className="plus-button"> + </button>
                        </div>
                      </div>
                    </div>

                    <div className="add-wishlist">
                      <div className="wishlist">
                        <div className="wishlist-content">
                          <img
                            className="wishlist-img"
                            src="https://image.flaticon.com/icons/svg/535/535285.svg"
                            alt=""
                          />
                          <span className="wishlist-add">위시리스트 추가</span>
                        </div>
                        <div className="buy-after">
                          <img
                            className="buy-afterimg"
                            src="https://image.flaticon.com/icons/svg/2088/2088617.svg"
                            alt=""
                          />
                          <span className="buy-left"> 나중에 구매하기 </span>
                        </div>
                      </div>

                      <div className="option">
                        <button
                          className="change-option"
                          onClick={this.handleOpenModal}
                        >
                          {this.state.showModal && <Modal />}
                          옵션 변경
                        </button>

                        <a href="/#" className="delete-option">
                          삭제
                        </a>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
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
                  <span class="sale"> 95,000원 </span>
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
                <span class="value">95,000 원</span>
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
                  <img className="plus-icon" src={Minusimg} alt="" />
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
                  <img className="plus-icon" src={Minusimg} alt="" />
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
export default Cartadd;
