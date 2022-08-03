import React from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarCategories from '../Navbar/NavbarCategories';
import NavbarMobile from '../Navbar/NavbarMobile';

function Header() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <NavbarCategories />
    </>
  );
}

export default Header;
