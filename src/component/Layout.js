import React from 'react';
import Header from './Header';
import { WrapStyle } from '../style/Wrap';

const Layout = (props) => {
  const { children } = props;
  return (
    <WrapStyle>
      <Header />
      { children }
    </WrapStyle>
  );
};

export default Layout;