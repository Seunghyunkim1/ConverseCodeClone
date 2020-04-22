import React , {Component} from 'react';
import './Registersuccess.scss';


class Registersuccess extends Component {

    render() {
        return (
        
        <div className="Registersuccess">
        <div className="SuccessFormAll">
        <div className="SuccessForm">
           <img className="SuccessImg" src="https://download.logo.wine/logo/Converse_(shoe_company)/Converse_(shoe_company)-Converse2-Logo.wine.png" alt=""/>  
           <p className="SuccessEnd"> 회원가입이 완료 되었습니다. </p>
           <p className="SuccessContent"> 회원가입이 성공적으로 완료되었습니다.<br/>
컨버스 공식 온라인 스토어의 다양한 서비스를 이용해보세요. </p>
          

           <div className="FirstButtonLogin">
                  <button className="ClickLogin">
                      지금 쇼핑하러 가기
                  </button>     
                </div>
                </div>
           </div>
            
       </div>
        
        );
    }
}

export default Registersuccess;