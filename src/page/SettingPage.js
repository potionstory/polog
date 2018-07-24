import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import ContentBox from '../component/ContentBox';
import SettingSide from '../component/SettingSide';

const SettingPage = () => {
  return (
    <Layout>
      <SideBox title="SETTING">
        <SettingSide />
      </SideBox>
      <ContentBox />
    </Layout>
  )
};

export default SettingPage;