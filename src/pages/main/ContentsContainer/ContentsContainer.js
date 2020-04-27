import React, { Component } from "./node_modules/react";

import Contents from "./Contents/Contents";

import "./ContentsContainer.scss";

class ContentsContainer extends Component {
  render() {
    console.log("!!", this.props.contents);

    return (
      <div className="ContentsContainer">
        {this.props.contents.map((content) => (
          <Contents contents={content} />
        ))}
      </div>
    );
  }
}

export default ContentsContainer;
