import React, { Component } from "react";

import star from "../../../../../Images/star.png";

import "./Summary.scss";

class Summary extends Component {
  addComma(price) {
    if (price > 999) {
      return ("" + price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    } else {
      return price;
    }
  }

  render() {
    const { name, price, gender, summary } = this.props.summary;

    return (
      <div className="Summary">
        <h1 className="name">{name}</h1>
        <p className="price">{this.addComma(price)}원</p>
        <p className="sex">{gender}</p>
        <div className="detail">
          <p className="description">{summary}</p>
          <button className="button-description">더보기</button>
        </div>
        <div className="stars">
          <a className="stars-link">
            <div className="stars-wrapper">
              <img className="star" src={star} alt="star" />
              <img className="star" src={star} alt="star" />
              <img className="star" src={star} alt="star" />
              <img className="star" src={star} alt="star" />
              <img className="star" src={star} alt="star" />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Summary;
