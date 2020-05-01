import React, { Component } from "react";

import ContentFull from "./Contents/ContentFull/ContentFull";
import ContentHalf from "./Contents/ContentHalf/ContentHalf";
import ContentNav from "./ContentNav/ContentNav";

import "./ContentsContainer.scss";

class ContentsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: [] && false,
    };
  }

  componentDidMount() {
    this.setState({
      contents: this.props.contents,
    });
  }

  render() {
    return (
      <div className="ContentsContainer">
        {this.state.contents &&
          this.state.contents.map((content, index) => {
            if (index === 2) return <ContentNav />;
            if (content.length > 0) {
              if (content[0].size === 8) {
                return <ContentFull contents={content} />;
              } else if (content[0].size <= 4) {
                return <ContentHalf contents={content} />;
              }
            }
          })}
      </div>
    );
  }
}

export default ContentsContainer;
