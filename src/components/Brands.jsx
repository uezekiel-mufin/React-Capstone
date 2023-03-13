import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const Brands = ({ brand }) => {
  console.log(brand);
  return (
    <div className=" px-4 justify-center py-1">
      <span className="flex justify-end">
        <HiOutlineArrowCircleRight className="h-6 w-6 text-white font-light" />
      </span>
      <section className="text-center text-[#fff]">
        <h4 className="capitalize">{brand.brand_name}</h4>
        <h5 className="flex gap-1 justify-center">
          {brand.device_count}
          <span>devices</span>
        </h5>
      </section>
    </div>
  );
};

export default Brands;
Brands.propTypes = { brand: PropTypes.objectOf.isRequired };
