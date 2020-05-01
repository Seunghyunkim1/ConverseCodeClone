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
import hearticon from "../../../Images/Heart-icon.png";

import "./CategorySidebar.scss";

class CategorySidebar extends Component {
  constructor() {
    super();
    this.state = {
      click: [false, false, false, false, false],
      clickFilter: false,
      clickNewproduct: false,
      mouseOverShow: false,
      dataForSiderbar: { filter: { gender: [], color: [], size: [] } },
    };
  }

  handleClick = (num) => {
    let arr = this.state.click;

    arr[num] = !arr[num];

    this.setState({
      click: arr,
    });
  };

  handleFilterClick = () => {
    this.setState({
      clickFilter: !this.state.clickFilter,
    });
  };

  componentDidMount() {
    fetch(`http://10.58.0.199:8000/product/filter/shoes`)
      .then((res) => res.json())
      .then((res) => {
        console.log("kkkkk", res);
        this.setState({
          dataForSiderbar: res,
        });
      });
  }

  handleGenderSelect = (gender) => {
    fetch(
      `http://10.58.0.199:8000/product/category/shoes?gender=${decodeURIComponent(
        gender
      )}`
    )
      .then((res) => res.json())
      .then((res) => this.props.handleData(res.product));
  };

  handleColorSelect = (e, colorCode) => {
    e.preventDefault();
    const qsCode = colorCode.slice(1); // #18228 => 18228
    fetch(`http://10.58.0.199:8000/product/category/shoes?color=${qsCode}`)
      .then((res) => res.json())
      .then((res) => this.props.handleData(res.product));
  };

  handleSizeSelect = (size) => {
    fetch(`http://10.58.0.199:8000/product/category/shoes?size=${size}`)
      .then((res) => res.json())
      .then((res) => this.props.handleData(res.product));
  };

  render() {
    const { clickFilter } = this.props;
    // this.state.dataForSiderbar.entries();

    const genderCategory = this.state.dataForSiderbar.filter.gender.map(
      (el) => {
        console.log("yyyy", el);
        return (
          <div className="inside1">
            <a
              className="inside-detail-top"
              onClick={() => this.handleGenderSelect(el)}
              herf="/#"
            >
              <input type="checkbox" className="checkbox" name="top" />
              <div>{el}</div>
            </a>
          </div>
        );
      }
    );

    const colorCategory = this.state.dataForSiderbar.filter.color.map((el) => {
      return (
        <a
          onClick={(e) => this.handleColorSelect(e, el.code)}
          style={{ backgroundColor: el.code }}
          className="dotdotdot"
          href="/#"
          target="_blank"
        ></a>
      );
    });

    const sizeCategory = this.state.dataForSiderbar.filter.size.map((el) => {
      return (
        <a
          onClick={() => this.handleSizeSelect(el)}
          className="square-inside"
          // style={{
          //   backgroundColor: this.state.colorChange[index] ? "skyblue" : "",
          // }}
          herf="/#"
        >
          <span>{el}</span>
        </a>
      );
    });
    return (
      <div className="CategorySidebar">
        <div
          className={clickFilter ? "filter-clicked" : "category-bottom-left"}
        >
          <div className="left-inside">
            <div className="left-inside-border">
              <div
                className={
                  this.state.click[0]
                    ? "left-inside-box-change0"
                    : "left-inside-box0"
                }
              >
                <div
                  className="box-detail-title"
                  onClick={() => {
                    this.handleClick(0);
                  }}
                >
                  <span>구분</span>
                  <img src={this.state.click[0] ? plus : minus} alt="icon" />
                </div>
                <div
                  className={
                    this.state.click[0] ? "box-ddd" : "box-detail-inside"
                  }
                >
                  {!this.state.click[0] && (
                    <div className="details1">{genderCategory}</div>
                  )}
                </div>
              </div>
              {/* <div className="left-inside-box"> */}
              <div
                className={
                  this.state.click[1]
                    ? "left-inside-box-change1"
                    : "left-inside-box1"
                }
              >
                <div
                  className="box-detail-title"
                  onClick={() => {
                    this.handleClick(1);
                  }}
                >
                  <span>제품타입</span>
                  <img src={this.state.click[1] ? plus : minus} alt="icon" />
                </div>
                <div
                  className="box-detail-inside"
                  style={{ display: this.state.click[1] ? "none" : "block" }}
                >
                  <div className="details1">
                    <div className="inside2">
                      <a className="inside-detail-top" herf="/#">
                        <input
                          type="checkbox"
                          className="checkbox"
                          name="top"
                        />
                        <div>스니커즈</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="left-inside-box"> */}
              <div
                className={
                  this.state.click[2]
                    ? "left-inside-box-change2"
                    : "left-inside-box2"
                }
              >
                <div
                  className="box-detail-title"
                  onClick={() => {
                    this.handleClick(2);
                  }}
                >
                  <span>색상</span>
                  <img src={this.state.click[2] ? plus : minus} alt="icon" />
                </div>
                <div
                  className="box-detail-inside"
                  style={{ display: this.state.click[2] ? "none" : "block" }}
                >
                  <div className="details1">
                    <div className="color-dots">{colorCategory}</div>
                  </div>
                </div>
              </div>
              {/* <div className="left-inside-box"> */}
              <div
                className={
                  this.state.click[3]
                    ? "left-inside-box-change3"
                    : "left-inside-box3"
                }
              >
                <div
                  className="box-detail-title"
                  onClick={() => {
                    this.handleClick(3);
                  }}
                >
                  <span>사이즈</span>
                  <img src={this.state.click[3] ? plus : minus} alt="icon" />
                </div>
                <div
                  className="box-detail-inside"
                  style={{ display: this.state.click[3] ? "none" : "block" }}
                >
                  <div className="details1">
                    <div className="shoe-size">
                      <div className="shoe-size-detail">{sizeCategory}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="left-inside-box"> */}
              <div
                className={
                  this.state.click[4]
                    ? "left-inside-box-change4"
                    : "left-inside-box4"
                }
              >
                <div
                  className="box-detail-title"
                  onClick={() => {
                    this.handleClick(4);
                  }}
                >
                  <span>실루엣</span>
                  <img src={this.state.click[4] ? plus : minus} alt="icon" />
                </div>
                <div
                  className="box-detail-inside"
                  style={{ display: this.state.click[4] ? "none" : "block" }}
                >
                  <div className="details1">
                    <div className="silhouette">
                      <div className="silhouette-detail">
                        <a className="shoe-silhouette">
                          <img
                            className="shoeshoeshoe"
                            src={highshoe}
                            alt="high"
                          />
                          <span>하이</span>
                        </a>
                        <a className="shoe-silhouette">
                          <img
                            className="shoeshoeshoe"
                            src={lowshoe}
                            alt="low"
                          />
                          <span>로우</span>
                        </a>
                        <a className="shoe-silhouette">
                          <img
                            className="shoeshoeshoe"
                            src={midshoe}
                            alt="Mid"
                          />
                          <span>미드</span>
                        </a>
                        <a className="shoe-silhouette">
                          <img
                            className="shoeshoeshoe"
                            src={flatformshoe}
                            alt="Flatform"
                          />
                          <span>플랫폼</span>
                        </a>
                        <a className="shoe-silhouette">
                          <div className="shoe-more">
                            <img
                              className="shoeshoeshoe"
                              src={slipshoe}
                              alt="Slip"
                            />
                            <span>슬립</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategorySidebar;
