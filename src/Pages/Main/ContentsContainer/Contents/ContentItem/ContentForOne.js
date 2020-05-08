import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ContentForOne.scss";

class ContentForOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "" && false,
      hover: "" && false,
    };
  }

  componentDidMount() {
    const url = this.props.content.url;
    const hover = this.props.content.hover;

    this.setState({
      url: url,
      hover: hover,
    });
  }

  render() {
    const { name, code, price, url, hover } = this.props.content;

    return (
      <div className="ContentForOne">
        <Link className="product-url" to={`product/${code}`}>
          <div className="product-img">
            {url.endsWith("mp4") ? (
              <video autoPlay loop muted>
                <source src={url} type="video/mp4" />
              </video>
            ) : (
              <img src={url} alt="" />
            )}
          </div>
          <div className="product-img-in hover">
            {this.state.hover ? (
              <img src={hover} alt="" />
            ) : (
              <img src={url} alt="" />
            )}
          </div>
        </Link>
        <div className="product-wish">
          <a className="wish-action add" href="#add">
            {" "}
          </a>
          <a className="wish-action remove" href="#remove">
            {" "}
          </a>
        </div>
        <div className="product-detail">
          <p calssName="name">
            <a className="text-link" href="/">
              {name}
            </a>
          </p>
          <p className="price">{price} 원</p>
        </div>
      </div>
    );
  }
}

export default ContentForOne;
