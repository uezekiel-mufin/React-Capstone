import React from 'react';
import { Outlet } from 'react-router-dom';

const Navbar = () => (
  <div>
    Navbar
    <Outlet />
  </div>
);

export default Navbar;
