import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ContentNavItem.scss";

class ContentNavItem extends Component {
  render() {
    // console.log("nav", this.props.items)
    return this.props.items.map((item) => {
      return (
        <div className="ContentNavItem">
          <Link className="item-photo" to={`category/${item.name}`}>
            <img src={item.img} alt="" />
          </Link>
          <Link className="item-title" to={`category/${item.name}`}>
            {item.title}
          </Link>
        </div>
      );
    });
  }
}

export default ContentNavItem;
