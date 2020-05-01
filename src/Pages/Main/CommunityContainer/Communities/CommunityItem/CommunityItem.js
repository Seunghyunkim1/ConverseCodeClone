import React, { Component } from "react";

import "./CommunityItem.scss";

class CommunityItem extends Component {
  render() {
    const {
      id,
      thumbnail,
      profile_image,
      user,
      created_at,
    } = this.props.instagram;

    return (
      <div className="CommunityItem">
        <div className="item-wrapper">
          <img className="thumbnail" src={thumbnail} alt={user} title={user} />
          <div className="overlay">
            <div className="user">
              <img className="profile" src={profile_image} alt="@underexz" />
              <div className="info">
                <span className="user-name">{user}</span>
                <span className="time">{created_at}</span>
              </div>
              <div className="cover"></div>
              <div className="tag-icon">
                <i></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommunityItem;
