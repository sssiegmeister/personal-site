import React from 'react';
import pics from './../Pics-Items';

function Photos() {
  return (
      <div className="photos-page">
        {pics.map(x => (
          <div className="img-container">
            <img className="photo" src={x} alt="Img"></img>
          </div>
        ))}
      </div>
  );
}

export default Photos;