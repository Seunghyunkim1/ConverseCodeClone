import React, { Component } from 'react'

import "./ContentForTwo.scss";

class ContentForTwo extends Component {
    render() {
        console.log("two", this.props.content);
        const { img, title, description, badges } = this.props.content;

        return (
            <div className="ContentForTwo">
                <div className="product">
                    <img className="product-img" alt=""></img>
                </div>
                <div className="tile-overlay">
                    <p className="badge">NEW ARRIVAL</p>
                    <p className="title">
                        CHUCK TAYLOR ALL STAR
                        <br/>
                        FESTIVAL STRIPES    
                    </p>
                    <p className="description">
                        "뉴트럴톤 컬러와 네온 컬러가 믹스된 스트라이프 스니커즈와 함께"
                        <br/>
                        "썸머 페스티벌을 즐겨보세요"
                    </p>
                    <a className="link">
                        <img className="icon"/>
                        <span className="link-text">더 알아보기</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default ContentForTwo
