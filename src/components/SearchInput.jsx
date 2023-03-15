/* eslint-disable react/forbid-prop-types */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({
  setNewBrands,
  filterBrands,
  searchTexts,
  setSearchTexts,
}) => {
  const handleSearch = (value) => {
    setSearchTexts(value);
    const searchBrands = filterBrands.filter((brand) =>
      brand.brand_name.toLowerCase().includes(value),
    );
    setNewBrands(searchBrands);
  };

  return (
    <div className="box-border flex items-center">
      <input
        type="text"
        id=""
        placeholder="search for brand"
        value={searchTexts}
        onInput={(e) => handleSearch(e.target.value)}
        className="text-rose-900 rounded-lg px-3 py-1 w-[175px] placeholder:text-sm placeholder:text-rose-900 placeholder:italic focus:outline-none bg-rose-300"
      />
    </div>
  );
};

export default SearchInput;
SearchInput.propTypes = {
  searchTexts: PropTypes.string.isRequired,
  setSearchTexts: PropTypes.func.isRequired,
  filterBrands: PropTypes.array.isRequired,
  setNewBrands: PropTypes.func.isRequired,
};
