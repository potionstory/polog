import React from "react";
import Layout from "../component/Layout";
import SearchSide from "../container/Side/Search";
import Content from "../component/Content";
import { SideStyle } from "../style/Side";

const Search = () => {
  return (
    <Layout>
      <SideStyle className="search">
        <SearchSide />
      </SideStyle>
      <Content>Search</Content>
    </Layout>
  );
};

export default Search;
