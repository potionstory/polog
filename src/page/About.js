import React from "react";
import Layout from "../component/Layout";
import AboutSide from "../container/Side/About";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const About = () => {
  return (
    <Layout>
      <SideStyle className="about">
        <AboutSide />
      </SideStyle>
      <Content>About</Content>
    </Layout>
  );
};

export default About;
