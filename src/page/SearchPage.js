import React from 'react';
import Layout from '../component/Layout';
import SideBox from '../component/SideBox';
import ContentBox from '../component/ContentBox';
import SearchSide from '../component/SearchSide';

const SearchPage = () => {
  return (
    <Layout>
      <SideBox title="SEARCH">
        <SearchSide />
      </SideBox>
      <ContentBox />
    </Layout>
  )
};

export default SearchPage;