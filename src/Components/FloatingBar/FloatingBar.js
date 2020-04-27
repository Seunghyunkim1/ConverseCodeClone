import React, { Component } from "react";

import converse_logo from "../../Images/converse_logo.png";

import "./FloatingBar.scss";

class FloatingBar extends Component {
  render() {
    return (
      <div className="FloatingBar">
        <a className="anchor">
          <img className="icon" src={converse_logo} alt="icon" />
          <p className="content">회원 전용 척 70 아카이브 프린트 출시</p>
        </a>
      </div>
    );
  }
}

export default FloatingBar;
