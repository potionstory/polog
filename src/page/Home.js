import React from "react";
import Layout from "../component/Layout";
import HomeSide from "../container/Side/Home";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Home = () => {
  return (
    <Layout>
      <SideStyle style={{ backgroundColor: "#2196f3" }}>
        <HomeSide />
      </SideStyle>
      <Content>HOME</Content>
    </Layout>
  );
};

export default Home;
