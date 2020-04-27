import React, { Component } from "react";

import star from "../../../../Images/star.png";

import "./SideBar.scss";

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="fixed">
          <div className="summary">
            <h1 className="name">척 70 아카이브 프린트 스타 앤 스트라이프</h1>
            <p className="price">99,000원</p>
            <p className="sex">남성</p>
            <div className="detail">
              <p className="description">
                별과 스트라이프 패턴으로 완성된 데님 척 70
              </p>
              <button className="button-description">더보기</button>
            </div>
            <div className="stars">
              <a className="stars-link">
                <div className="stars-wrapper">
                  <img className="star" src={star} alt="star" />
                  <img className="star" src={star} alt="star" />
                  <img className="star" src={star} alt="star" />
                  <img className="star" src={star} alt="star" />
                  <img className="star" src={star} alt="star" />
                </div>
              </a>
            </div>
          </div>
          <form method="POST" action="/cart/add">
            <div className="option-wrapper">
              {/* 컬러 옵션 */}
              <div className="product-variation">
                <div className="product-style">
                  <span className="label">컬러</span>
                  <span className="value">블랙</span>
                </div>
                <div className="product-unique">
                  <span className="label">스타일 :</span>
                  <span className="product-id">167709C</span>
                </div>
              </div>
              <input
                className="hidden-option"
                type="hidden"
                value="블랙"
                name="itemAttributes[COLOR]"
              />
              <div className="product-option">
                {/* 클릭 시 selected */}
                <div className="color selectable selected">
                  <a className="color-anchor">
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/167709C_167709C_pdp-option.jpg?browse="
                      alt=""
                    />
                  </a>
                </div>
                <input type="hidden" value="1000" name="COLOR" />
                <div className="color selectable">
                  <a className="color-anchor">
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/167708C_167708C_pdp-option.jpg?browse="
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <input
                className="hidden-option"
                type="hidden"
                name="itemAttributes[SIZE]"
              />
              {/* 사이즈 가이드 */}
              <div className="size-guide-wrapper">
                <a className="size-guide">사이즈 가이드</a>
              </div>
              <div className="size-selector">
                <div className="label-wrapper">
                  <label className="size selectable checked" for="SIZE2">
                    <input type="radio" name="SIZE" id="SIZE2" value="220" />
                    <span className="size-text">220</span>
                  </label>
                  <label className="size selectable checked" for="SIZE3">
                    <input type="radio" name="SIZE" id="SIZE3" value="230" />
                    <span className="size-text">230</span>
                  </label>
                  <label className="size selectable checked" for="SIZE4">
                    <input type="radio" name="SIZE" id="SIZE4" value="240" />
                    <span className="size-text">240</span>
                  </label>
                  <label className="size selectable checked" for="SIZE5">
                    <input type="radio" name="SIZE" id="SIZE5" value="250" />
                    <span className="size-text">250</span>
                  </label>
                  <label className="size selectable checked" for="SIZE6">
                    <input type="radio" name="SIZE" id="SIZE6" value="260" />
                    <span className="size-text">260</span>
                  </label>
                  <label className="size selectable checked" for="SIZE7">
                    <input type="radio" name="SIZE" id="SIZE7" value="270" />
                    <span className="size-text">270</span>
                  </label>
                  <label className="size selectable checked" for="SIZE8">
                    <input type="radio" name="SIZE" id="SIZE8" value="280" />
                    <span className="size-text">280</span>
                  </label>
                  <label className="size selectable checked" for="SIZE9">
                    <input type="radio" name="SIZE" id="SIZE9" value="290" />
                    <span className="size-text">290</span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SideBar;
