import React, { Component } from "react";

import "./PromoItem.scss";

class PromoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      content: "",
    };
  }

  componentDidMount() {
    const currentNum = this.props.currentNum;
    const promo = this.props.promos[currentNum];

    if (promo !== undefined) {
      this.setState({
        type: promo.type,
        content: promo.content,
      });
    }
  }

  componentWillUpdate() {
    this.div.className = "PromoItem";
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.div.className = "PromoItem removed";
    }, 4000);
  }

  render() {
    const currentNum = this.props.currentNum;
    const promo = this.props.promos[currentNum];
    let type = "";
    let content = "";

    if (promo !== undefined) {
      type = promo.type;
      content = promo.content;
    }

    return (
      <div className="PromoItem" ref={(div) => (this.div = div)}>
        <div className="wrap">
          <span className="type">{type}</span>
          <br />
          <span className="con">{content}</span>
        </div>
      </div>
    );
  }
}

export default PromoItem;
