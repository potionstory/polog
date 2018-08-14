import React from "react";
import Layout from "../component/Layout";
import SearchSide from "../container/Side/Search";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Search = () => {
  return (
    <Layout>
      <SideStyle style={{ backgroundColor: "#3f51b5" }}>
        <SearchSide />
      </SideStyle>
      <Content>Search</Content>
    </Layout>
  );
};

export default Search;
