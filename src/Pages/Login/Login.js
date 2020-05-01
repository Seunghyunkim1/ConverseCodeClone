import React, { Component } from "react";
import "./Login.scss";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleId = (e) => {
    // console.log(e.target.value)
    this.setState({
      email: e.target.value,
    });
  };

  handlePwd = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  login = () => {
    fetch("http://10.58.7.60:8000/account/login", {
      method: "post",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("access_token", res.access_token);
          this.props.history.push("/");
        } else if (res.Message === "INVALID_USER") {
          alert("아이디 혹은 비밀번호가 잘못 입력되었습니다.");
        } else if (res.Message === "INVLALID_KEY") {
          alert("JSON 키에러");
        }
      });
  };

  render() {
    return (
      <div className="Login">
        <div className="container">
          <h1 className="title">로그인</h1>
          <form className="id_pw_form">
            <div className="id_input">
              <input
                onChange={this.handleId}
                type="text"
                placeholder="이메일 형태로 입력해주세요"
              />
            </div>

            <div className="pw_input">
              <input
                onChange={this.handlePwd}
                type="password"
                placeholder="비밀번호(영문/숫자/특수문자 조합 8자이상)"
              />
            </div>

            <div className="login-option">
              <div className="account-tools">
                <label className="i-checkbox" />
                <input
                  type="checkbox"
                  data-parsley-required-message="필수 입력 항목입니다"
                />
                <span class="text">로그인 상태 유지 </span>
              </div>

              <div className="find-idpwd">
                <div className="find-idpwdlink">아이디/비밀번호찾기</div>
              </div>
            </div>
          </form>

          <div className="login_btn">
            <button onClick={this.login}>로그인</button>
          </div>

          <div className="kakao_login">
            <button>
              <div className="speech_icon">
                <img
                  src="https://image.flaticon.com/icons/svg/2462/2462844.svg"
                  className="speech-bubblimg"
                  alt=""
                />
              </div>
              <div className="kakao_text">카카오 계정으로 1초 로그인</div>
            </button>
          </div>

          <div className="footer-info">
            <div className="register">
              <a href="/#" className="find-idpwdlink">
                회원가입
              </a>
            </div>

            <div className="not-member">
              <a href="/#" className="find-idpwdlink">
                비회원 주문조회
              </a>
            </div>
          </div>

          <div className="event">
            <div className="img">
              <img
                src="https://image.flaticon.com/icons/svg/548/548427.svg"
                alt=""
              />
            </div>

            <div className="info">
              <p>
                지금 회원으로 가입하시고, 특별한 멤버십 혜택과 <br></br>다양한
                회원 전용 상품을 만나보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
