import React, { Component } from 'react';

class Content extends Component {
  render() {
    return(
      <div className={this.props.direction}>
              <p className="info">
                {this.props.text}
              </p>
            <img className="logo" src={this.props.logo} alt="Logo"></img>
        </div>
    )
  }
}

export default Content;