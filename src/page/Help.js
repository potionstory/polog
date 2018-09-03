import React from "react";
import Layout from "../component/Layout";
import HelpSide from "../container/Side/Help";
import HelpContent from "../container/Content/Help";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Help = () => {
  return (
    <Layout>
      <SideStyle className="help">
        <HelpSide />
      </SideStyle>
      <Content>
        <HelpContent />
      </Content>
    </Layout>
  );
};

export default Help;
