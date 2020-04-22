import React , {Component} from 'react';
import './Cartadd.scss';

export class Cartadd extends Component {
    constructor() {
        super()
        this.State = {
            click : [false,false]
        }
    }

    handleClick = (num) => {
        let arr = this.state.click;
        arr[num] = !arr[num]
            this.setState ({
                click: arr
            }) 
    }

    render() {
        return (
          <div className="Cartadd">
          <div className="cart-wrap">
              <div className="cart-empty">
               <div className="cart-name">
                   <p className="cart-list"> 장바구니 (1) </p>
                   <div className="cart-all">
                    <div className="cart-bottomline"> 
                        <div className="cart-bottomimg">
                        <img className="cart-imgsize" src="https://image.converse.co.kr/cmsstatic/product/167708C_167708C_primary.jpg?browse" alt="" /> 
                     </div>

                <div className="cart-content" >
                    <div className="shoseinfo">
                    <div className ="shoseinfo-left">
                        <a href="/#" >척 70 아카이브 프린트 스타 앤 스트라이프</a>
                        
                        <div className="shose-info">
                            <span className="shoes-color"> 블랙</span>
                            <span> / </span>
                            <span className="shoes-size"> 270 </span>
                        </div>

                        <div className="shoes-amount">
                            <span > 수량 : 1 </span>
                        </div>
                        </div>   
                       

                        <div className ="shoseinfo-right">
                         <span className="price">  95,000원</span>
                         <div className="button">
                         <input className="input-account" type="text" placeholder=""  /> 
                            
                            <button className="minus-button">  - </button>
                            <button className="plus-button"> + </button>
                         </div> 
                        </div>
                        </div>

                    <div className="add-wishlist">
                        <div className="wishlist">
                        <div className="wishlist-content" >
                            <img className="wishlist-img" src="https://image.flaticon.com/icons/svg/535/535285.svg" alt=""/>
                            <span className="wishlist-add"> 위시리스트 추가 </span>
                        </div>
                        
                        <div className="buy-after">
                            <img className="buy-afterimg" src="https://image.flaticon.com/icons/svg/2088/2088617.svg" alt=""/>
                           <span className="buy-left"> 나중에 구매하기 </span>
                        </div>
                        </div>

                        <div className="option"> 
                          <a href="/#" className="change-option"> 옵션변경 </a>
                          <a href="/#" className="delete-option"> 삭제 </a>
                        </div>
                    </div>
                  <div> 
                 </div>
              </div>
            </div> 
                <div className="clear-cart">
                    장바구니 비우기
               </div>
          </div>
         </div>
        </div>
      </div>

      <div className="cart-summary">
          <h2 class="summary-title">주문금액</h2>
          <div class="summary-content">
	  <div class="order-totals">
	    <div class="order-total-item">
	      <span class="label-align-center">상품금액</span>
	      <span class="value">
	        
	        <span class="sale">95,000 원</span>
	      </span>
	    </div>
	    <div class="order-total-item">
	      <span class="label-align-center">배송비</span>
	      <span class="value">0 원</span>
	    </div>

	    <div class="order-total-item">
	      <span class="label-center">총 할인 금액</span>
	      <span class="value">
					0 원
	      </span>
	    </div>
			
	    <div class="order-total-highlight">
	      <span class="label flex flex-align-center">총 결제 금액</span>
	      <span class="value">95,000 원</span>
	    </div>			
	  </div>
      <div className="order-checkout">
      <div className="first-buttonlogin">
                  <button className="click-login">
                      주문하기
                  </button>     
                </div>
            </div>
	    </div>
    <div className="cart-entry-promo">
    <a href="/#" class="promo-message">고객님의 프로모션 코드를 지금 확인하세요!</a>
     </div>

<div className="input-code">
     <div className="row-flex-no">
        <input type="text" className="promo-code" name="promoCode" placeholder="코드입력"/>
     </div>

     <div class="submit-promo">
			<button type="submit" className="btn-submit"> 적용 </button>
	  </div>
    </div>

    <div className="movement-guide">
        <div className="movement-content">
            <p> 이용안내 </p>
        </div>
     </div>

     
    <div className="movement-guide">
        <div className="movement-content">
            <p> 배송비 안내 </p>
        </div>
     </div>
  </div>
 </div>  
        );  
    }
}
export default Cartadd;