import React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ searchKeyword, setSearchKeyword }) => {
  const onChangeSearch = query => setSearchKeyword(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchKeyword}
    />
  );
};

export default SearchBar;