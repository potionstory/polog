import React from "react";
import Layout from "../component/Layout";
import HomeSide from "../container/Side/Home";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Home = () => {
  return (
    <Layout>
      <SideStyle className="home">
        <HomeSide />
      </SideStyle>
      <Content>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        <br />
        가나다라마바사아자차카타파하
        <br />
        0123456789
        <br />
        ~!@#$%^&*()-+\
      </Content>
    </Layout>
  );
};

export default Home;
