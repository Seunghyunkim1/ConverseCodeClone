import React, { Component } from "react";

import "./Introduction.scss";

class Introduction extends Component {
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
            척테일러 올스타 셀프 익스프레션은 복고풍 DIY 데님 자켓과 핸드메이드
            우정 팔찌에서 영감 받아 디자인 되었습니다. 워싱 데님 소재의 어퍼에
            컬러풀한 스티치 디테일과 함께 즐거웠던 날의 추억을 회상합니다.
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
    );
  }
}

export default Introduction;
