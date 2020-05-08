import React, { Component } from "react";

import ContentsContainer from "./ContentsContainer/ContentsContainer";
import CommunityContainer from "./CommunityContainer/CommunityContainer";
import FloatingBar from "../../Components/FloatingBar/FloatingBar";

import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [] && false,
      instagrams: [] && false,
    };
  }

  componentDidMount() {
    fetch("data/main_page.json")
      .then((res) => res.json())
      .then((res) => {
        this.makeGroup(res.data.cards);
        this.setState({
          instagrams: res.instagrams,
        });
      });
  }

  makeGroup(contents) {
    let devidedContents = [];
    let sectionHalf = [];
    let sum = 0;

    contents.forEach((contents) => {
      contents.map((content) => {
        if (content.size >= 4) {
          //size 4 이상, 독자 sectionHalf 차지
          sectionHalf.push([content]);
        } else if (sum + content.size <= 4) {
          devidedContents.push(content);
          sum += content.size;
          if (sum === 4) {
            sectionHalf.push(devidedContents);
            sum = 0;
            devidedContents = [];
          }
        }
      });
    });

    this.setState({
      contents: Array.from(sectionHalf),
    });
  }

  render() {
    return (
      <div className="Main">
        {this.state.contents && this.state.instagrams && (
          <>
            <ContentsContainer contents={this.state.contents} />
            <CommunityContainer instagrams={this.state.instagrams} />
            <FloatingBar />
          </>
        )}
      </div>
    );
  }
}

export default Main;
