import React, { Component } from "react";

import facebook from "../../../../Images/facebook.png";
import instagram from "../../../../Images/instagram.png";
import line from "../../../../Images/line.png";

import Summary from "./Summary/Summary";
import OptionForm from "./OptionForm/OptionForm";

import "./SideBar.scss";

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="fixed">
          <Summary summary={this.props.summary} />
          <OptionForm option={this.props.option} />
          <div className="sns-wrapper">
            <div className="clear">
              <div className="animation">
                <div className="buttons">
                  <a
                    className="button"
                    href="https://github.com/wecode-bootcamp-korea/Converse-backend"
                    target="_blank"
                  >
                    <span className="icon-wrapper">
                      <img
                        className="icon facebook"
                        src={facebook}
                        alt="facebook"
                      />
                    </span>
                  </a>
                  <a
                    className="button"
                    href="https://github.com/wecode-bootcamp-korea/Converse-frontend"
                    target="_blank"
                  >
                    <span className="icon-wrapper">
                      <img
                        className="icon kakao"
                        src={instagram}
                        alt="instagram"
                      />
                    </span>
                  </a>
                  <a
                    className="button"
                    href="https://wecode.co.kr/"
                    target="_blank"
                  >
                    <span className="icon-wrapper">
                      <img className="icon line" src={line} alt="line" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="messsage">
            <span>5만원이상 구매시 무료배송</span>
          </div>
          <div className="delivery">
            <a className="link">
              <span className="text">배송정보</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
