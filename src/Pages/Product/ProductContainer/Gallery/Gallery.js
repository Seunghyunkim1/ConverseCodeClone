import React, { Component } from "react";

import "./Gallery.scss";

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <div className="primary-image">
          <img
            className="main-image"
            src="https://image.converse.co.kr/cmsstatic/product/M9697C_M9697C_pdp-primary.jpg?gallery="
            alt=""
          />
        </div>
        <div className="image-gallery">
          <div className="image-container">
            <div className="image-wrapper">
              <div className="media-item">
                <img
                  className="item"
                  src="https://image.converse.co.kr/cmsstatic/product/M9697C_M9697C_02.jpg?browse="
                  alt=""
                />
              </div>
            </div>
            <div className="image-wrapper">
              <div className="media-item">
                <img
                  className="item"
                  src="https://image.converse.co.kr/cmsstatic/product/M9697C_M9697C_02.jpg?browse="
                  alt=""
                />
              </div>
            </div>
            <div className="image-wrapper">
              <div className="media-item">
                <img
                  className="item"
                  src="https://image.converse.co.kr/cmsstatic/product/M9697C_M9697C_02.jpg?browse="
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
