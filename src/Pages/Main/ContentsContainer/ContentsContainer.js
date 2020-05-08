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
            if (content[0].size === 8) {
              return (
                <>
                  {index === 2 ? <ContentNav /> : ""}
                  <ContentFull contents={content} />
                </>
              );
            } else if (content[0].size <= 4) {
              return (
                <>
                  {index === 2 ? <ContentNav /> : ""}
                  <ContentHalf contents={content} />
                </>
              );
            }
          })}
      </div>
    );
  }
}

export default ContentsContainer;
