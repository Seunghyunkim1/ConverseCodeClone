import React , {Component} from 'react';
import './Forgotpassword.scss';

export class Forgotpassword extends Component {

    render() {
        return (
            <div className="Forgotpassword">
                <form className="IdForm">
                 <div className="IdPwdForm">
                  <div className="IdPwd">
                    <div className="FindId"> 
                     아이디 찾기 
                     </div>
                     <div className="ResetPwd"> 
                      비밀번호 재설정
                     </div>
                   </div>
                     <div className="ForgotContent">
                        <span>   카카오 로그인을 연동하시면 아이디, 비밀번호를 찾을 필요 없이</span>
                        <br/>
                        <span >   더욱 편하게 이용하실 수 있습니다.   </span>

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

                <div className="ForgotExplanation">
                        <p>   계정에 연결된 정보를 입력하시면 <br/>
                        아이디 찾기와 비밀번호 재설정이 가능합니다.  </p>
                </div>

                <form className="LoginForm">
                  <div className="FieldFirstLabel">
                    <input className="InputId" type="text" placeholder="아이디를 입력하세요 (이메일형식)"  /> 
                  </div>
                </form>
                
                <div className="FirstButtonLogin">
                  <button className="ClickLogin">
                      다음
                  </button>     
                </div>
                <div className="NotMember">
                     <a href="/#" className="FindIdPwdLink"> 로그인으로 돌아가기 </a>
                  </div>
               </div>
             </form>
           </div>
        );  
    }
}
export default Forgotpassword;