import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import ContentBox from '../component/ContentBox';
import JoinSide from '../component/JoinSide';

const JoinPage = () => {
  return (
    <Layout>
      <SideBox title="JOIN">
        <JoinSide />
      </SideBox>
      <ContentBox />
    </Layout>
  )
};

export default JoinPage;