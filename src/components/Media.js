import React from 'react';
import Button from '@material-ui/core/Button';

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
    case "download":
      return (
        <form method="get" action={props.media}>
          <Button type="submit" variant="outlined">Download</Button>
        </form>
      )
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