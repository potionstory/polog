import React from "react";
import Layout from "../component/Layout";
import PologSide from "../container/Side/Polog";
import PologContent from "../container/Content/Polog";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Polog = () => {
  return (
    <Layout>
      <SideStyle className="polog">
        <PologSide />
      </SideStyle>
      <Content>
        <PologContent />
      </Content>
    </Layout>
  );
};

export default Polog;
