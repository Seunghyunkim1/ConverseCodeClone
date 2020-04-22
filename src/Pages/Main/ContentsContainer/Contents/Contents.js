import React, { Component } from 'react'

import ContentForOne from "./ContentItem/ContentForOne";
import ContentForTwo from "./ContentItem/ContentForTwo";
import ContentForFour from "./ContentItem/ContentForFour";

import "./Contents.scss";

class Contents extends Component { //8칸 모음 섹션
    
    render() {
        console.log("콘텐츠", this.props.contents);
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
