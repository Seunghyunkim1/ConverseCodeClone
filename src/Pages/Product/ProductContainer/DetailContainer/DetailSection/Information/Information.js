import React, { Component } from "react";

import "./Information.scss";

class Information extends Component {
  render() {
    return (
      <div className="Information">
        <div className="detail-section">
          <div className="head">
            <h3 className="title">상품정보</h3>
            <img className="icon minus" src={""} alt="" />
            <img className="icon plus" src={""} alt="" />
          </div>
          <div className="contents-wrapper">
            <div className="contents">
              <div className="content key">Model</div>
              <div className="content value">563456C</div>
              <div className="content key">제품소재</div>
              <div className="content value">
                겉감:면 100%안감:면 100% outsole:고무 100%
              </div>
              <div className="content key">색상</div>
              <div className="content value">상단표기</div>
              <div className="content key">치수</div>
              <div className="content value">상단표기</div>
              <div className="content key">제조자</div>
              <div className="content value">컨버스</div>
              <div className="content key">제조국</div>
              <div className="content value">베트남</div>
              <div className="content key">취급시 주의사항</div>
              <div className="content value">
                본 제품은 천연 염료를 사용하여 물빠짐이 있으니 연한색 양말의
                착용과 장시간 세탁 및 표백성분 세제와 세탁기 사용을 삼가해
                주십시오.
              </div>
              <div className="content key">품질보증기준</div>
              <div className="content value">
                품질보증기간 (1년) 내 무상수선 품질 보증 기간 경과 혹은 소비자
                과실 유상수선
              </div>
              <div className="content key">A/S 책임자와 전화번호</div>
              <div className="content value">컨버스 AS 센터 (080-987-0182)</div>
              <div className="content key">제조연월</div>
              <div className="content value">상품라벨에서 확인</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
