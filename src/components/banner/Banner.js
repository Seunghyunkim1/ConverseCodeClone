import React, { Component } from "./node_modules/react";

import Promo from "./Promo/Promo";

import arrow_left from "../../images/arrow_left.png";
import arrow_right from "../../images/arrow_right.png";
import "./Banner.scss";

//Header --> Banner 이름 변경
//Nav --> Header

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //bind here if needed
  }

  render() {
    return (
      <div className="Banner">
        <div className="content">
          <div className="global">
            <div className="flag-icon">
              <img
                src="https://image.converse.co.kr/cmsstatic/theme/b-commerce/assets/images/locale-kr.svg"
                alt="korea"
              />
            </div>
            <div className="locale">
              KR<span className="break-line">|</span>한국어
            </div>
          </div>
          <div className="row">
            <div className="promo-wrapper">
              <div className="slider">
                <button className="slider-left arrow-icon">
                  <img src={arrow_left} alt="" />
                </button>

                <Promo />

                <button className="slider-right arrow-icon">
                  <img src={arrow_right} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
