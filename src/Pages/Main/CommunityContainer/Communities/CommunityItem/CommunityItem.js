import React, { Component } from 'react'

import "./CommunityItem.scss";

class CommunityItem extends Component {
    render() {
        return (
            <div className="CommunityItem">
                <div className="item-wrapper">
                    <img className="thumbnail" src="https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/83792428_216959489492171_5411127321792548876_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&amp;_nc_cat=111&amp;_nc_ohc=3ipjReqTu40AX8LATAb&amp;oh=dbb765542375ecf15974d62a80b3b93f&amp;oe=5EC70F2D" alt="@hi_yona1" title="@hi_yona1" />
                    <div className="overlay">
                        <div className="user">
                            <img className="profile" src="https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/s150x150/73271953_392606438311429_3413950532996300800_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&amp;_nc_ohc=Y6v4R0DbR3UAX9e3m6W&amp;oh=9052dfc5495ee8ba2580f4668951fbce&amp;oe=5EC660D3" alt="@underexz" onerror="this.src=https://cdn.attractt.com/embed/images/error/404-profile.png" />
                            <div className="info">
                                <span className="user-name">hi_yona1</span>
                                <span className="time">2 months ago</span>
                            </div>
                            <div className="cover"></div>
                            <div className="tag-icon">
                                <i></i>
                            </div>
                        </div>
                        <div className="hover">
                            {/* 애니메이션 전환? */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommunityItem
