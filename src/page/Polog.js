import React from "react";
import Layout from "../component/Layout";
import PologSide from "../container/Side/Polog";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Polog = () => {
  return (
    <Layout>
      <SideStyle style={{ backgroundColor: "#8bc34a" }}>
        <PologSide />
      </SideStyle>
      <Content>Polog</Content>
    </Layout>
  );
};

export default Polog;
