import React, { Component } from "react";
import { Marker } from "react-naver-maps";

import "./Markers.scss";

class Markers extends Component {
  render() {
    return this.props.stores.map((store) => (
      <Marker
        position={{ lat: store.latitude, lng: store.longitude }}
        animation={2}
        onClick={() => {
          alert(`여기는 ${store.name} 입니다.`);
        }}
      />
    ));
  }
}

export default Markers;
