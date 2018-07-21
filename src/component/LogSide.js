import React from 'react';
import { LogSideStyle } from '../style/LogSide';
import SubtitlesIcon from '@material-ui/icons/Subtitles';

const LogSide = () => {
  return (
    <LogSideStyle>
      <div className="intro">
        <SubtitlesIcon />
      </div>
    </LogSideStyle>
  )
};

export default LogSide;