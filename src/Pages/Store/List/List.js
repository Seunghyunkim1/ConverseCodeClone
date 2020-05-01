import React, { Component } from "react";

import ListItem from "./ListItem/ListItem";

import "./List.scss";

class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="wrapper">
          <ul className="result-list">
            {this.props.stores.map((store) => (
              <ListItem store={store} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
