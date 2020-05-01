import React, { Component } from "react";

import { API_SE_URL, API_HO_URL } from "../../Constants";

import filterImage from "../../Images/Filter-nav-left.png";
import minus from "../../Images/Category-minus.png";
import plus from "../../Images/Category-plus.png";
import highshoe from "../../Images/Highshoe.png";
import lowshoe from "../../Images/Lowshoe.png";
import midshoe from "../../Images/Midshoe.png";
import flatformshoe from "../../Images/Flatformshoe.png";
import slipshoe from "../../Images/Slipshoe.png";
import hearticon from "../../Images/Heart-icon.png";
import CategorySidebar from "../Category/CategorySidebar/CategorySidebar";
import CategoryBottomRight from "../Category/CategoryBottomRight/CategoryBottomRight";
import "./Category.scss";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      clickFilter: false,
      clickNewproduct: false,
      mouseOverShow: false,
    };
  }

  componentDidMount() {
    console.log("comunt");
    fetch(`${API_SE_URL}/product/category/shoes`)
      // fetch("http://10.58.0.199:8000/product/category/onestar")
      .then((res) => res.json())
      // .then((res) => {
      //   console.log(res);
      // });

      .then((res) =>
        this.setState(
          {
            category: res.product,
          },
          () => console.log("asdasd", this.state.category)
        )
      );
  }

  handleFilterClick = () => {
    this.setState({
      clickFilter: !this.state.clickFilter,
    });
  };

  handleNewproduct = () => {
    this.setState({
      clickNewproduct: !this.state.clickNewproduct,
    });
  };

  mouseOver = () => {
    this.setState({
      mouseOverShow: !this.state.mouseOverShow,
    });
  };

  dataHandler = (data) => {
    console.log(data);
    this.setState({ category: data });
  };

  render() {
    console.log("render");
    // console.log("dddd", {this.category});

    return (
      <div className="Category">
        {/* {this.state.mouseOverShow ? (
          <div>첫 번째 경우</div>
        ) : (
          <div>두 번째 경우</div>
        )} */}
        <div className="dashboard">
          <div className="location-user">
            <a
              className="home"
              href="/https://www.converse.co.kr/"
              target="_blank"
            >
              Home
            </a>
            <a
              className="sinbal"
              herf="/https://www.converse.co.kr/category/shoes"
              target="_blank"
            >
              신발
            </a>
          </div>
          <div className="dashboard-image-part">
            <div className="dashboard-image-inside">
              <div className="dash-text-center">SHOES</div>

              <img
                className="dashImage1"
                src="https://image.converse.co.kr/cmsstatic/structured-content/15400/D-converse-SP20-PWH-Best-Sellers-.jpg"
                alt="shoes"
              />
              {/* <img className = "dashImage1" src="https://image.converse.co.kr/cmsstatic/structured-content/15400/overview_plp_title_bn_mc.jpg" alt="shoes1" /> */}
            </div>
          </div>
        </div>
        <div className="filter-nav">
          <div className="filter-nav-inside">
            <button
              className={"filter-nav-button"}
              onClick={this.handleFilterClick}
            >
              <div
                className={
                  this.state.clickFilter ? "change-filter" : "filter-nav-button"
                }
              >
                <span className="hide-filter">필터 숨기기</span>
                <img src={filterImage} alt="filter" />
              </div>
            </button>
            <div className="filter-nav-center">
              <div className="product-count">
                <span> 총 175개의 상품</span>
              </div>
            </div>
            <div className="filter-nav-newproducts">
              {/* onClick={this.handleNewproduct}> */}
              {/* <span className="new-product">신상품순</span> */}
              <div className="new-product-dropdown">
                {/* <labal for="products"></labal>  */}

                <select className="option-products">
                  <option value="newproduct">신상품순</option>
                  <option value="highpriority">인기상품순</option>
                  <option value="highprice">높은가격순</option>
                  <option value="lowprice">낮은가격순</option>
                </select>
              </div>
              {/* <img src={arrowdown} alt="arrow"/> */}
            </div>
          </div>
        </div>
        <div className="category-bottom">
          <CategorySidebar
            handleData={this.dataHandler}
            clickFilter={this.state.clickFilter}
          />

          <CategoryBottomRight category={this.state.category} />
        </div>
      </div>
    );
  }
}

export default Category;
