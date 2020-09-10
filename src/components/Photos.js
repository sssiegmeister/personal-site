import React, { Component } from 'react';
import alley from './../images/alley.jpeg';
import bridge from './../images/bridge.jpeg';
import charles from './../images/charles.jpeg';
import dark from './../images/dark.jpeg';
import light from './../images/light.jpeg';
import sunrise from './../images/sunrise.jpeg';
import tower from './../images/tower.jpeg';

class Photos extends Component {
  pics = [alley, bridge, charles, dark, light, sunrise, tower];
  render() {
    return (
        <div className="photos-page">
          {this.pics.map(x => (
            <div className="img-container">
              <img className="photo" src={x} alt="Img"></img>
            </div>
          ))}
        </div>
    );
  }
}

export default Photos;