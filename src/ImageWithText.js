import "./App.css";
import React from "react";
import Anime from "react-animejs-wrapper";

export class ImageWithText extends React.Component {
  constructor() {
    super();

    this.state = {
      translateX: -1500,
      translateY: 1500,
    };

    setTimeout(() => {
      this.setState({
        translateX: 0,
        translateY: 0,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <Anime
          className="flex-container container initial-image-height"
          config={{
            scale: [.995, 1],
            delay: 0
          }}
        >
          <img
            src={this.props.image}
            alt="Programming"
            className="programming-image-dimensions"
          ></img>
        </Anime>
        <div>
          <Anime
            className="upper-middle"
            config={{
              translateX: [this.state.translateX, 0],
              loop: false,
              duration: 40000,
              easing: "spring(1, 80, 13, 0)",
              delay: 1000,
            }}
          >
            <p className="main-name">{this.props.name}</p>
          </Anime>
          <Anime
            className="middle"
            config={{
              translateX: [(this.state.translateX * -1 ), 0],
              loop: false,
              duration: 40000,
              easing: "spring(1, 80, 13, 0)",
              delay: 1000,
            }}
          >
            <p className="programmer-title">Software Developer</p>
          </Anime>
        </div>
      </div>
    );
  }
}
