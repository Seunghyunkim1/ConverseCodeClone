import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            {this.props.recommendations.map((recommendation) => (
              <li className="grid-item">
                <div className="wrapper">
                  <a className="url" href={`/product/${recommendation.code}`}>
                    <div className="image">
                      <img src={recommendation.url} alt="" />
                    </div>
                    <div className="image">
                      <img src={recommendation.hover} alt="" />
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Recommendation;
