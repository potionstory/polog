import React from 'react';
import { AboutSideStyle } from '../style/AboutSide';
import FaceIcon from '@material-ui/icons/Face';

const About = () => {
  return (
    <AboutSideStyle>
      <div className="intro">
        <FaceIcon />
      </div>
    </AboutSideStyle>
  )
};

export default About;