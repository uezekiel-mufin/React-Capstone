import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const Phones = ({ phone }) => (
  <div className=" px-5 justify-center  items-center py-5 pt-3">
    <span className="flex justify-end">
      <HiOutlineArrowCircleRight className="h-6 w-6 text-white mb-3 font-light" />
    </span>
    <section className="flex gap-4 items-center">
      <div>
        <img src={phone.image} alt={phone.phone_name} />
      </div>
      <section className="text-center text-lg font-semibold text-[#fff]">
        <h5 className="flex gap-1 justify-center">{phone.brand}</h5>
        <h4 className="capitalize text-base">{phone.phone_name}</h4>
      </section>
    </section>
  </div>
);

export default Phones;
Phones.propTypes = { phone: PropTypes.objectOf.isRequired };
