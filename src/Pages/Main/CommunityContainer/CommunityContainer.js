import React, { Component } from "react";

import Communities from "./Communities/Communities";
import "./CommunityContainer.scss";

class CommunityContainer extends Component {
  render() {
    return (
      <div className="CommunityContainer">
        <div className="community-wrapper">
          <p className="title">CONVERSE COMMUNITY</p>
          <Communities instagrams={this.props.instagrams} />
        </div>
      </div>
    );
  }
}

export default CommunityContainer;
