import React, { Component } from "react";

import CommunityItem from "./CommunityItem/CommunityItem";

import "./Communities.scss";

class Communities extends Component {
  render() {
    const communities = this.props.communities;

    return (
      <div className="Communities">
        <CommunityItem />
        <CommunityItem />
        <CommunityItem />
        <CommunityItem />
        <CommunityItem />
        <CommunityItem />
        {/* 더보기 생략
            <div className="footer">

            </div> 
        */}
      </div>
    );
  }
}

export default Communities;
