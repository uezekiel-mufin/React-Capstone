import React from 'react';
import PropTypes from 'prop-types';

const Brands = ({ brand }) => {
  console.log(brand);
  return <div>Brands</div>;
};

export default Brands;
Brands.propTypes = { brand: PropTypes.objectOf.isRequired };
