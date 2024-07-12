import React from 'react';

const SearchComponent = ({ value, onChange }) => {
  return (
    <div className="search-component">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className='ipt'
      />
    </div>
  );
};

export default SearchComponent;
