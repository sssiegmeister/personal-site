import React from 'react';

function mediaType(props) {
  switch (props.type) {
    case "img":
      return <img src={props.media} alt="Logo"/>;
      break;
    case "video":
      return (
        <video controls>
          <source src={props.media} type="video/mp4"/>
        </video>
      );
      break;
    default:
      return <img src={props.media} alt="Img"/>
  }
}

function Media(props) {

return(
    <div className={"content " + props.direction}>
      <p className="info">
        {props.text}
      </p>
      <div className={"media " + props.direction}>
        {mediaType(props)}
      </div>
    </div>
  )
}

export default Media;