import React, { Component } from 'react';

class Media extends Component {

  mediaType() {
    switch (this.props.type) {
      case "img":
        return <img src={this.props.media} alt="Logo"/>
        break;
      case "video":
        return (
          <video controls>
            <source src={this.props.media} type="video/mp4"/>
          </video>
        )
        break;
      default:
        return <img src={this.props.media} alt="Logo"/>
    }
  }

  render() {
    return(
      <div className={"content " + this.props.direction}>
              <p className="info">
                {this.props.text}
              </p>
              <div className={"media " + this.props.direction}>
                {this.mediaType()}
              </div>
        </div>
    )
  }
}

export default Media;