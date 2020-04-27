import React, { Component } from "react";

import "./ContentNavItem.scss";

class ContentNavItem extends Component {
  render() {
    // console.log("nav", this.props.items)
    return this.props.items.map((item) => {
      return (
        <div className="ContentNavItem">
          <a className="item-photo">
            <img src={item.img} alt="" />
          </a>
          <a className="item-title">{item.title}</a>
        </div>
      );
    });
  }
}

export default ContentNavItem;
