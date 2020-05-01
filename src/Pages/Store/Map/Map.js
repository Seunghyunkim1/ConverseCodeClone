import React, { Component } from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

import Markers from "./Markers/Markers";

import "./Map.scss";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "zqe3lo77s7",
    };
  }

  render() {
    // const { name, longitude, latitude } = this.props.stores;

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
              defaultCenter={{ lat: 37.5146602, lng: 126.9809533 }}
              defaultZoom={10}
            >
              <Markers stores={this.props.stores} />
            </NaverMap>
          </RenderAfterNavermapsLoaded>
        </div>
      </div>
    );
  }
}

export default Map;
