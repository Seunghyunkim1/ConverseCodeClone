import React, { Component } from 'react'

import "./PromoItem.scss";

class PromoItem extends Component {
    render() {
        return (
            <div className="PromoItem">
                <div className="wrap">
                    <span>
                        NOTICE
                        <br/>
                        신규 가입 1만원 할인 코드 사용 관련
                    </span>
                </div>
            </div>
        )
    }
}

export default PromoItem;