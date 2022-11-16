import './App.css';

import React from 'react';

import programmingImage from './AdobeStock_423893595.jpeg';
import { ImageWithText } from './ImageWithText';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      width: 0,
      height: 0
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      const newWidth = this.getWidth();
      const newHeight = this.getHeight();

      this.setState({
        width: newWidth,
        height: newHeight
      });
    })
  }

  getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }

  render() {
    return (
      <div className="flex-container initial-image-height" >
        <ImageWithText image={programmingImage} name={"CODY THOMAS ZEITLER"} ></ImageWithText>
      </div>
    );
  }
}

export default App;
