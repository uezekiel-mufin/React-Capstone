import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Navbar = () => (
  <div className="w-[398px]  bg-rose-500 h-screen overflow-auto my-8 rounded-lg flex flex-col">
    <section className="flex w-full">
      <Header />
    </section>
    <Outlet />
  </div>
);

export default Navbar;
