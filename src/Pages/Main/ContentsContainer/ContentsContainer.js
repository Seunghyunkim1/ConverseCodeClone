import React, { Component } from "react";

import Contents from "./Contents/Contents";
import ContentNav from "./ContentNav/ContentNav";

import "./ContentsContainer.scss";

class ContentsContainer extends Component {
  render() {
    // console.log("Container", this.props.contents);

    return (
      <div className="ContentsContainer">
        {this.props.contents.map((content) => {
          if (content.length > 0) {
            if (content[0].type === 5)
              //CHOOSE YOUR ICON 별도 처리
              return <ContentNav contents={content} />;
            return <Contents contents={content} />;
          }
        })}
      </div>
    );
  }
}

export default ContentsContainer;
