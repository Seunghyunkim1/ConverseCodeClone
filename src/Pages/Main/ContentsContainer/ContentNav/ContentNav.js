import React, { Component } from 'react'

import ContentNavItem from "./ContentNavItem/ContentNavItem";
import arrow_right from "../../../../Images/arrow_right.png";

import "./ContentNav.scss";

class ContentNav extends Component {
    render() {
        return (
            <div className="ContentNav">
                <p className="title">CHOOSE YOUR ICON</p>
                <a className="link">
                        <img className="icon" src={arrow_right} alt="arrow_right"/>
                        <span className="link-text">신발 전체 보기</span>
                </a>
                <div className="list">
                    <div className="items">
                        <ContentNavItem items={this.props.contents[0].items} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentNav
