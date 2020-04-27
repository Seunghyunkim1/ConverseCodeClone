import React, { Component } from "react";

import PromoItem from "./PromoItem/PromoItem";

import "./Promo.scss";

class Promo extends Component {
  render() {
    // console.log("promo", this.props.promos);
    return (
      <div className="Promo">
        <PromoItem promos={this.props.promos} />
      </div>
    );
  }
}

export default Promo;
