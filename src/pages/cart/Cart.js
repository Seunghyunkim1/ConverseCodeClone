import React , {Component} from 'react';
import './Cart.scss';

export class Cart extends Component {

    render() {
        return (
          <div className="Cart">
          <div className="CartWrap">
              <div className="CartEmpty">
               <div className="CartName">
                   <p className="CartList"> 장바구니 (0) </p>
                    <div className="CartBottomLine"> 
                    </div>
               </div>

               <div className="CartEmptyContent">

                 <p className="CartNo"> 장바구니에 담긴 상품이 없습니다. </p>
                 <p className="CartNoContent"> 척테일러, 척 70, 잭퍼셀, 원스타 등 지금 컨버스의 다양한 상품을 찾아보세요. </p>

                 <div className="FirstButtonLogin">
                  <button className="ClickLogin">
                      쇼핑 계속 하기
                  </button>     
                </div>
               </div>

              
              </div>
          </div>
        </div>
        );  
    }
}
export default Cart;