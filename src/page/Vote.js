import React from "react";
import Layout from "../component/Layout";
import VoteSide from "../container/Side/Vote";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Vote = () => {
  return (
    <Layout>
      <SideStyle className="vote">
        <VoteSide />
      </SideStyle>
      <Content>Vote</Content>
    </Layout>
  );
};

export default Vote;
