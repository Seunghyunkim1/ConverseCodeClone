import React, { Component } from "react";
import filterImage from "../../../Images/Filter-nav-left.png";
//import arrowdown from "../../../Images/filter-nav-right.png";
import minus from "../../../Images/Category-minus.png";
import plus from "../../../Images/Category-plus.png";
import highshoe from "../../../Images/Highshoe.png";
import lowshoe from "../../../Images/Lowshoe.png";
import midshoe from "../../../Images/Midshoe.png";
import flatformshoe from "../../../Images/Flatformshoe.png";
import slipshoe from "../../../Images/Slipshoe.png";

import Card from "./Card/Card";

import "./CategoryBottomRight.scss";

class CategoryBottomRight extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     click: [false, false, false, false, false],
  //     clickFilter: false,
  //     clickNewproduct: false,
  //     mouseOverShow: false,
  //     products: [],
  //   };
  // }
  //배열만들고 셋스테잇에 프롭스로 만들고

  // componentDidMount() {
  //   let a = this.setState({});
  // }

  // handleClick = (num) => {
  //   let arr = this.state.click;

  //   arr[num] = !arr[num];

  //   this.setState({
  //     click: arr,
  //     //isFilterHide: "Filter-clicked"
  //   });
  // };

  // handleFilterClick = () => {
  //   this.setState({
  //     clickFilter: !this.state.clickFilter,
  //   });
  // };

  // handleNewproduct = () => {
  //   this.setState({
  //     clickNewproduct: !this.state.clickNewproduct,
  //   });
  // };

  // mouseOver = () => {
  //   this.setState({
  //     mouseOverShow: !this.state.mouseOverShow,
  //   });
  // };

  render() {
    console.log("br", this.props);

    return (
      <div className="CategoryBottomRight">
        <div className="category-bottom-right">
          <div className="product-layout">
            <div className="product-layout-detail">
              {this.props.category.map((a) => (
                <Card category={a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryBottomRight;
