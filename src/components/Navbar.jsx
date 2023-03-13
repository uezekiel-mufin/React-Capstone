import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Navbar = () => (
  <div className="w-full flex flex-col">
    <section className="flex w-full">
      <Header />
    </section>
    <Outlet />
  </div>
);

export default Navbar;
