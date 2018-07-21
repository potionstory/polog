import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import Content from '../component/Content';
import JoinSide from '../component/JoinSide';

const JoinPage = () => {
  return (
    <Layout>
      <SideBox title="JOIN">
        <JoinSide />
      </SideBox>
      <Content />
    </Layout>
  )
};

export default JoinPage;