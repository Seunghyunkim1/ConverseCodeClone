import React, { Component } from 'react'

import Contents from "./Contents/Contents";

import "./ContentsContainer.scss";

class ContentsContainer extends Component {
    render() {
        console.log("!!", this.props.contents);

        return (
            <div className="ContentsContainer">
                {this.props.contents.map((content) => {
                    console.log("콘텐트",content);
                    //1,2 <--> 4 분리
                    if (content.length > 0) {                        
                        return <Contents contents={content} />
                    }
                })}
            </div>
        );
    }
}

export default ContentsContainer
