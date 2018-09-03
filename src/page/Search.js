import React from "react";
import Layout from "../component/Layout";
import SearchSide from "../container/Side/Search";
import SearchContent from "../container/Content/Search";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Search = () => {
  return (
    <Layout>
      <SideStyle className="search">
        <SearchSide />
      </SideStyle>
      <Content>
        <SearchContent />
      </Content>
    </Layout>
  );
};

export default Search;
