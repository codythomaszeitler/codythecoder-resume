import './App.css';
import React from 'react';

export class ImageWithText extends React.Component {

    render() {
        return (
            <div className="flex-container container initial-image-height" >
                <img src={this.props.image} alt="Programming" className='programming-image-dimensions'></img>
                <p className="upper-middle main-name">{this.props.name}</p>
                <p className="middle programmer-title">Programmer</p>
            </div>
        );
    }
}