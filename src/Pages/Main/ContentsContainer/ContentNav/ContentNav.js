import React, { Component } from "react";
import { Link } from "react-router-dom";

import ContentNavItem from "./ContentNavItem/ContentNavItem";
import arrow_right from "../../../../Images/arrow_right.png";

import "./ContentNav.scss";

class ContentNav extends Component {
  items = [
    {
      img:
        "https://image.converse.co.kr/cmsstatic/structured-content/15195/img-converse-chucktaylor-1.jpg?gallery",
      title: "척테일러 올스타",
      name: "chucktaylorallstar",
    },
    {
      img:
        "https://image.converse.co.kr/cmsstatic/structured-content/15196/척70진짜최종.jpg?gallery",
      title: "척 70",
      name: "chuck70",
    },
    {
      img:
        "https://image.converse.co.kr/cmsstatic/structured-content/15197/원스타진짜최종.jpg?gallery",
      title: "원스타",
      name: "onestar",
    },
    {
      img:
        "https://image.converse.co.kr/cmsstatic/structured-content/15198/잭퍼셀최종.jpg?gallery",
      title: "잭퍼셀",
      name: "jackpurcell",
    },
  ];

  render() {
    return (
      <div className="ContentNav">
        <p className="title">CHOOSE YOUR ICON</p>
        <Link className="link" to="category/shoes">
          <img className="icon" src={arrow_right} alt="arrow_right" />
          <span className="link-text">신발 전체 보기</span>
        </Link>
        <div className="list">
          <div className="items">
            <ContentNavItem items={this.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentNav;
