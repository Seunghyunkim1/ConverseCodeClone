import React, { Component } from 'react'

import "./FloatingBar.scss";

class FloatingBar extends Component {
    render() {
        return (
            <div className="FloatingBar">
                <a className="anchor">
                    <img className="icon" alt="icon"/>
                    <p className="content">회원 전용 척 70 아카이브 프린트 출시</p>
                </a>
            </div>
        )
    }
}

export default FloatingBar;
