import React, { Component } from "react";
import "./Login.scss";

export class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="accountauth-content">
          <div className="account-authhead">
            <h1 className="account-authcontenttitle"> 로그인 </h1>
          </div>

          <form className="login-form">
            <div className="field-firstlabel">
              <input
                className="input-id"
                type="text"
                placeholder="이메일 형태로 입력해주세요"
              />
            </div>

            <div className="field-secondlabel">
              <input
                className="input-pwd"
                type="password"
                placeholder="비밀번호(영문/숫자/특수문자 조합 8자이상"
              />
            </div>

            <div className="login-info">
              <div className="account-tools">
                <label className="i-checkbox" />
                <input
                  type="checkbox"
                  data-parsley-required-message="필수 입력 항목입니다"
                />
                <span class="text">로그인 상태 유지 </span>
              </div>

              <div className="find-idpwd">
                <a href="#" className="find-idpwdlink">
                  {" "}
                  아이디/비밀번호찾기
                </a>
              </div>
            </div>
          </form>

          <div className="first-buttonlogin">
            <button className="click-login">로그인</button>
          </div>

          <div className="button-login">
            <button className="kakao-login">
              <div className="speech-bubble">
                <img
                  src="https://image.flaticon.com/icons/svg/2462/2462844.svg"
                  className="speech-bubblimg"
                  alt=""
                />
              </div>
              <div className="kakao-loginimg">
                <p class="kakao-loginname"> 카카오 계정으로 1초 로그인 </p>
              </div>
            </button>
          </div>

          <div className="footer-info">
            <div className="register">
              <a href="/#" className="find-idpwdlink">
                {" "}
                회원가입{" "}
              </a>
            </div>

            <div className="not-member">
              <a href="/#" className="find-idpwdlink">
                {" "}
                비회원 주문조회{" "}
              </a>
            </div>
          </div>

          <div className="login-eventinfo">
            <div className="event-img">
              <img
                src="https://image.flaticon.com/icons/svg/548/548427.svg"
                alt=""
              />
            </div>

            <div className="event-info">
              <p className="event-infoptag">
                {" "}
                지금 회원으로 가입하시고, 특별한 멤버십 혜택과 <br></br>다양한
                회원 전용 상품을 만나보세요.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
