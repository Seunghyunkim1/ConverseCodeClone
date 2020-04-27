import React, { Component } from "./node_modules/react";

import "./ContentForFour.scss";

class ContentForFour extends Component {
  render() {
    console.log("four", this.props.content);

    return (
      <div className="ContentForFour">
        <h1>Four</h1>
      </div>
    );
  }
}

export default ContentForFour;
