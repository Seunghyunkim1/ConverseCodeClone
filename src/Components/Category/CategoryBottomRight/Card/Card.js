import React, { Component } from "react";
import { Link } from "react-router-dom";

import hearticon from "../../../../Images/Heart-icon.png";

import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      activeColor: "",
      defImg: this.props.category.color_list[0],
      showImage: this.props.category.color_list[0].image,
    };
  }

  handleMouseOver = (ev) => {
    this.setState({
      isActive: true,
    });
  };

  handleMouseOut = () => {
    this.setState({
      isActive: false,
    });
  };

  addComma(price) {
    if (price > 999) {
      return ("" + price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    } else {
      return price;
    }
  }

  handleHoverColor = (colorCode) => {
    // this.setState();
    console.log("dkdkdk", colorCode);
  };

  addColorCode(color) {
    color.map((b) => <Card category={b} />);
  }

  changeImgByColor = (idx) => {
    idx === -1
      ? this.setState({
          showImage: this.state.defImg.image,
        })
      : this.setState(
          {
            showImage: this.props.category.color_list[idx].image,
          },
          () => console.log("asdasdasd", this.state.showImage)
        );
  };

  render() {
    const { category } = this.props;
    console.log("gkgkk", this.props);

    return (
      <div
        className="Card"
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
      >
        <div className="product-detail-relative">
          <Link to={`/product/${this.props.category.code}`}>
            <a className="shoe-detail-page" href="/#">
              {/* <div className="image-part">
                  {this.state.isActive ? (
                    this.props.category.color_list.map((color) => {
                      return (
                        <div
                          className="circle-change"
                          style={{ backgroundImage: color.image }}

                        ></div>
                      );
                    })
                  ) : (
                    <div className="">{this.props.category.color_list.length} 컬러</div>
                  )}
                </div>  */}

              <div className="first-image-part">
                <img
                  className="shoeppp"
                  src={this.state.showImage}
                  alt="PinkBackground"
                  onMouseOver={() => {
                    this.setState({
                      showImage: this.state.defImg.hover,
                    });
                  }}
                  onMouseOut={() => {
                    this.setState({ showImage: this.state.defImg.image });
                  }}
                />
              </div>
            </a>

            <div className="heart-product-state">
              <div className="heart-icon">
                <img className="heart-heart" src={hearticon} alt="hearticon" />
              </div>
            </div>
            <div className="product-explain">
              <p className="product-name">
                <a className="product-name-link" href="/#">
                  {this.props.category.name}
                </a>
              </p>
              <p className="product-price">
                {this.addComma(this.props.category.price)} won
              </p>
            </div>
          </Link>
        </div>

        <div className="product-color-sort">
          {this.state.isActive ? (
            this.props.category.color_list.map((color, idx) => {
              return (
                <div
                  // key={color.color_code}
                  className="circle-change"
                  //   `circle-change ${
                  //     category.color_list.filter(color => color.color_code === this.state.activeColor).length
                  //     ? 'active' :
                  //   }`
                  // }
                  // onMouseEnter={() => {
                  //   this.handleHoverColor(color.color_code);
                  // }}
                  onMouseOver={() => {
                    this.changeImgByColor(idx);
                  }}
                  onMouseOut={() => {
                    this.changeImgByColor(-1);
                  }}
                  onClick={() => {
                    this.setState({
                      defImg: this.props.category.color_list[idx],
                    });
                  }}
                  style={{ backgroundColor: color.color_code }}
                ></div>
              );
            })
          ) : (
            <div>{this.props.category.color_list.length} 컬러</div>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
