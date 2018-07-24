import React from 'react';
import UtilBox from './UtilBox';
import { ContentBoxStyle } from '../style/ContentBox';

const ContentBox = (props) => {
  const { children } = props;
  return (
    <ContentBoxStyle>
      <UtilBox />
      { children }
    </ContentBoxStyle>
  )
};

export default ContentBox;