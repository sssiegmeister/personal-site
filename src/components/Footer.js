import React, { Component } from 'react';
import linkedInLogo from './../linkedin.png'
import resume from './../Sam_Siegmeister_Resume.pdf'

class Footer extends Component {
  render() {
    var resumeLink = <a className="resume-link"href={resume} >resume</a>
    var code = <a className="code-link" href="https://github.com/sssiegmeister/personal-site">code</a> 
    var backlog = <a className="backlog-link" href="https://trello.com/b/97r6RQLp/personal-site">backlog</a>
    return (
        <div className="footer">
            <div className="column">
                <a href="https://www.linkedin.com/in/samuel-siegmeister">
                    <img className="linkedin-logo" src={linkedInLogo} alt="LinkedInLogo"></img>
                </a>
            </div>
            <div className="resume">Here's a PDF version of my {resumeLink}.</div>
            <div className="website-code">Check out the {code} for this website on my GitHub.</div>
            <div className="disclaimer">
                This is a site under construction ! Here is my {backlog}.
            </div>
        </div>
    );
  }
}

export default Footer;