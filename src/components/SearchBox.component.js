import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
