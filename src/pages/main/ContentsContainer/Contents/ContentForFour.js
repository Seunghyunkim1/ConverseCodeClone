import React, { Component } from 'react'

import "./ContentForFour.scss";

class ContentForFour extends Component {
    render() {
        console.log("four", this.props.content);

        return (
            <div className="ContentForFour">
                <a href="/">
                    <div className="product">
                        <img className="product-img" alt="" />
                    </div>
                    <div className="tile-overlay display-hover">
                        <div className="tile-overlay placement flex-justify-end text-align-left flex-align-start">
                            <p className="heading">
                                <span className="text-bold">
                                    SIMPLICITY
                                    <br/>
                                    WITH A SMILE
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="tile-overlay">
                        <div className="tile-overlay placement flex-justify-start text-align-left flex-align-start">
                            <p>
                                <span>잭퍼셀 클래식</span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default ContentForFour
