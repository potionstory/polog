import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import ContentBox from '../component/ContentBox';
import LoginSide from '../component/LoginSide';

const LoginPage = () => {
  return (
    <Layout>
      <SideBox title="LOGIN">
        <LoginSide />
      </SideBox>
      <ContentBox />
    </Layout>
  )
};

export default LoginPage;