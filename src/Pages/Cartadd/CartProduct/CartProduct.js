import React, { Component } from "react";
import Modal from "../../Modal/modal";
import "./CartProduct.scss";

export class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      size: "",
      amount: "",
      price: "",
    };
  }
  render() {
    return (
      <div className="CartProduct">
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
              <a href="/#">{this.props.name}</a>

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
                <input className="input-account" type="text" placeholder="" />

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
                onClick={this.props.handleOpenModal}
              >
                {this.props.showModal ? (
                  <Modal closeModal={this.props.handleCloseModal} />
                ) : (
                  ""
                )}
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
    );
  }
}

export default CartProduct;
