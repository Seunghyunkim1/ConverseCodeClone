import React, { Component } from "react";
import "./Registersuccess.scss";

class Registersuccess extends Component {
  render() {
    return (
      <div className="Registersuccess">
        <div className="success-formall">
          <div className="success-form">
            <img
              className="success-img"
              src="https://download.logo.wine/logo/Converse_(shoe_company)/Converse_(shoe_company)-Converse2-Logo.wine.png"
              alt=""
            />
            <p className="success-end"> 회원가입이 완료 되었습니다. </p>
            <p className="success-content">
              {" "}
              회원가입이 성공적으로 완료되었습니다.
              <br />
              컨버스 공식 온라인 스토어의 다양한 서비스를 이용해보세요.{" "}
            </p>

            <div className="firstbutton-login">
              <button className="click-login">지금 쇼핑하러 가기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registersuccess;
