import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ContentForFour.scss";

class ContentForFour extends Component {
  render() {
    // console.log("four", this.props.content);
    const {
      code,
      title,
      url,
      description,
      hover_description,
    } = this.props.content;

    return (
      <div className="ContentForFour">
        <Link to={`product/${code}`}>
          <div className="product">
            <img className="product-img" src={url} alt="" />
          </div>
          <div className="tile-overlay">
            <div className="tile-overlay placement flex-justify-start text-align-left flex-align-start">
              <p className="heading">
                <span className="text-bold">{title}</span>
              </p>
              <p className="body">{description}</p>
            </div>
          </div>
          <div className="tile-overlay display-hover">
            <div className="tile-overlay placement flex-justify-end text-align-right flex-align-end">
              <p className="heading">
                <span className="text-bold">
                  {hover_description ? hover_description : "더 알아보기"}
                </span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ContentForFour;
