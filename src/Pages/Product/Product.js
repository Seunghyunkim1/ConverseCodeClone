import React, { Component } from "react";

import ProductContainer from "./ProductContainer/ProductContainer";
import Recommendations from "./Recommendation/Recommendation";

import "./Product.scss";

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <ProductContainer />
        <Recommendations />
      </div>
    );
  }
}

export default Product;
