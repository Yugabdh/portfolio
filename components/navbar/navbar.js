"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/components/images/icon.svg";

import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import { BsDownload } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollNav ? "bg-bg-color-0 shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-screen-lg mx-auto flex justify-between items-center h-20 px-6">
        <Link href="/" className="flex items-center space-x-2 cursor-pointer" onClick={toggleHome}>
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="text-white font-semibold text-lg font-heading">Yugabdh Pashte</span>
        </Link>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={toggle}>
          <FaBars />
        </div>

        {/* Nav Items */}
        <ul className="hidden lg:flex space-x-6 items-center">
          {["about", "work", "skills", "contact"].map((section) => (
            <li key={section}>
              <LinkS
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="text-accent border-b-2 border-accent"
                className="text-white font-montserrat font-medium cursor-pointer hover:text-accent py-2 px-3 transition-all duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace("me", " Me")}
              </LinkS>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://drive.google.com/file/d/1sRhlNQ613-n3dPa8vQv05dMxCrjg4mon/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2  font-montserrat font-medium text-white border border-white px-4 py-2 rounded hover:bg-accent hover:text-white transition-all"
          >
            <BsDownload />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
