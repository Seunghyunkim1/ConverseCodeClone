import React, { Component } from "react";
import { Link } from "react-router-dom";

import converse_logo from "../../Images/converse_logo.png";

import "./FloatingBar.scss";

class FloatingBar extends Component {
  render() {
    return (
      <div className="FloatingBar">
        <Link className="anchor" to="product/165024C">
          <img className="icon" src={converse_logo} alt="icon" />
          <p className="content">회원 전용 척 70 아카이브 프린트 출시</p>
        </Link>
      </div>
    );
  }
}

export default FloatingBar;
