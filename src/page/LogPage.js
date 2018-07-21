import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import Content from '../component/Content';
import LogSide from '../component/LogSide';

const LogPage = () => {
  return (
    <Layout>
      <SideBox title="LOG">
        <LogSide />
      </SideBox>
      <Content />
    </Layout>
  )
};

export default LogPage;