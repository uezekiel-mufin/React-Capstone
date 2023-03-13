import React from 'react';
import { useDispatch } from 'react-redux';
import { openMenu } from '../Redux/Slices/menuSlice';

const Header = () => {
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch(openMenu());
  };
  return (
    <div>
      Header
      <button type="button" onClick={() => handleMenu()}>
        Submit
      </button>
    </div>
  );
};

export default Header;
