import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { PRODUCT_URL } from "../../Config";

import ProductContainer from "./ProductContainer/ProductContainer";
import Recommendations from "./Recommendation/Recommendation";

import "./Product.scss";

class Product extends Component {
  state = {
    products: [] && false,
    instagram: [] && false,
    recommendations: [] && false,
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    // console.log(this.props.match);
    const ID = this.props.match.params.id;

    fetch(`${PRODUCT_URL}/${ID}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          products: res.product_detail[0],
          instagram: res.instagram,
          recommendations: res.recommendations,
        });
      });
  }

  render() {
    return (
      <div className="Product">
        <h1>fetch...</h1>
        {this.state.products && this.state.instagram && (
          <ProductContainer
            product={this.state.products}
            instagram={this.state.instagram}
          />
        )}
        {this.state.recommendations && (
          <Recommendations recommendations={this.state.recommendations} />
        )}
      </div>
    );
  }
}

export default Product;
