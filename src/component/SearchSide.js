import React from 'react';
import { SearchSideStyle } from '../style/SearchSide';
import SearchIcon from '@material-ui/icons/Search';

const SearchSide = () => {
  return (
    <SearchSideStyle>
      <div className="intro">
        <SearchIcon />
      </div>
    </SearchSideStyle>
  )
};

export default SearchSide;