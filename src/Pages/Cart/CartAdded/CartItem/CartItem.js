import React, { Component } from "react";
import Modal from "../../../Modal/modal";
import "./CartItem.scss";

export class CartItem extends Component {
  componentDidMount() {
    const { price } = this.props.cartItem;
    this.props.getTotalPrice(price);
  }

  render() {
    const {
      name,
      url,
      color_name,
      size,
      quantity,
      price,
    } = this.props.cartItem;
    return (
      <div className="CartItem">
        <div className="cart-bottomimg">
          <img className="cart-imgsize" src={url} alt="" />
        </div>
        <div className="cart-content">
          <div className="shoseinfo">
            <div className="shoseinfo-left">
              <a href="/#">{name}</a>

              <div className="shose-info">
                <span className="shoes-color">{color_name}</span>
                <span> / </span>
                <span className="shoes-size">{size}</span>
              </div>

              <div className="shoes-amount">
                <span> 수량 : {quantity} </span>
              </div>
            </div>

            <div className="shoseinfo-right">
              <span className="price"> {price}원</span>
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

export default CartItem;
