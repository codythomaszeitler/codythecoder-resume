import "./App.css";

import React from "react";

import programmingImage from "./AdobeStock_423893595.jpeg";
import { ImageWithText } from "./ImageWithText";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      backgroundImageOpacity : 1
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent)
  }

  handleScrollEvent = () => {
    const windowHeight = window.innerHeight;
    const yAxis = window.scrollY;
    const calculatedOpacity = ( (windowHeight - yAxis)  / windowHeight);
    this.setState({
      backgroundImageOpacity : calculatedOpacity
    });
  }
 
  render() {
    return (
      <div>
        <div
          className="static-image-position" style={
            {
              opacity : this.state.backgroundImageOpacity
            }
          }
        >
          <div className="flex-container initial-image-height">
            <ImageWithText
              image={programmingImage}
              name={"CODY THOMAS ZEITLER"}
            ></ImageWithText>
          </div>
        </div>
        <div className="bottom-body">
          <br></br>
          <div>
            <p className="submodule-header">About Me</p>
            <p className="submodule-bold">Cody Thomas Zeitler</p>
            <p className="submodule-text">Lover of all things code</p>
            <p className="submodule-text">Huge Design Nerd</p>
            <hr></hr>
          </div>
          <div>
            <p className="submodule-header">Employment History</p>

            <p className="submodule-bold">Northrup Grumman</p>
            <p className="submodule-text">
              IRIG 106 - PCM to CH10 Converter Designed, implemented, and tested
              a tool that allows a user to turn any number of teltron compliant
              recordings into an IRIG 106 CH10 compliant file. Reduced
              conversion time to 3% of original conversion methods. Worked
              closely with Electrical Engineers to determine requirements and
              system behavior. Worked with the verification and testing team to
              ensure that the proper nominal, off-nominal, and stress testing
              scenarios were created.
            </p>
            <p className="submodule-bold">American Express</p>
            <p className="submodule-text">
              Account Setup Redesign: Modernized a critical business process
              that allowed merchants to enter in critical business data to the
              American Express ecosystem. Architected a large majority of the
              system, allowing developers to work in parallel, kept the
              application responsive, and ensured that the application could be
              changed easily in the future. Page Layout by Config: Created a
              dynamic entry form application that will save an estimated $1.5
              million dollars on development costs. Reduced development time
              days to hours. Allowed non-development personnel to complete tasks
              that were normally only done by developers.
            </p>
            <p className="submodule-bold">Freelance Developer</p>
            <hr></hr>
          </div>
          <div>
            <p className="submodule-header">Projects</p>
            <p className="submodule-text">Grow and Thrive at Work</p>
            <p className="submodule-text">Scepter Systems</p>
            <hr></hr>
          </div>
          <div>
            <p className="submodule-header">Education</p>
            <p className="submodule-bold">Arizona State University</p>
            <p className="submodule-text">Master Degree, MSC</p>
            <p className="submodule-text">GPA 4.00</p>
            <p className="submodule-text">July 2019 - July 2021</p>

            <p className="submodule-bold">Arizona State University</p>
            <p className="submodule-text">
              Bachelor's Degree, Computer Science
            </p>
            <p className="submodule-text">In Major GPA 3.52</p>
            <p className="submodule-text">July 2019 - July 2021</p>
          </div>
          <br></br>
          <br></br>
          <div className="bottom-footer-color bottom-height">
            <br></br>
            <p className="contact-information-text">Contact Information</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
