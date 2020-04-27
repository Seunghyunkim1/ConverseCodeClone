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
        {/* intro, review scss 추가 */}
        <Introduction />
        <Review />
        <Community />
        <Information />
      </div>
    );
  }
}

export default DetailContainer;
