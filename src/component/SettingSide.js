import React from 'react';
import { SettingSideStyle } from '../style/SettingSide';
import SettingsIcon from '@material-ui/icons/Settings';

const SettingSide = () => {
  return (
    <SettingSideStyle>
      <div className="intro">
        <SettingsIcon />
      </div>
    </SettingSideStyle>
  )
};

export default SettingSide;