import React from "react";
import Layout from "../component/Layout";
import AboutSide from "../container/Side/About";
import AboutContent from "../container/Content/About";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const About = () => {
  return (
    <Layout>
      <SideStyle className="about">
        <AboutSide />
      </SideStyle>
      <Content>
        <AboutContent />
      </Content>
    </Layout>
  );
};

export default About;
