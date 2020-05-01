import React, { Component } from "react";

import Promo from "./Promo/Promo";

import arrow_left from "../../Images/arrow_left.png";
import arrow_right from "../../Images/arrow_right.png";
import "./Banner.scss";

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promos: [],
      currentNum: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.initialize();
    //Timer
    this.switchPromo = setInterval(() => {
      let { promos, currentNum } = this.state;
      this.setState({
        currentNum: ++currentNum % promos.length,
      });
    }, 4500);
  }

  componentWillUnmount() {
    clearInterval(this.switchPromo);
  }

  initialize() {
    const promos = [
      {
        type: "NOTICE",
        content: "신규 가입 1만원 할인 코드 사용 관련",
      },
      {
        type: "NEW",
        content: "퍼포먼스 농구화 G4 출시",
      },
      {
        type: "NEW",
        content: "컨버스 아티스트 시리즈 X 스펜서 맥멀렌 척 70 4/23 출시 예정",
      },
      {
        type: "NEW",
        content: "CONVERSE 클론 사이트 탄생",
      },
      {
        type: "NOTICE",
        content: "충격, 소요시간 2주일도 안걸려..",
      },
    ];

    this.setState({
      promos: Array.from(promos),
    });
  }

  handleClick(e) {
    let currentNum = this.state.currentNum;
    let promoLen = this.state.promos.length;

    if (e.target.id === "left" && currentNum > 0) {
      currentNum = --currentNum % promoLen;
    } else if (e.target.id === "right") {
      currentNum = ++currentNum % promoLen;
    }

    this.setState({
      currentNum: currentNum,
    });
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
                <button
                  className="slider-left arrow-icon"
                  onClick={this.handleClick}
                >
                  <img id="left" src={arrow_left} alt="" />
                </button>

                <Promo
                  promos={this.state.promos}
                  currentNum={this.state.currentNum}
                />

                <button
                  className="slider-right arrow-icon"
                  onClick={this.handleClick}
                >
                  <img id="right" src={arrow_right} alt="" />
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
