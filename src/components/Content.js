import React from 'react';
import Media from './Media';

function Content(props) {
  return (
    <div>
      {props.items.map((x, i) => (
        <Media direction={i % 2 === 0 ? 'left' : 'right'} text={x.text} media={x.media} type={x.type}/>
      ))}
    </div>
  );
}

export default Content;