import React, { Component } from "react";

import arrow_right from "../../../../../Images/arrow_right.png";
import "./ContentForTwo.scss";

class ContentForTwo extends Component {
  render() {
    // console.log("two", this.props.content);
    const { img, title, description, badges } = this.props.content;

    return (
      <div className="ContentForTwo">
        <div className="product">
          <img className="product-img" alt=""></img>
        </div>
        <div className="tile-overlay">
          {badges.map((badge) => (
            <p className="badges-text">{badge}</p>
          ))}
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <a className="link">
            <img className="icon" src={arrow_right} alt="arrow_right" />
            <span className="link-text">더 알아보기</span>
          </a>
        </div>
      </div>
    );
  }
}

export default ContentForTwo;
