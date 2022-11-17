import "./App.css";
import React from "react";
import Anime from "react-animejs-wrapper";

export class ImageWithText extends React.Component {
  alreadyRanAnimation;

  componentDidMount() {
    this.alreadyRanAnimation = true;
  }

  render() {
    return (
      <div className="flex-container container initial-image-height">
        <img
          src={this.props.image}
          alt="Programming"
          className="programming-image-dimensions"
        ></img>
        {!this.alreadyRanAnimation && (
          <div>
            <Anime
              className="upper-middle"
              config={{
                translateX: [-1500, 0],
                loop: false,
                duration: 20000,
                easing: "spring(1, 80, 13, 0)",
                delay: 1000,
              }}
            >
              <p className="main-name">{this.props.name}</p>
            </Anime>
            <Anime
              className="middle"
              config={{
                translateX: [1500, 0],
                loop: false,
                duration: 20000,
                easing: "spring(1, 80, 13, 0)",
                delay: 1000,
              }}
            >
              <p className="programmer-title">Software Developer</p>
            </Anime>
          </div>
        )}
        {this.alreadyRanAnimation && (
          <div>
            <p className="upper-middle main-name">{this.props.name}</p>
            <p className="middle programmer-title">Software Developer</p>
          </div>
        )}
      </div>
    );
  }
}
