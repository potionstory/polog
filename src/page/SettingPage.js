import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import Content from '../component/Content';
import SettingSide from '../component/SettingSide';

const SettingPage = () => {
  return (
    <Layout>
      <SideBox title="SETTING">
        <SettingSide />
      </SideBox>
      <Content />
    </Layout>
  )
};

export default SettingPage;