import React, { Component } from "react";

import ContentForOne from "../ContentItem/ContentForOne";
import ContentForTwo from "../ContentItem/ContentForTwo";
import ContentForFour from "../ContentItem/ContentForFour";

import "./ContentHalf.scss";

class ContentHalf extends Component {
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
      <div className="ContentHalf">
        {this.state.contents &&
          this.state.contents.map((content) => {
            switch (content.size) {
              case 1:
                return <ContentForOne content={content} />;
              case 2:
                return <ContentForTwo content={content} />;
              case 4:
                return <ContentForFour content={content} />;
              default:
                break;
            }
          })}
      </div>
    );
  }
}

export default ContentHalf;
