import React, { Component } from "react";

import "./Recommendation.scss";

class Recommendation extends Component {
  render() {
    return (
      <div className="Recommendation">
        <div className="head">
          <h3 className="title">추천상품</h3>
        </div>
        <div className="container">
          <ul className="grid">
            <li className="grid-item">
              <div className="wrapper">
                <a className="url">
                  <div className="image">
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/M9160_M9160_primary.jpg?browse"
                      alt=""
                    />
                  </div>
                  <div className="image">
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/M9160_M9160_hover.jpg?browse"
                      alt=""
                    />
                  </div>
                </a>
                <div className="badges">
                  <span className="text">BEST SELLER</span>
                </div>
              </div>
            </li>
            <li className="grid-item">
              <div className="wrapper">
                <a className="url">
                  <div className="image">
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/M9160_M9160_primary.jpg?browse"
                      alt=""
                    />
                  </div>
                  <div className="image">
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/M9160_M9160_hover.jpg?browse"
                      alt=""
                    />
                  </div>
                </a>
                <div className="badges">
                  <span className="text">BEST SELLER</span>
                </div>
              </div>
            </li>
            <li className="grid-item">
              <div className="wrapper">
                <a className="url">
                  <div className="image">
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/M9160_M9160_primary.jpg?browse"
                      alt=""
                    />
                  </div>
                  <div className="image">
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/M9160_M9160_hover.jpg?browse"
                      alt=""
                    />
                  </div>
                </a>
                <div className="badges">
                  <span className="text">BEST SELLER</span>
                </div>
              </div>
            </li>
            <li className="grid-item">
              <div className="wrapper">
                <a className="url">
                  <div className="image">
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/M9160_M9160_primary.jpg?browse"
                      alt=""
                    />
                  </div>
                  <div className="image">
                    <img
                      src="https://image.converse.co.kr/cmsstatic/product/M9160_M9160_hover.jpg?browse"
                      alt=""
                    />
                  </div>
                </a>
                <div className="badges">
                  <span className="text">BEST SELLER</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Recommendation;
