import React from "react";
import "./modal.scss";
import Plusimg from "../../images/Cartadd-plus.png";
import Minusimg from "../../images/Cartadd-minus.png";

const Modal = () => {
  return (
    <React.Fragment>
      <div className="Modal-overlay" />
      <div className="Modal">
        <div className="content">
          <img
            className="modal-img"
            src="https://image.converse.co.kr/cmsstatic/product/167708C_167708C_primary.jpg?browse="
            alt=""
          />
        </div>
        <div className="modal-content">
          <div className="product-name">
            <h1 className="product-detail-name">
              {" "}
              척 70 아카이브 프린트 스타 앤 스트라이프{" "}
            </h1>
          </div>

          <div className="product-price">
            <h1> 95000원 </h1>
            <div className="product-info"></div>
            <a href="/#">자세히 보기</a>
          </div>

          <form className="size-form">
            <div className="product-size">
              <label className="size-box">
                <button class="variation-anchor">220</button>{" "}
              </label>
            </div>
            <div className="product-size">
              <label className="size-box">
                <button class="variation-anchor">230</button>{" "}
              </label>
            </div>
            <div className="product-size">
              <label className="size-box">
                <button class="variation-anchor">240</button>{" "}
              </label>
            </div>
            <div className="product-size">
              <label className="size-box">
                <button class="variation-anchor">250</button>{" "}
              </label>
            </div>
            <div className="product-size">
              <label className="size-box">
                <button class="variation-anchor">260</button>{" "}
              </label>
            </div>
          </form>
          <form className="size-secondform">
            <div className="product-size">
              <label className="size-box">
                <button class="variation-anchor">270</button>{" "}
              </label>
            </div>
            <div className="product-size">
              <label className="size-box">
                <button class="variation-anchor">280</button>{" "}
              </label>
            </div>
            <div className="product-size">
              <label className="size-box">
                <button className="variation-anchor">290</button>{" "}
              </label>
            </div>
          </form>

          <div className="shose-amount">
            <div className="amount">
              <input type="number" className="quantity" />{" "}
            </div>

            <button className="delivery-icon">
              <img className="plus-icon" src={Plusimg} alt="" />
            </button>
            <button className="delivery-icon">
              <img className="minus-icon" src={Minusimg} alt="" />
            </button>
          </div>

          <div className="first-buttonlogin">
            <button className="click-login"> 옵션 변경 </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Modal;
