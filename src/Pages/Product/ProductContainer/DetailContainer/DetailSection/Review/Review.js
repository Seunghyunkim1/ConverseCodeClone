import React, { Component } from "react";

import arrow_left from "../../../../../../Images/arrow_left.png";
import arrow_right from "../../../../../../Images/arrow_right.png";
import star from "../../../../../../Images/star.png";

import "./Review.scss";

export class Review extends Component {
  render() {
    return (
      <div className="Review">
        <div className="review-wrapper">
          <div className="head">
            <h3 className="title">REVIEW(1)</h3>
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
                  <p className="description">1개의 상품리뷰가 있습니다.</p>
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
    );
  }
}

export default Review;
