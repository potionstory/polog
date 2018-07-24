import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import ContentBox from '../component/ContentBox';
import LogSide from '../component/LogSide';

const LogPage = () => {
  return (
    <Layout>
      <SideBox title="LOG">
        <LogSide />
      </SideBox>
      <ContentBox />
    </Layout>
  )
};

export default LogPage;