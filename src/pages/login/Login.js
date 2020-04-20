import React , {Component} from 'react';
import './Login.scss';

export class Login extends Component {

    render() {
        return (
           <div className ="Login">
            <div className="AccountAuthContent" >
                <div className ="AccountAuthHead">
                    <h1 className ="AccountAuthContentTitle">  로그인 </h1>
                </div>

                <form className="LoginForm">
                  <div className="FieldFirstLabel">
                    <input className="InputId" type="text" placeholder="이메일 형태로 입력해주세요"  /> 
                  </div>

                <div className="FieldSecondLabel">
                    <input className="InputPwd"  type="password" placeholder="비밀번호(영문/숫자/특수문자 조합 8자이상" /> 
                </div>

                <div className="loginInfo">
                  <div className="AccountTools">
                    <label className='IcheckBox'/>
                        <input type="checkbox"  data-parsley-required-message="필수 입력 항목입니다" />
                    <span class="text">로그인 상태 유지 </span>
                  </div>

                <div className="FindIdPwd">
                   <a href="#" className="FindIdPwdLink"> 아이디/비밀번호찾기</a>
                </div>
                </div>
                </form>

                <div className="FirstButtonLogin">
                  <button className="ClickLogin">
                      로그인
                  </button>     
                </div>

                <div className="ButtonLogin">
                  <button className="KakaoLogin">
                    <div className="SpeechBubble">
                        <img src="https://image.flaticon.com/icons/svg/2462/2462844.svg" className="SpeechBubblImg" alt=""/>
                    </div>
                    <div className="KakaoLoginImg">
                        <p class="KakaoLoginName"> 카카오 계정으로 1초 로그인 </p>
                     </div>
                  </button> 
                </div>    

                <div className ="FooterInfo">
                  <div className="Register">
                     <a href="/#" className="FindIdPwdLink"> 회원가입  </a>
                  </div>

                  <div className="NotMember">
                     <a href="/#" className="FindIdPwdLink"> 비회원 주문조회  </a>
                  </div>
                </div>
                
                <div className="LoginEventInfo">
                    <div className= "EventImg">
                    <img src="https://image.flaticon.com/icons/svg/548/548427.svg" alt=""/>
                    </div>

                    <div className="EventInfo">
                      <p className="EventInfoPtag"> 지금 회원으로 가입하시고, 특별한 멤버십 혜택과 <br></br>다양한 회원 전용 상품을 만나보세요. </p>
                    </div>
                </div>
             </div>
           </div>
        )
    }
}

export default Login;