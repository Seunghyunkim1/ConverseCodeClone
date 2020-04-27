import React, { Component } from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

import "./Map.scss";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "zqe3lo77s7",
    };
  }

  render() {
    return (
      <div className="Map">
        <div className="wrapper">
          <RenderAfterNavermapsLoaded
            ncpClientId={this.state.clientId}
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
          >
            <NaverMap
              mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
              style={{
                width: "100%",
                height: "100%",
              }}
              defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
              defaultZoom={10}
            />
          </RenderAfterNavermapsLoaded>
        </div>
      </div>
    );
  }
}

export default Map;
