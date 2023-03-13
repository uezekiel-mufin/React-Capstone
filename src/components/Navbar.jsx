import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Navbar = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default Navbar;
