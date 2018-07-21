import React from 'react';
import { SideBoxStyle } from '../style/SideBox';

const SideBox = (props) => {
  const { children, title } = props;
  return (
    <SideBoxStyle>
      <h2>{ title }</h2>
      { children }
    </SideBoxStyle>
  )
};

export default SideBox;