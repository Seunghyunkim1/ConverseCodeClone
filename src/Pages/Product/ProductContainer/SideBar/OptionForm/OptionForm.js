import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SERVICE_CART_URL } from "../../../../../Config";

import heart from "../../../../../Images/heart.png";
import heart_filled from "../../../../../Images/heart_filled.png";

import "./OptionForm.scss";

class OptionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sizeCheck: [], //size 버튼
      sizeSlected: false,
      size: null,
      amount: 1,
      stock: 10,
    };

    this.handleSizeClick = this.handleSizeClick.bind(this);
    this.handleAmountClick = this.handleAmountClick.bind(this);
    this.handleGetClick = this.handleGetClick.bind(this);
    this.isSizeSelected = this.isSizeSelected.bind(this);
  }

  componentDidMount() {
    const size = new Array(this.props.option.size_list.length);
    for (let i = 0; i < size.length; i++) size[i] = false;
    //size 갯수만큼 false로 초기화
    this.setState({
      sizeCheck: size,
    });
  }

  isSizeSelected(size) {
    return size.some((e) => e === true);
  }

  //size handler
  handleSizeClick(e) {
    const id = Number(e.target.id);
    //하나의 사이즈만 true 보장
    const sizeCheck = this.state.sizeCheck.map((e, index) =>
      id === index ? !e : false
    );

    const selected = this.isSizeSelected(sizeCheck);

    this.setState({
      sizeCheck: sizeCheck,
      sizeSlected: selected,
      size: e.target.innerHTML,
    });
  }

  //amount handler
  handleAmountClick(e) {
    e.preventDefault();
    let { amount, stock } = this.state;

    const content = e.target.innerHTML;
    if (content === "-" && amount > 1) {
      amount--;
    } else if (content === "+" && amount < stock) {
      amount++;
    }

    this.setState({
      amount: amount,
    });
  }

  //장바구니, get handler
  handleGetClick(e) {
    let check = this.state.sizeSlected;
    if (!check) e.preventDefault();

    let token = localStorage.getItem("access_token");

    //장바구니 클릭
    if (check === true) {
      fetch(`${SERVICE_CART_URL}`, {
        headers: {
          Authorization: token,
        },
        method: "POST",
        body: JSON.stringify({
          size: this.state.size,
          quantity: this.state.amount,
          code: this.props.option.code,
        }),
      });
    }
  }

  render() {
    const {
      code,
      color_name,
      size_list,
      series_code,
      series_image,
    } = this.props.option;

    const { amount, stock, sizeSlected } = this.state;

    return (
      <form method="POST" action="/cart/add">
        <div className="option-wrapper">
          {/* 컬러 옵션 */}
          <div className="product-variation">
            <div className="product-style">
              <span className="label">컬러</span>
              <span className="value">{color_name}</span>
            </div>
            <div className="product-unique">
              <span className="label">스타일 :</span>
              <span className="product-id">{code}</span>
            </div>
          </div>
          <input
            className="hidden-option"
            type="hidden"
            value="블랙"
            name="itemAttributes[COLOR]"
          />
          <div className="product-option">
            {/* 클릭 시 selected */}
            {series_image.map((series, index) => {
              return (
                <div
                  className={`color selectable ${
                    index === 0 ? "selected" : ""
                  }`}
                >
                  <a
                    className="color-anchor"
                    href={`/product/${series_code[index]}`}
                  >
                    <img src={series} alt="shoes" />
                  </a>
                </div>
              );
            })}
          </div>
          <input
            className="hidden-option"
            type="hidden"
            name="itemAttributes[SIZE]"
          />
          {/* 사이즈 */}
          <div className="size-guide-wrapper">
            <span className="size-guide">사이즈</span>
          </div>
          <div className="size-selector">
            <div className="label-wrapper">
              {/* 클릭 시 selected */}
              {size_list.map((size, index) => {
                return (
                  <label
                    className="size selectable"
                    onClick={this.handleSizeClick}
                    for={size}
                  >
                    <input type="radio" name="SIZE" value={size} />
                    <span
                      id={index}
                      className={`size-text ${
                        this.state.sizeCheck[index] === true ? "selected" : ""
                      }`}
                    >
                      {size}
                    </span>
                  </label>
                );
              })}
            </div>
            <p
              className="message"
              style={!sizeSlected ? { display: "block" } : { display: "none" }}
            >
              사이즈를 선택해 주세요.
            </p>
          </div>

          <div className="quantity-wrapper">
            <div className="input-wrapper">
              <input
                className="quantity"
                name="quantity"
                type="number"
                value={this.state.amount}
                min="1"
              />
              <button className="button minus" onClick={this.handleAmountClick}>
                -
              </button>
              <button className="button plus" onClick={this.handleAmountClick}>
                +
              </button>
            </div>
            <p
              className="message"
              style={
                amount >= stock ? { display: "block" } : { display: "none" }
              }
            >
              {this.state.stock}개 까지 구매가능 합니다.
            </p>
          </div>
        </div>
        <div className="status-wrapper">
          <div className="button-wrapper">
            <div className="button cart">
              <Link className="link" to="/cart" onClick={this.handleGetClick}>
                장바구니
              </Link>
            </div>
            <div className="button buy">
              <a className="link" onClick={this.handleGetClick}>
                바로구매
              </a>
            </div>
            <div className="wish">
              <div className="btn-wish">
                <div className="event-wish">
                  <a className="action add">
                    <img className="icon" src={heart} alt="add" />
                  </a>
                  <a className="action remove">
                    <img className="icon" src={heart_filled} alt="minus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default OptionForm;
