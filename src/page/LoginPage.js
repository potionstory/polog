import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import Content from '../component/Content';
import LoginSide from '../component/LoginSide';

const LoginPage = () => {
  return (
    <Layout>
      <SideBox title="LOGIN">
        <LoginSide />
      </SideBox>
      <Content />
    </Layout>
  )
};

export default LoginPage;