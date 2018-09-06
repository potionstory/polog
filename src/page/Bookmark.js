import React from "react";
import Layout from "../component/Layout";
import BookmarkSide from "../container/Side/Bookmark";
import BookmarkContent from "../container/Content/Bookmark";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Bookmark = () => {
  return (
    <Layout>
      <SideStyle className="bookmark">
        <BookmarkSide />
      </SideStyle>
      <Content>
        <BookmarkContent />
      </Content>
    </Layout>
  );
};

export default Bookmark;
