import React, { Component } from "./node_modules/react";

import "./ContentForOne.scss";

class ContentForOne extends Component {
  render() {
    console.log("one", this.props.content);
    const { img, name, price, badges } = this.props.content;

    return (
      <div className="ContentForOne">
        <a className="product-url" href="/">
          <div className="product-img"></div>
          <div className="product-img"></div>
        </a>
        <div className="product-wish">
          <a className="wish-action add" href="#add">
            {" "}
          </a>
          <a className="wish-action remove" href="#remove">
            {" "}
          </a>
        </div>
        <div className="product-badges">
          {badges.map((badge) => (
            <span className="badges-text">{badge}</span>
          ))}
        </div>
        <div className="product-detail">
          <p calssName="name">
            <a className="text-link" href="/">
              {name}
            </a>
          </p>
          <p className="price">{price} 원</p>
        </div>
      </div>
    );
  }
}

export default ContentForOne;
