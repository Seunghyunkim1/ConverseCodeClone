import React, { Component } from "./node_modules/react";

import "./ContentForTwo.scss";

class ContentForTwo extends Component {
  render() {
    console.log("two", this.props.content);
    const { img, title, description, badges } = this.props.content;

    return (
      <div className="ContentForTwo">
        <h1>Two</h1>
        <div className="product">
          <img className="product-img"></img>
        </div>
      </div>
    );
  }
}

export default ContentForTwo;
