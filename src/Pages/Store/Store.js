import React, { Component } from "react";

import Search from "./Search/Search";
import Map from "./Map/Map";

import "./Store.scss";

class Store extends Component {
  render() {
    return (
      <div className="Store">
        <div className="banner-mobile">
          <h1 className="title">매장찾기</h1>
          <a className="button">
            <img className="icon" src={""} alt="" />
          </a>
        </div>
        <div className="picture"></div>
        <div className="content-wrapper">
          <div className="content">
            <Search />
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
