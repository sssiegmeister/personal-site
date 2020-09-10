import React, { Component } from 'react';
import Media from './Media';

class Content extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((x, i) => (
          <Media direction={i % 2 === 0 ? 'left' : 'right'} text={x.text} media={x.media} type={x.type}/>
        ))}
      </div>
    );
  }
}

export default Content;