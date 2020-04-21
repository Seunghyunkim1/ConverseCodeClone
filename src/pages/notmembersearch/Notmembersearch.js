import React , {Component} from 'react';
import './Notmembersearch.scss';

export class NotMemberSearch extends Component {

    render() {
        return (
            <div className="NotMemberSearch">
                <div className="FormAll">
                <form className="SearchForm">
                
                <h1 class="ContentTitle">비회원 주문 조회</h1>

                <div className="CheckInfo">
                    <p > 주문 시 입력하신 정보로 조회 하세요. </p>
                </div>

                <div className="CheckNumber" >
                <p className="PtagContent">주문번호는 주문완료 후 수신받은 이메일 또는 카카오톡을 통해 </p>
                 <p className="PtagContent"> 확인하실 수 있습니다.</p>
                </div>

                <form className="LoginForm">
                  <div className="FieldFirstLabel">
                    <input className="InputId" type="text" placeholder="주문번호, 이메일, 전화번호"  /> 
                  </div>
                  </form>

                  <div className="FirstButtonLogin">
                  <button className="ClickLogin">
                      주문 조회하기
                  </button>     
                </div>

             </form>
             </div>
             
           </div>
        );  
    }
}
export default NotMemberSearch;