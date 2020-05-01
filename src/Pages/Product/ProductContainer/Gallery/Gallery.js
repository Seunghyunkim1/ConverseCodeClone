import React, { Component } from "react";

import "./Gallery.scss";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primary_image: "",
      images: [],
    };
  }

  componentDidMount() {
    const gallery = this.props.gallery;
    const primary_image = this.getPrimaryImage(gallery);
    const images = gallery.filter((e) => e !== primary_image[0]);

    this.setState({
      primary_image: primary_image,
      images: images,
    });
  }

  getPrimaryImage = (arr) => {
    const primary = arr.filter((e) => e.includes("primary"));
    return primary;
  };

  render() {
    return (
      <div className="Gallery">
        <div className="primary-image">
          <img className="main-image" src={this.state.primary_image} alt="" />
        </div>
        <div className="image-gallery">
          <div className="image-container">
            {this.state.images.map((image) => {
              if (image.endsWith("mp4")) {
                return (
                  <div className="image-wrapper">
                    <div className="media-item">
                      <video className="item" autoPlay loop>
                        <source src={image} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="image-wrapper">
                    <div className="media-item">
                      <img className="item" src={image} alt="" />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
