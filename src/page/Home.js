import React from "react";
import Layout from "../component/Layout";
import HomeSide from "../container/Side/Home";
import HomeContent from "../container/Content/Home";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Home = () => {
  return (
    <Layout>
      <SideStyle className="home">
        <HomeSide />
      </SideStyle>
      <Content>
        <HomeContent />
      </Content>
    </Layout>
  );
};

export default Home;
