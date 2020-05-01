import React, { Component } from "react";

import "./Instagram.scss";

class Instagram extends Component {
  render() {
    const {
      id,
      thumbnail,
      profile_image,
      user,
      created,
    } = this.props.instagram;

    return (
      <div className="Instagram">
        <div className="item-wrapper">
          <img className="thumbnail" src={thumbnail} alt={user} title={user} />
          <div className="overlay">
            <div className="user">
              <img className="profile" src={profile_image} alt="@underexz" />
              <div className="info">
                <span className="user-name">{user}</span>
                <span className="time">{created}</span>
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

export default Instagram;
