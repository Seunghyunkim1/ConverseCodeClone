import React, { Component } from "react";

import ContentsContainer from "./ContentsContainer/ContentsContainer";
import CommunityContainer from "./CommunityContainer/CommunityContainer";
import FloatingBar from "../../Components/FloatingBar/FloatingBar";

import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
  }

  componentDidMount() {
    this.setContents();
  }

  setContents() {
    const contents = [
      {
        img: "",
        title: "CONVERSE X NEIGHBORHOOD",
        type: 4,
      },
      {
        img: "",
        name: "컨버스 X 네이버후드 척 70",
        price: 135000,
        badges: ["BEST SELLER", "NEW ARRIVAL"],
        type: 1,
      },
      {
        img: "",
        name: "컨버스 X 네이버후드 잭퍼셀",
        price: 125000,
        badges: ["NEW ARRIVAL"],
        type: 1,
      },
      {
        img: "",
        title: "CONVERSE X NEIGHBORHOOD", //P: weight 700, line-height:1.2em, font-size: calc( 30px + 1.25*(100vw - 767px)/42.0625)
        description:
          "컨버스와의 두번째 콜라보를 위해 돌아온 네이버후드는 모터사이클 문화에 대한 깊은 해석을 통해<br/> 척70, 잭퍼셀 그리고 어패럴 컬렉션을 선보입니다.",
        //font-size: calc( 12px + 0.25*(100vw - 767px)/42.0625)
        badges: ["LIMITED EDITION"],
        type: 2,
      },
      {
        items: [
          {
            img:
              "https://image.converse.co.kr/cmsstatic/structured-content/15195/img-converse-chucktaylor-1.jpg?gallery",
            title: "척테일러 올스타",
          },
          {
            img:
              "https://image.converse.co.kr/cmsstatic/structured-content/15196/척70진짜최종.jpg?gallery",
            title: "척 70",
          },
          {
            img:
              "https://image.converse.co.kr/cmsstatic/structured-content/15197/원스타진짜최종.jpg?gallery",
            title: "원스타",
          },
          {
            img:
              "https://image.converse.co.kr/cmsstatic/structured-content/15198/잭퍼셀최종.jpg?gallery",
            title: "잭퍼셀",
          },
        ],
        type: 5, // CHOOSE YOUR ICON
      },
      {
        img: "",
        title: "CONVERSE X NEIGHBORHOOD",
        type: 4,
      },
      {
        img: "",
        title: "NEIGHBORHOOD", //P: weight 700, line-height:1.2em, font-size: calc( 30px + 1.25*(100vw - 767px)/42.0625)
        description:
          "컨버스와의 두번째 콜라보를 위해 돌아온 네이버후드는 모터사이클 문화에 대한 깊은 해석을 통해<br/> 척70, 잭퍼셀 그리고 어패럴 컬렉션을 선보입니다.",
        //font-size: calc( 12px + 0.25*(100vw - 767px)/42.0625)
        badges: ["LIMITED EDITION"],
        type: 2,
      },
      {
        img: "",
        name: "이번 X 개구리",
        price: 125000,
        badges: ["NEW ARRIVAL"],
        type: 1,
      },
      {
        img: "",
        name: "이번 X 개구리",
        price: 125000,
        badges: ["NEW ARRIVAL"],
        type: 1,
      },
      {
        img: "",
        title: "NEIGHBORHOOD", //P: weight 700, line-height:1.2em, font-size: calc( 30px + 1.25*(100vw - 767px)/42.0625)
        description:
          "컨버스와의 두번째 콜라보를 위해 돌아온 네이버후드는 모터사이클 문화에 대한 깊은 해석을 통해<br/> 척70, 잭퍼셀 그리고 어패럴 컬렉션을 선보입니다.",
        //font-size: calc( 12px + 0.25*(100vw - 767px)/42.0625)
        badges: ["LIMITED EDITION"],
        type: 2,
      },
      {
        img: "",
        name: "이번 X 개구리",
        price: 125000,
        badges: ["NEW ARRIVAL"],
        type: 1,
      },
      {
        img: "",
        title: "NEIGHBORHOOD", //P: weight 700, line-height:1.2em, font-size: calc( 30px + 1.25*(100vw - 767px)/42.0625)
        description:
          "컨버스와의 두번째 콜라보를 위해 돌아온 네이버후드는 모터사이클 문화에 대한 깊은 해석을 통해<br/> 척70, 잭퍼셀 그리고 어패럴 컬렉션을 선보입니다.",
        //font-size: calc( 12px + 0.25*(100vw - 767px)/42.0625)
        badges: ["LIMITED EDITION"],
        type: 2,
      },
    ];

    this.makeGroup(contents);
  }

  makeGroup(contents) {
    let section = [];
    let dividedContents = [];
    let sum = 0;

    contents.forEach((content) => {
      if (content.type !== undefined) {
        if (content.type >= 4) {
          //type 4 이상, 독자 Contents 차지
          dividedContents.push([content]);
        } else if (sum + content.type <= 4) {
          section.push(content);
          sum += content.type;
          if (sum === 4) {
            dividedContents.push(section);
            sum = 0;
            section = [];
          }
        }
      }
    });

    // dividedContents.push(section); // 추가 시 남는 contents도 표시

    this.setState({
      contents: Array.from(dividedContents),
    });
  }

  render() {
    // console.log("main", this.state.contents)
    return (
      <div className="Main">
        <ContentsContainer contents={this.state.contents} />
        <CommunityContainer />
        <FloatingBar />
      </div>
    );
  }
}

export default Main;
