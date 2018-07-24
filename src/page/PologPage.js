import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import ContentBox from '../component/ContentBox';
import PologSide from '../component/PologSide';

const HomePage = () => {
  return (
    <Layout>
      <SideBox title="POLOG">
        <PologSide />
      </SideBox>
      <ContentBox>
        Polog
      </ContentBox>
    </Layout>
  )
};

export default HomePage;