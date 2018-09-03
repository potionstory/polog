import React from "react";
import Layout from "../component/Layout";
import VoteSide from "../container/Side/Vote";
import VoteContent from "../container/Content/Vote";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Vote = () => {
  return (
    <Layout>
      <SideStyle className="vote">
        <VoteSide />
      </SideStyle>
      <Content>
        <VoteContent />
      </Content>
    </Layout>
  );
};

export default Vote;
