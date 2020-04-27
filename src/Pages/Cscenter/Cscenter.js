import React, { Component } from "react";
import "./Cscenter.scss";
import Plusimg from "../../Images/Cartadd-plus.png";
import Minusimg from "../../Images/Cartadd-minus.png";

export class Cscenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickbutton: [false, false, false, false, false],
      showModal: false,
    };
  }

  handleClick = (num) => {
    let arr = this.state.clickbutton;
    arr[num] = !arr[num];
    this.setState({
      clickbutton: arr,
    });
  };

  render() {
    return (
      <div className="Cscenter">
        <div className="mypage-leftbox">
          <div className="customer-nav-allgroup">
            <div className="customer-nav">
              <span> 자주 묻는 질문 </span>
            </div>
            <ul className="customer-nav-list">
              <li className="customer-li-list"> 주문/결제 </li>
              <li className="customer-li-list"> 취소/반품 </li>
              <li className="customer-li-list"> 상품/배송 </li>
              <li className="customer-li-list"> 프로모션 코드/이벤트 </li>
              <li className="customer-li-list"> 회원 혜택/서비스 </li>
              <li className="customer-li-list"> 사이트 이용/기타 </li>
            </ul>
          </div>

          <div className="customer-nav-allgroup">
            <div className="customer-nav">
              <span> 비회원 주문조회 </span>
            </div>
          </div>

          <div className="customer-nav-allgroup">
            <div className="customer-nav">
              <span> 공지사항 </span>
            </div>
          </div>

          <div className="customer-nav-allgroup">
            <div className="customer-nav">
              <span> 매장 안내 </span>
            </div>
          </div>
        </div>
        <div className="mypage-right">
          <div className="mypage-right-topall">
            <div className="mypage-right-topboder">
              <div className="mypage-right-topbox">
                <img
                  className="mypage-orderimg"
                  src="https://image.flaticon.com/icons/svg/633/633611.svg"
                  alt="heart"
                />
                <p className="mypage-rightptag"> 주문/결제 </p>
              </div>

              <div className="mypage-right-topbox">
                <img
                  className="mypage-orderimg"
                  src="https://www.flaticon.com/premium-icon/icons/svg/2182/2182553.svg"
                  alt="heart"
                />
                <p className="mypage-rightptag"> 취소/반품 </p>
              </div>

              <div className="mypage-right-topbox">
                <img
                  className="mypage-orderimg"
                  src="https://image.flaticon.com/icons/svg/709/709790.svg"
                  alt="heart"
                />
                <p className="mypage-rightptag"> 상품/배송 </p>
              </div>

              <div className="mypage-right-topbox">
                <img
                  className="mypage-orderimg"
                  src="https://image.flaticon.com/icons/svg/633/633719.svg"
                  alt="heart"
                />
                <p className="mypage-rightptag"> 프로모션 코드/이벤트 </p>
              </div>

              <div className="mypage-right-topbox">
                <img
                  className="mypage-orderimg"
                  src="https://image.flaticon.com/icons/svg/747/747376.svg"
                  alt="heart"
                />
                <p className="mypage-rightptag"> 회원혜택/서비스 </p>
              </div>

              <div className="mypage-right-topbox">
                <img
                  className="mypage-orderimg"
                  src="https://image.flaticon.com/icons/svg/747/747396.svg"
                  alt="heart"
                />
                <p className="mypage-rightptag"> 사이트이용 / 기타 </p>
              </div>
            </div>
          </div>

          <div className="often-ask-question">
            <p> 자주 묻는 질문 </p>
          </div>
          <div className="guide">
            <div className="movement-guide">
              <div className="movement-content">
                <button
                  className="movement-icon"
                  onClick={() => {
                    this.handleClick(0);
                  }}
                >
                  <p> Q . 반품 신청은 어떻게 하나요? </p>
                  <img className="plus-icon" src={Minusimg} alt="" />
                </button>
                <div className={this.state.clickbutton[0] ? "block" : "move"}>
                  <p className="movement-ultag">
                    ① 마이페이지 - 회원의 경우, 로그인 후 마이페이지(MY PAGE)로
                    이동합니다.
                  </p>
                  <p className="movement-ultag">
                    - 비회원의 경우, 로그인 > 비회원 주문 조회 > 반품할 해당
                    주문 조회 후 이메일 및 SMS 인증하여 마이페이지(MY PAGE)로
                    이동합니다.
                  </p>
                  <p className="movement-ultag">
                    {" "}
                    ② 쇼핑정보 > 주문내역/배송현황 메뉴 클릭 - 주문의 상태가
                    [배송완료]인 주문만 신청이 가능합니다. - 반품신청은 쇼핑정보
                    > 반품 신청 메뉴에서 가능합니다. * 모바일(MC)에서는 좌측
                    상단의 (뒤로 가기) 클릭하여 반품 신청 메뉴로 이동합니다.{" "}
                  </p>
                  <p className="movement-ultag">
                    {" "}
                    ③ 쇼핑정보 > 반품 신청 메뉴 클릭 > 해당 반품 주문 상품 확인
                    - [전체반품]의 경우, “전체반품” 클릭합니다. - [부분반품]의
                    경우, 부분 반품 상품 선택하여 상단의 “부분 반품하기”
                    클릭합니다. * 수량반품의 경우, [부분반품]과 동일하게 진행 후
                    해당 상품 수량 변경 가능합니다.{" "}
                  </p>
                  <p className="movement-ultag">
                    {" "}
                    ④ 반품 정보 기입 - 반품 접수 고객명, 연락처, 주소, 상세주소,
                    수거 메모, 반품사유 순차적으로 기입합니다. - 반품사유의
                    경우, 상품결함 또는 파손은 결함파손, 단순 변심 및 사이즈
                    변경 등 해당 반품 사유 등록합니다.{" "}
                  </p>
                  <p className="movement-ultag">
                    ⑤ [반품신청완료] 클릭 - 모든 반품 정보 기입 후 하단의
                    [반품신청완료] 클릭하여 반품 신청을 합니다.
                  </p>
                  <p className="movement-ultag">
                    {" "}
                    ⑥ 반품 현황이 궁금하신 경우에는 쇼핑정보 > 반품 현황
                    메뉴에서 확인 가능합니다. * 반품 신청 시 주의 사항 -
                    반품신청 취소는 쇼핑정보 > 반품 현황 메뉴에서 [반품접수]
                    상태일 경우 반품접수 취소 가능합니다.
                  </p>
                  <p className="movement-ultag">
                    - 결제수단 “모바일 소액결제”인 경우, 고객센터로 문의
                    바랍니다.{" "}
                  </p>
                  <p className="movement-ultag">
                    - 반품 접수는 상품 수령 후 반품 가능한 기간 이내에 상품 미
                    훼손 및 미 사용 한 경우에만 해당 합니다. (ex : Tag 제거 및
                    시착이나 사용 등의 흔적이 있는 경우 상품가치 훼손 사유로
                    불가) - 반품 접수 절차 없이 임의로 상품을 반송하실 경우
                    처리가 지연될 수 있습니다. - 상품 반품 후 반품 송장 번호를
                    보관해주십시오.
                  </p>
                </div>
              </div>
            </div>

            <div className="delivery-guide">
              <div className="delivery-content">
                <button
                  className="delivery-icon"
                  onClick={() => {
                    this.handleClick(1);
                  }}
                >
                  <p> Q . 배송 내역은 어떻게 확인 하나요? </p>
                  <img className="plus-icon" src={Minusimg} alt="" />
                </button>
                <div className={this.state.clickbutton[1] ? "block" : "move"}>
                  <p className="movement-ultag">[회원일 경우]</p>
                  <p className="movement-ultag">
                    주문이 되면 송장 번호와 주문 내역서가 이메일로 발송됩니다.
                    CJ 대한통운 택배 사이트 내 배송조회 사이트
                    (https://www.doortodoor.co.kr/parcel/pa_004.jsp) 에서
                    송장번호를 기입하시면 자세하게 확인하실 수 있습니다. 운송장
                    번호는 배송확인 이메일 또는 마이페이지에서 확인해 주세요.
                  </p>
                  <p className="movement-ultag">[비회원일 경우] </p>
                  <p className="movement-ultag">
                    로그인 전용 화면에 있는 '비회원 주문 조회'를 클릭하신 후
                    주문 시 입력했던 주문번호, 이메일, 혹은 전화번호를 통해 주문
                    조회 가능합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="delivery-guide">
              <div className="delivery-content">
                <button
                  className="delivery-icon"
                  onClick={() => {
                    this.handleClick(2);
                  }}
                >
                  <p> Q. 환불 기간은 어떻게 되나요? </p>
                  <img className="plus-icon" src={Minusimg} alt="" />
                </button>
                <div className={this.state.clickbutton[2] ? "block" : "move"}>
                  <p className="movement-ultag">
                    A : 결제 유형에 따른 환불 소요 기간은 다음과 같습니다.
                  </p>
                  <p className="movement-ultag">
                    1) 카드 결제 : 카드사 마다 매출취소 처리기간이 다르므로
                    반품완료 후 영업일 3~7일 정도 소요됩니다.
                  </p>
                  <p className="movement-ultag">
                    2) 무통장 환불: 반품완료 후 고객 환불계좌 등록일로부터
                    영업일 7일 이내에 환불 받으실 수 있습니다. 3) 할인쿠폰 :
                    주문취소의 경우 자동으로 쿠폰복원되어 재사용이 가능합니다.
                    (단, 반품 및 쿠폰의 유효기간이 경과한 경우에는 자동 쿠복
                    복원이 불가 합니다)
                  </p>
                  <p className="movement-ultag">
                    ※ 피해 보상 기준은 소비자피해보상규정(재정경제부 고시)을
                    적용합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="delivery-guide">
              <div className="delivery-content">
                <button
                  className="delivery-icon"
                  onClick={() => {
                    this.handleClick(3);
                  }}
                >
                  <p> Q. 주문 취소나 변경은 어떻게 하나요? </p>
                  <img className="plus-icon" src={Minusimg} alt="" />
                </button>
                <div className={this.state.clickbutton[3] ? "block" : "move"}>
                  <p className="movement-ultag">
                    A : 주문단계가 입금확인중 또는 결제 완료 상태의 경우 주문
                    취소나 변경이 가능하나,
                  </p>

                  <p className="movement-ultag">
                    배송준비중 또는 배송중 상태의 경우 취소나 변경은 불가능
                    합니다. 단, 주문 후 옵션변경은 불가 합니다. 자세한 사항은
                    고객지원센터로 문의해 주시기 바랍니다.
                  </p>
                  <p className="movement-ultag">
                    * 고객지원센터 : conversekorea@converse.co.kr / 080-987-0182
                  </p>
                </div>
              </div>
            </div>

            <div className="delivery-guide">
              <div className="delivery-content">
                <button
                  className="delivery-icon"
                  onClick={() => {
                    this.handleClick(4);
                  }}
                >
                  <p>
                    {" "}
                    Q. 컨버스 사이트에서 구매한 제품을 오프라인 매장에서 교환,
                    환불받을 수 있나요?{" "}
                  </p>
                  <img className="plus-icon" src={Minusimg} alt="" />
                </button>
                <div className={this.state.clickbutton[4] ? "block" : "move"}>
                  <p className="movement-ultag">
                    A : 온라인 몰에서 구매하신 제품의 경우 오프라인 매장에서
                    교환, 환불받으실 수 없습니다.
                  </p>

                  <p className="movement-ultag">
                    번거로우시더라도 오프라인 매장에서 구매하셨을 경우 구매하신
                    매장에 교환, 환불을 요청하셔야 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="notice">
            <p> 공지사항 </p>
          </div>
          <div className="notice-guide">
            <ul className="notice-ultag">
              <li className="notice-litag">
                {" "}
                이용약관과 개인정보처리방침 일부가 변경됩니다.{" "}
              </li>
              <p className="notice-ptag"> 2020. 03 . 25</p>
            </ul>
          </div>

          <div className="notice-guide">
            <ul className="notice-ultag">
              <li className="notice-litag">
                개인정보처리방침 일부가 변경됩니다.
              </li>
              <p className="notice-ptag"> 2020. 03 . 23</p>
            </ul>
          </div>

          <div className="notice-guide">
            <ul className="notice-ultag">
              <li className="notice-litag">
                신규 가입 회원 1만원 할인 코드 사용 관련
              </li>
              <p className="notice-ptag"> 2020. 03 . 11</p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Cscenter;
