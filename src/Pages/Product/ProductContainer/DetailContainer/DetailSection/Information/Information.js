import React, { Component } from "react";

import "./Information.scss";

class Information extends Component {
  render() {
    const { code, information } = this.props.information;

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
              <div className="content value">{code}</div>
              {Object.entries(information).map((list) => (
                <>
                  <div className="content key">{list[0]}</div>
                  <div className="content value">{list[1]}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
