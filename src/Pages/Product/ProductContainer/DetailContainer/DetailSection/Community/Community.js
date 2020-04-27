import React, { Component } from "react";

import "./Community.scss";

class Community extends Component {
  render() {
    return (
      <div className="Community">
        <div className="detail-section">
          <div className="head">
            <h3 className="title">LOOKS FROM THE CONVERSE COMMUNITY</h3>
            <p className="description">
              <span>
                컨버스 커뮤니티가 전하는 인스타그램 속
                <strong> #컨버스스타일</strong>
              </span>
            </p>
          </div>
          <div className="instagram">인스타그램</div>
        </div>
      </div>
    );
  }
}

export default Community;
