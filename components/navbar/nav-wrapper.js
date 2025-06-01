"use client";
import SideBar from './sidebar';
import Navbar from './navbar';
import React, { useState } from 'react'

const NavWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
    </>
  )
}

export default NavWrapper