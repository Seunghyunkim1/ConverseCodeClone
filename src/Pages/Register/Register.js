import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { isCompositeComponent } from "react-dom/test-utils";
import HeaderImg from "../../Images/converseheader.jpg";
import "./Register.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      email: "",
      password: "",
      passwordCheck: "",
      name: "",
      phone: "",
      gender: "",
      birth: "",
      email_confirm: 0,
      text_confirm: 0,
      agreeAll: true,
    };
  }

  inputEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  inputPw = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  inputPwCheck = (e) => {
    this.setState({
      passwordCheck: e.target.value,
    });
  };

  inputName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  inputClickGender = (val) => {
    console.log("벨류값입니다..", val);
    this.setState({
      gender: val,
    });
  };

  inputPhoneNum = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  inputBirth = (e) => {
    this.setState({
      birth: e.target.value,
    });
  };

  inputEmailconfirm = (e) => {
    // console.log("e.target.value", e.target.value);
    if (e.target.value === "on") {
      this.setState({
        email_confirm: 1,
      });
    } else {
      this.setState({
        email_confirm: 0,
      });
    }
  };

  inputTextconfirm = (e) => {
    if (e.target.value === "on") {
      this.setState({
        email_confirm: 1,
      });
    } else {
      this.setState({
        email_confirm: 0,
      });
    }
  };

  handleChange = (e) => {
    const {
      target: { checked },
    } = e;
    this.setState({ checked });
  };

  // agreeAll = () => {
  //   this.setState({
  //     agreeAll: !this.state.agreeAll,
  //   });
  // };

  register = () => {
    fetch("http://10.58.7.60:8000/account/register", {
      method: "post",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        gender: this.state.gender,
        phone: this.state.phone,
        birth: this.state.birth,
        email_confirm: this.state.email_confirm,
        text_confirm: this.state.text_confirm,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("회원가입 완료");
          this.props.history.push("/Register/registersuccess");
          return res.json();
        } else {
          return res.json();
        }
      })
      .then((res) => {
        if (res.Message === "OK") {
          return;
        } else if (res.Message === "PASSWORD_VALIDATION_ERROR") {
          alert("비밀번호 특수문자 영문 숫자 미포함");
        } else if (res.Message === "BIRTH_VALIDATION_ERROR") {
          alert("생년월일 형식 위반");
        } else if (res.Message === "PHONE_VALIDATION_ERROR") {
          alert("전화번호에 '-' 문자 포함");
        } else if (res.Message === "VALIDATION_ERROR") {
          alert("이메일 형식 위반");
        } else if (res.Message === "INVALID_KEY") {
          alert("JSON KEY 에러");
        }
      });
  };

  render() {
    const { gender } = this.state;
    // console.log("this.state", this.state);
    return (
      <div className="Register">
        <div className="signup-header">
          <img className="header-img" src={HeaderImg} alt="헤더이미지" />

          <div className="header-content">
            <p className="header-contentregister"> 회원가입 </p>
          </div>

          <div className="head-contentall">
            <p className="header-firstcontent">
              지금 컨버스 회원으로 가입하시고, 특별한 멤버십 혜택과
            </p>
            <p className="header-secondcontent">
              다양한 회원 전용 상품을 만나보세요.
            </p>
          </div>
        </div>

        <form className="register-main">
          <div className="signup-body">
            <div className="entry-field">
              <div className="button-login">
                <button className="kakao-login">
                  <div className="speechbubble">
                    <img
                      src="https://image.flaticon.com/icons/svg/2462/2462844.svg"
                      className="speechbubble-img"
                      alt=""
                    />
                  </div>
                  <div className="kakaologin-img">
                    <p class="kakaologin-name"> 카카오 계정으로 1초 로그인 </p>
                  </div>
                </button>
              </div>

              <div className="register-or">
                <span className="or-span"> OR </span>
              </div>

              <div className="account-signup">
                <div className="need-info">필수정보</div>

                <input
                  className="input-email"
                  type="text"
                  placeholder="이메일 형태로 입력해 주세요.(필수)"
                  onChange={this.inputEmail}
                ></input>
                <input
                  className="input-email"
                  type="password"
                  placeholder="비밀번호 (영문/숫자/특수문자 조합 8자 이상)"
                  onChange={this.inputPw}
                ></input>
                <input
                  className="input-email"
                  type="password"
                  placeholder="비밀번호 입력 확인"
                  onChange={this.inputPwCheck}
                ></input>
                <input
                  className="input-email"
                  type="text"
                  placeholder="이름을 입력해주세요. (필수)"
                  onChange={this.inputName}
                ></input>
                <input
                  className="input-email"
                  type="number"
                  placeholder="휴대폰 번호 '-' 표 없이 입력해주세요. (필수)"
                  onChange={this.inputPhoneNum}
                ></input>

                <div className="field-name">
                  * 생일/성별은 기입 후 수정이 불가합니다.
                </div>
                <input
                  className="input-email"
                  type="number"
                  placeholder="생년월일을 입력해 주세요. (19990101)"
                  onChange={this.inputBirth}
                ></input>
              </div>

              <div className="male-female">
                <div
                  className={gender === "여자" ? "choosed-gender" : "female"}
                  onClick={() => this.inputClickGender("여자")}
                >
                  여성
                </div>
                <div
                  className={gender === "남자" ? "choosed-gender" : "female"}
                  onClick={() => this.inputClickGender("남자")}
                >
                  남성
                </div>
              </div>
            </div>
            <div className="agree-field">
              <div className="agree-signup">
                <label className="agree-box">
                  <input
                    className={this.state.agreeAll === true ? "test" : ""}
                    type="checkbox"
                    // onClick={this.agreeAll}
                  />
                  <p> 모든 약관 동의</p>
                </label>
                <p className="select-content">
                  아래 모든 약관(필수), 개인정보 수집 및 이용에 대한 동의 <br />
                  (필수) 및 광고성 정보수신 동의 (선택) 내용을 확인하고 전체
                  <br />
                  동의합니다.
                </p>

                <ul className="ul-content">
                  <li className="li-content">
                    - 필수 정보의 수집 및 이용에 관한 동의를 거부하실 수 있으나,
                    <br /> &nbsp; 다만 이 경우 회원 가입 및 관련 서비스 이용은
                    불가합니다.
                  </li>

                  <li className="li-content">
                    - 선택 항목에 대한 동의를 거부하더라도 회원가입에 영향을
                    미치지 않습니다.
                  </li>
                  <li className="li-content">
                    - 만 14세 미만은 서비스 이용이 불가합니다.
                  </li>
                </ul>
              </div>

              <div className="account-signupfieldset">
                <div className="field-setlegend">
                  <h2 className="title-long">
                    컨버스 공식 온라인 스토어 회원 약관 및 개인정보 수집 • 이
                    <br />
                    용에 대한 동의
                  </h2>
                </div>

                <div className="field-row">
                  <div className="field-all">
                    <div className="field-firstrow">
                      <input
                        type="checkbox"
                        name="checkTerms"
                        data-parsley-multiple="checkTerms"
                        // className={this.need ? "toggleOff" : "toggleOn"}
                        onClick={this.inputEmailconfirm}
                      ></input>
                      <p> (필수) 이용 약관에 대한 동의 </p>
                    </div>

                    <div className="field-atag">
                      <a href="/#"> 전문보기 </a>
                    </div>
                  </div>

                  <div className="field-all">
                    <div className="field-firstrow">
                      <input
                        type="checkbox"
                        name="checkTerms"
                        data-parsley-multiple="checkTerms"
                        // className={this.privacy ? "toggleOff" : "toggleOn"}
                        onClick={this.inputTextconfirm}
                      ></input>
                      <p> (필수) 개인정보 수집 및 이용에 대한 동의 </p>
                    </div>

                    <div className="field-atag">
                      <a href="/#"> 전문보기 </a>
                    </div>
                  </div>

                  <div className="field-setlegend">
                    <h2 className="title-long">광고성 정보 수신 동의</h2>
                    <p class="event-info">
                      (회원 전용 다양한 이벤트 소식을 받아보세요)
                    </p>
                  </div>

                  <div className="choose-email">
                    <div className="email">
                      <input
                        type="checkbox"
                        name="checkTerms"
                        data-parsley-multiple="checkTerms"
                        className={this.email ? "toggleOff" : "toggleOn"}
                      ></input>
                      <p> (선택) 이메일 수신 동의 </p>
                    </div>
                    <div className="field-firstrow">
                      <input
                        type="checkbox"
                        name="checkTerms"
                        data-parsley-multiple="checkTerms"
                        className={
                          this.state.message ? "toggleOff" : "toggleOn"
                        }
                      ></input>
                      <p> (선택) 문자 수신동의 </p>
                    </div>
                  </div>

                  <div className="first-buttonlogin">
                    <div className="btn-2" onClick={this.register}>
                      회원가입 하기 (만 14세 이상)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
