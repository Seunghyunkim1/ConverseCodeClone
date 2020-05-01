import React, { Component } from "react";

import Gallery from "./Gallery/Gallery";
import DetailContainer from "./DetailContainer/DetailContainer";
import SideBar from "./SideBar/SideBar";

import "./ProductContainer.scss";

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [] && false,
      summary: {} && false,
      option: {} && false,
      introduction: {} && false,
      instagram: [] && false,
      information: {} && false,
    };
  }

  componentDidMount() {
    const summary = this.setSummary();
    const option = this.setOption();
    const introduction = this.setIntroduction();
    const information = this.setInformation();

    //setState
    this.setState({
      gallery: this.props.product.media_url,
      summary: summary,
      option: option,
      introduction: introduction,
      instagram: this.props.instagram,
      information: information,
    });
  }

  setSummary() {
    const { name, price, gender, summary } = this.props.product;

    const sum = {};
    sum["name"] = name;
    sum["price"] = price;
    sum["gender"] = gender;
    sum["summary"] = summary;

    return sum;
  }

  setOption() {
    const {
      code,
      color_name,
      size_list,
      series_code,
      series_image,
    } = this.props.product;

    const option = {};
    option["code"] = code;
    option["color_name"] = color_name;
    option["size_list"] = size_list;
    option["series_code"] = series_code;
    option["series_image"] = series_image;

    return option;
  }

  setIntroduction() {
    const { name, description, desc_img } = this.props.product;

    const introduction = {};
    introduction.name = name;
    introduction.description = description;
    introduction.desc_img = desc_img;

    return introduction;
  }

  setInformation() {
    const { code, information } = this.props.product;

    const inform = {};
    inform.code = code;
    inform.information = JSON.parse(information);

    return inform;
  }

  render() {
    return (
      <div className="ProductContainer">
        {this.state.gallery && this.state.option && (
          <>
            <Gallery gallery={this.state.gallery} />
            <SideBar summary={this.state.summary} option={this.state.option} />
            <DetailContainer
              introduction={this.state.introduction}
              overall_review={this.state.overall_review}
              reviews={this.state.reviews}
              instagram={this.state.instagram}
              information={this.state.information}
            />
          </>
        )}
      </div>
    );
  }
}

export default ProductContainer;
