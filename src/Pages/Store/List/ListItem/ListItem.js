import React, { Component } from "react";

import "./ListItem.scss";

class ListItem extends Component {
  render() {
    const { name, address1, address2, phone } = this.props.store;

    return (
      <li className="ListItem">
        <a className="store">
          <h2 className="title">{name}</h2>
          <span className="address1">{address1}</span>
          <span className="address2">{address2}</span>
          <span className="phone">{phone}</span>
        </a>
      </li>
    );
  }
}

export default ListItem;
