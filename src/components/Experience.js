import React, { Component } from 'react';
import Content from './Content';
import data from './../Exp-Items';

class Experience extends Component {
  render() {
    return (
      <div>
        {data.map((x, i) => (
          <Content direction={i % 2 === 0 ? 'left' : 'right'} text={x.text} logo={x.logo}/>
        ))}
      </div>
    );
  }
}

export default Experience;