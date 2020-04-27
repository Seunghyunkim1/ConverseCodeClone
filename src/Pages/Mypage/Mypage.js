import React, { Component } from "react";
import "./Mypage.scss";

export class Mypage extends Component {
  render() {
    return (
      <div className="Mypage">
        <div className="mypage-leftbox">
          <div className="mypage-info">
            <div className="mypage-img">
              <img
                src="https://image.flaticon.com/icons/svg/483/483361.svg"
                alt=""
              />
            </div>
            <div className="mypage-name">
              <span className="mypage-span"> 송은우 고객님 </span>
            </div>
          </div>

          <div className="customer-nav-allgroup">
            <div className="customer-nav">
              <span> 쇼핑 정보</span>
            </div>
            <ul className="customer-nav-list">
              <li className="customer-li-list"> 주문 배송 조회 </li>
              <li className="customer-li-list"> 반품 신청 </li>
              <li className="customer-li-list"> 반품 조회 </li>
              <li className="customer-li-list"> 입고 알림 신청 내역 </li>
            </ul>
          </div>

          <div className="customer-nav-allgroup">
            <div className="customer-nav">
              <span> 활동 정보</span>
            </div>
            <ul className="customer-nav-list">
              <li className="customer-li-list"> 드로우 내역 </li>
              <li className="customer-li-list"> 프로모션 코드 조회 </li>
              <li className="customer-li-list"> 상품 리뷰 </li>
              <li className="customer-li-list"> 위시 리스트</li>
              <li className="customer-li-list"> 1 : 1 문의 </li>
            </ul>
          </div>

          <div className="customer-nav-allgroup">
            <div className="customer-nav">
              <span> 나의 정보 </span>
            </div>
            <ul className="customer-nav-list">
              <li className="customer-li-list"> 배송지 관리 </li>
              <li className="customer-li-list"> 회원 정보 수정 </li>
              <li className="customer-li-list"> 비밀번호 변경 </li>
              <li className="customer-li-list"> 회원 탈퇴</li>
            </ul>
          </div>

          <div className="mypage-logout">
            <a href="/#"> 로그 아웃 </a>
          </div>
        </div>
        <div className="mypage-right">
          <div className="mypage-right-topall">
            <div className="mypage-right-topboder">
              <div className="mypage-right-topbox">
                <img
                  className="mypage-heartimg"
                  src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                  alt="heart"
                />
                <span className="mypage-rightspan"> 나의 위시 리스트 </span>
                <span className="mypage-amount"> 5 </span>
                <div className="mypage-line"> </div>
              </div>
              <div className="mypage-right-topbox">
                <img
                  className="mypage-promotiontimg"
                  src="https://image.flaticon.com/icons/svg/633/633719.svg"
                  alt="heart"
                />
                <span className="mypage-rightspan">
                  사용 가능 프로모션 카드
                </span>
                <span className="mypage-amount"> 5 </span>
                <div className="mypage-line"> </div>
              </div>
              <div className="mypage-right-topbox">
                <img
                  className="mypage-comentimg"
                  src="https://www.flaticon.com/premium-icon/icons/svg/2468/2468348.svg"
                  alt="heart"
                />
                <span className="mypage-rightspan"> 1: 1문의 </span>
                <span className="mypage-amount"> 5 </span>
              </div>
            </div>
          </div>

          <div className="customer-content-section">
            <span className="customer-content-ptag"> 최근 주문한 상품 </span>
          </div>
          <div className="delivery-status">
            <div className="delivery-content">
              <span className="delivery-span"> 배송준비중 </span>
              <span className="delivery-spanamount"> 3 </span>
            </div>

            <div className="delivery-content">
              <span className="delivery-span"> 배송중 </span>
              <span className="delivery-spanamount"> 3 </span>
            </div>

            <div className="delivery-content">
              <span className="delivery-span"> 배송완료 </span>
              <span className="delivery-spanamount"> 3 </span>
            </div>

            <div className="first-buttonlogin">
              <button className="click-login"> 주문/배송 조회</button>
            </div>
          </div>

          <div className="product-list">
            <img
              className="product-img"
              src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Icon-Logo.wine.svg"
              alt=""
            />
            <br />
            <span> 최근 주문하신 상품이 없습니다. </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Mypage;
