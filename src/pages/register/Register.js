import React , {Component} from 'react';
import './Register.scss';
import HeaderImg from "../../images/converseheader.jpg";

class Register extends Component {

    render() {
        return (
        
        <div className="Register">
            <div className="SignUpHeader">
                <img className="HeaderImg" src={HeaderImg} alt="헤더이미지" />
                
                <div className="HeaderContent"> 
                <p className="HeaderContentRegister">  회원가입 </p> 
                </div>

                <div className="HeadContentAll">
               <p className="HeaderFirstContent"> 지금 컨버스 회원으로 가입하시고, 특별한 멤버십 혜택과</p>
               <p className="HeaderSecondContent"> 다양한 회원 전용 상품을 만나보세요.</p>
               </div>
                
            </div>
            
            <form className="RegisterMain">
            <div className="SignUpBody">
                <div className="EntryField">
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

                <div className="RegisterOr">
                  <span className="OrSpan"> OR </span>
                </div> 

                <div className="AccountSignup">
                <div className="NeedInfo">
                    필수정보
                </div>

                <input className="InputEmail" type="text" placeholder ="이메일 형태로 입력해 주세요.(필수)"></input>
                <input className="InputEmail" type="password" placeholder ="비밀번호 (영문/숫자/특수문자 조합 8자 이상)"></input>
                <input className="InputEmail" type="password" placeholder ="비밀번호 입력 확인"></input>
                <input className="InputEmail" type="text" placeholder ="이름을 입력해주세요. (필수)"></input>
                <input className="InputEmail" type="text" placeholder ="휴대폰 번호 '-' 표 없이 입력해주세요. (필수)"></input>
                
                <div className="FieldName">
                * 생일/성별은 기입 후 수정이 불가합니다.
                </div>
                <input className="InputEmail" type="text" placeholder ="생년월일을 입력해 주세요. (19990101)"></input>
                </div>

                <div className="MailFemail">
                 <div className="Femail">
                      여성
                 </div>
                 <div className="Mail">
                      남성              
                 </div>
                </div>
                </div>
                <div className="AgreeField">
                 <div className="AgreeSignup">
                    <label className ="AgreeBox" >
                        <input type="checkbox" /> 
                        <p> 모든 약관 동의</p>
                        
                    </label>
                    <p className="SelectContent"> 
                    아래 모든 약관(필수), 개인정보 수집 및 이용에 대한 동의 <br/>
                    (필수) 및 광고성 정보수신 동의 (선택) 내용을 확인하고 전체 <br/>
                    동의합니다. 
                    </p>

                <ul className="UlContent">
                   <li className="LiContent"> - 필수 정보의 수집 및 이용에 관한 동의를 거부하실 수 있으나, 
                   <br/> &nbsp; 다만 이 경우 회원 가입 및 관련 서비스 이용은 불가합니다.</li>

                   <li className="LiContent">  - 선택 항목에 대한 동의를 거부하더라도 회원가입에 영향을 미치지 않습니다.</li>
                   <li className="LiContent"> - 만 14세 미만은 서비스 이용이 불가합니다.</li>
                
                </ul>
             </div>

             <div className="AccountSignupFieldset">
                <div className="FieldsetLegend">
                    <h2 className="titleLong">
                    컨버스 공식 온라인 스토어 회원 약관 및 개인정보 수집 • 이<br/>
                    용에 대한 동의
                    </h2>
                </div>

                <div className="FieldRow">
                    
                    <div className="FieldAll">
                    <div className="FieldFistRow">
                    <input type="checkbox" name="checkTerms" id="checkTerms" data-parsley-multiple="checkTerms"></input>
                    <p> (필수) 이용 약관에 대한 동의 </p>
                    </div>

                    <div className="FieldAtag">
                     <a href="/#"> 전문보기  </a>
                    </div>
                    </div>

                    <div className="FieldAll">
                    <div className="FieldFistRow">
                    <input type="checkbox" name="checkTerms" id="checkTerms" data-parsley-multiple="checkTerms"></input>
                    <p> (필수) 개인정보 수집 및 이용에 대한 동의 </p>
                    </div>

                    <div className="FieldAtag">
                     <a href="/#"> 전문보기  </a>
                    </div>
                    </div>

                    <div className="FieldsetLegend">
                    <h2 className="titleLong">
                    광고성 정보 수신 동의
                    </h2>
                    <p class="EventInfo">(회원 전용 다양한 이벤트 소식을 받아보세요)</p>
                </div>
                

                <div className="ChooseEmail">
                    <div className="Email">
                    <input type="checkbox" name="checkTerms" id="checkTerms" data-parsley-multiple="checkTerms"></input>
                    <p>  (선택) 이메일 수신 동의  </p>
                    </div>
                    <div className="FieldFistRow">
                    <input type="checkbox" name="checkTerms" id="checkTerms" data-parsley-multiple="checkTerms"></input>
                    <p> (선택) 문자 수신동의  </p>
                    </div>
                </div>

                <div className="FirstButtonLogin">
                  <button className="ClickLogin">
                      회원가입 하기 (만 14세 이상)
                  </button>     
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

export default Register;