import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import Content from '../component/Content';
import PologSide from '../component/PologSide';

const HomePage = () => {
  return (
    <Layout>
      <SideBox title="POLOG">
        <PologSide />
      </SideBox>
      <Content />
    </Layout>
  )
};

export default HomePage;