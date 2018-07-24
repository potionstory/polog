import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import ContentBox from '../component/ContentBox';
import AboutSide from '../component/AboutSide';

const AboutPage = () => {
  return (
    <Layout>
      <SideBox title="ABOUT">
        <AboutSide />
      </SideBox>
      <ContentBox />
    </Layout>
  )
};

export default AboutPage;