import React, { Component } from "react";

import PromoItem from "./PromoItem/PromoItem";

import "./Promo.scss";

class Promo extends Component {
  render() {
    return (
      <div className="Promo">
        <PromoItem
          promos={this.props.promos}
          currentNum={this.props.currentNum}
        />
      </div>
    );
  }
}

export default Promo;
