import React, { Component } from "react";

import arrow_right from "../../../../../Images/arrow_right.png";
import "./ContentForTwo.scss";

class ContentForTwo extends Component {
  render() {
    // console.log("two", this.props.content);
    const { title, url, description, hover_description } = this.props.content;

    return (
      <div className="ContentForTwo">
        <div className="product">
          <div className="product-img">
            {url.endsWith("mp4") ? (
              <video autoPlay loop muted>
                <source src={url} type="video/mp4" />
              </video>
            ) : (
              <img src={url} alt="img" />
            )}
          </div>
        </div>
        <div className="tile-overlay">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <a className="link">
            <img className="icon" src={arrow_right} alt="arrow_right" />
            <span className="link-text">
              {hover_description ? hover_description : "더 알아보기"}
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default ContentForTwo;
