import React, { Component } from "react";

import "./Introduction.scss";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      toggleOn: !this.state.toggleOn,
    });
  }

  render() {
    const { name, description, desc_img } = this.props.introduction;

    return (
      <div className="Introduction">
        <div
          className="detail-content"
          style={
            this.state.toggleOn
              ? { overflow: "visible", maxHeight: "none" }
              : { overflow: "hidden", maxHeightL: "448px" }
          }
        >
          <p>
            <span className="title">{name}</span>
          </p>
          <br />
          <p>{description[0]}</p>
          <br />
          {description.map((description, index) => {
            if (index >= 1) return <p>{description}</p>;
          })}
          <br />
          <p className="image">
            <img src={desc_img} alt="" />
          </p>
          <br />
          <br />
          <br />
        </div>
        <a className="detail-toggle" onClick={this.handleClick}>
          <span
            className={"underline " + (this.state.toggleOn ? "less" : "more")}
          >
            더보기 +
          </span>
          <span
            className={"underline " + (this.state.toggleOn ? "more" : "less")}
          >
            닫기 -
          </span>
        </a>
      </div>
    );
  }
}

export default Introduction;
