import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import Content from '../component/Content';
import AboutSide from '../component/AboutSide';

const AboutPage = () => {
  return (
    <Layout>
      <SideBox title="ABOUT">
        <AboutSide />
      </SideBox>
      <Content />
    </Layout>
  )
};

export default AboutPage;