import React, { Component } from "react";

import arrow_left from "../../../../Images/arrow_left.png";
import arrow_right from "../../../../Images/arrow_right.png";
import star from "../../../../Images/star.png";

import "./DetailContainer.scss";

class DetailContainer extends Component {
  state = {
    toggleOn: false,
  };

  handleClick = () => {
    this.setState({
      toggleOn: !this.state.toggleOn,
    });
  };

  render() {
    return (
      <div className="DetailContainer">
        {/* detail. 1 (소개) */}
        <div className="detail-section">
          <div
            className="detail-content"
            style={
              this.state.toggleOn
                ? { overflow: "visible", maxHeight: "none" }
                : { overflow: "hidden", maxHeightL: "448px" }
            }
          >
            <p>
              <span className="title">척테일러 올스타 셀프 익스프레션</span>
            </p>
            <br />
            <p>
              척테일러 올스타 셀프 익스프레션은 복고풍 DIY 데님 자켓과
              핸드메이드 우정 팔찌에서 영감 받아 디자인 되었습니다. 워싱 데님
              소재의 어퍼에 컬러풀한 스티치 디테일과 함께 즐거웠던 날의 추억을
              회상합니다.
            </p>
            <p>*워싱 처리된 데님 소재가 적용된 어퍼</p>
            <p>*우정 실팔찌에서 영감 받은 컬러블록 자수</p>
            <p>*뛰어난 유연성과 미끄러짐 방지 기능을 자랑하는 러버 아웃솔</p>
            <br />
            <p className="image">
              <img
                src="https://image.converse.co.kr/cmsstatic/product/25650/567992C.jpg"
                alt=""
              />
            </p>
            <br />
            <br />
            <br />
          </div>
          <a className="detail-toggle" onClick={this.handleClick}>
            <span
              className={"underline " + (this.state.toggleOn ? "less" : "more")}
            >
              더보기 +
            </span>
            <span
              className={"underline " + (this.state.toggleOn ? "more" : "less")}
            >
              닫기 -
            </span>
          </a>
        </div>
        {/* detail. 2 (REVIEW) */}
        <div className="detail-section">
          <div className="review-wrapper">
            <div className="head">
              <h3 className="title">REVIEW(3)</h3>
              <div className="arrows">
                <button className="arrow right">
                  <img src={arrow_right} alt="arrow right" />
                </button>
                <button className="arrow left disabled">
                  <img src={arrow_left} alt="arrow-left" />
                </button>
              </div>
            </div>
            <div className="review-list">
              <div className="overall">
                <div className="summary-wrapper">
                  <div className="summary">
                    <div className="score">4.50</div>
                    <div className="stars-wrapper">
                      <div className="stars">
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                      </div>
                    </div>
                    <p className="description">2개의 상품리뷰가 있습니다.</p>
                    <div className="bar color">
                      <p className="type">컬러</p>
                      <div className="range">
                        <span className="puck" style={{ left: "30.0%" }}></span>
                      </div>
                      <div className="labels">
                        <span className="label min">밝아요</span>
                        <span className="label max">어두워요</span>
                      </div>
                    </div>
                    <div className="bar size">
                      <p className="type">사이즈</p>
                      <div className="range">
                        <span className="puck" style={{ left: "30.0%" }}></span>
                      </div>
                      <div className="labels">
                        <span className="label min">커요</span>
                        <span className="label max">작아요</span>
                      </div>
                    </div>
                    <a className="button modal">리뷰쓰기</a>
                  </div>
                </div>
              </div>
              <div className="overall">
                <a className="summary-wrapper flex">
                  <p className="title">굿!!!!</p>
                  <div className="rating">
                    <div className="stars-wrapper start">
                      <div className="stars">
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="view-all">
              <a className="text">전체보기</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailContainer;
