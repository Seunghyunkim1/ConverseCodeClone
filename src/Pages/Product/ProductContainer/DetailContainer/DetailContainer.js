import React, { Component } from "react";

import Introduction from "./DetailSection/Introduction/Introduction";
import Review from "./DetailSection/Review/Review";
import Community from "./DetailSection/Community/Community";
import Information from "./DetailSection/Information/Information";

import "./DetailContainer.scss";

class DetailContainer extends Component {
  render() {
    return (
      <div className="DetailContainer">
        <Introduction introduction={this.props.introduction} />
        <Review
          overall_review={this.props.overall_review}
          reviews={this.props.reviews}
        />
        <Community instagram={this.props.instagram} />
        <Information information={this.props.information} />
      </div>
    );
  }
}

export default DetailContainer;
