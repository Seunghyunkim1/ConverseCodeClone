import React, { Component } from 'react'

import ContentForOne from "./ContentForOne";
import ContentForTwo from "./ContentForTwo";
import ContentForFour from "./ContentForFour";

import "./Contents.scss";

class Contents extends Component { //8칸 모음 섹션
    
    render() {
        console.log("두둔", this.props.contents);
        return (
            <div className="Contents">
                {this.props.contents.map((content) => {
                    console.log(content.type)
                    switch (content.type) {
                        case 1: return <ContentForOne content={content} />
                        case 2: return <ContentForTwo content={content} />
                        case 4: return <ContentForFour content={content} />
                        default: break;
                    }              
                })}
            </div>
        );
    }
}

export default Contents
