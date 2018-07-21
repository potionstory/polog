import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import Content from '../component/Content';
import SearchSide from '../component/SearchSide';

const SearchPage = () => {
  return (
    <Layout>
      <SideBox title="SEARCH">
        <SearchSide />
      </SideBox>
      <Content />
    </Layout>
  )
};

export default SearchPage;