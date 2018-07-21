import React from 'react';
import ListBox from './ListBox';
import OpacityIcon from '@material-ui/icons/Opacity';
import { PologSideStyle } from '../style/PologSide';

const PologSide = () => {
  return (
    <PologSideStyle>
      <div className="intro">
        <OpacityIcon />
      </div>
      <ListBox />
    </PologSideStyle>
  )
};

export default PologSide;