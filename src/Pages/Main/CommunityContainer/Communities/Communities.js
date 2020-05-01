import React, { Component } from "react";

import CommunityItem from "./CommunityItem/CommunityItem";

import "./Communities.scss";

class Communities extends Component {
  render() {
    return (
      <div className="Communities">
        {this.props.instagrams.map((instagram, index) => {
          if (index < 8) {
            return <CommunityItem instagram={instagram} />;
          }
        })}
      </div>
    );
  }
}

export default Communities;
