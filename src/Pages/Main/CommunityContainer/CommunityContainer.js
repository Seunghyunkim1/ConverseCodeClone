import React, { Component } from 'react'

import Communities from "./Communities/Communities";
import "./CommunityContainer.scss";

class CommunityContainer extends Component {
    state = {
        communities: []
    }

    render() {
        return (
            <div className="CommunityContainer">
                <div className="community-wrapper">
                    <p className="title">
                        CONVERSE COMMUNITY
                    </p>
                    <Communities communities={this.state.communities}/>
                </div>

            </div>
        )
    }
}

export default CommunityContainer
