import React from "react";
import Layout from "../component/Layout";
import StatusSide from "../container/Side/Status";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Status = () => {
  return (
    <Layout>
      <SideStyle style={{ backgroundColor: "#ffd600" }}>
        <StatusSide />
      </SideStyle>
      <Content>Status</Content>
    </Layout>
  );
};

export default Status;
