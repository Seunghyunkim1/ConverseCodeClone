import React, { Component } from "react";

import Gallery from "./Gallery/Gallery";
import DetailContainer from "./DetailContainer/DetailContainer";
import SideBar from "./SideBar/SideBar";

import "./ProductContainer.scss";

class ProductContainer extends Component {
  state = {
    products: [{}],
  };

  render() {
    return (
      <div className="ProductContainer">
        <Gallery />
        <SideBar />
        <DetailContainer />
      </div>
    );
  }
}

export default ProductContainer;
