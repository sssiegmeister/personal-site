import React from 'react';
import Button from '@material-ui/core/Button';
import gradPic from './../images/bridge.jpeg'
function Home(props) {
  return (
      <div className="home-page">
        <div className="container">
          <div className="text-overlay">
            Hi! I'm Sam
          </div>
          <div className="under-text-overlay">
            ~Software Engineer~
          </div>
        </div>

        <div className="home-header-bio">
          <h3 className="about-header">
            About Me
          </h3>
          <p className="home-bio">
          I graduated in December from Northeastern University with a Bachelor's of 
          Science in Computer Science and a Minor in Business Administration, and am now pursuing a career in software development! I'm an engineer at heart, and 
          I love coming up with systems to handle problems, technical or otherwise. Coding aside, my interests include photography, boxing, cinematography/acting,
          and The Sims. Enjoy the site!
          </p>
        </div>

        <div className="experience-section">
          <p className="home-exp-info">See some highlights from my resume.
            <Button variant="outlined" renderAs="button" onClick={props.expHandler}>
              EXPERIENCE
            </Button>
          </p>
          <img className="grad-pic" src={gradPic} alt="Grad picture"></img>    
        </div>

        <div className="photo-section">
          <h3 className="photo-section-header">
            I also take photos! View some of my favorites.
            <Button className="photo-button" variant="outlined" color="inherit" renderAs="button" onClick={props.photoHandler}>
              PHOTOS
            </Button>
          </h3>
        </div>
      </div>
  );
}

export default Home;