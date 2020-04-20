import React , {Component} from 'react';
import './Forgotusername.scss';

export class Forgotusername extends Component {

    render() {
        return (
            <div className="ForgotId">
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
                        <span>
                    카카오 로그인을 연동하시면 아이디, 비밀번호를 찾을 필요 없이
                    더욱 편하게 이용하실 수 있습니다.   
                        </span>

                     </div>
                  
                     </div>
                </form>
               


            </div>
        );  
    }
}
export default Forgotusername;