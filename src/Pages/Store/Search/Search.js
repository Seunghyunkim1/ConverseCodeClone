import React, { Component } from "react";

import "./Search.scss";

class Search extends Component {
  render() {
    const { checked, handleCheck } = this.props;

    return (
      <div className="Search">
        <form className="search-form" method="GET" action="/store">
          <div className="search-field">
            <div className="input-wrapper">
              <input
                className="input-store"
                onChange={this.props.handleChange}
                name="input-store"
                type="text"
                placeholder="매장명 또는 주소 입력"
              ></input>
            </div>
            <div className="button-wrapper">
              <button className="button-store">
                <span className="text">검색</span>
              </button>
            </div>
          </div>
          <div className="filter-list">
            <label className="checkbox">
              <input
                className="check all-store"
                type="checkbox"
                checked={checked["all"]}
                onChange={handleCheck}
                value="all"
                name="all-store"
              ></input>
              <span className="text">전체</span>
            </label>
            <label className="checkbox">
              <input
                className="check item-store"
                type="checkbox"
                checked={checked["item"]}
                onChange={handleCheck}
                value="item"
                name="item-store"
              ></input>
              <span className="text">단독매장</span>
            </label>
            <label className="checkbox">
              <input
                className="check mall-store"
                type="checkbox"
                checked={checked["mall"]}
                onChange={handleCheck}
                value="mall"
                name="mall-store"
              ></input>
              <span className="text">백화점/쇼핑몰</span>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
