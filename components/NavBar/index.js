import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../pages/images/logo.svg";

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
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav className={`navbar ${scrollNav ? "" : "scrollNav"}`}>
        <div className="navbar-container">
          <Link href="/">
            <a onClick={toggleHome} className="logo">
              <Image
                src={logo}
                alt="logo"
                className="app-logo"
                height={40}
                width={40}
              />
              Yugabdh Pashte
            </a>
          </Link>
          <div className="navbar-toggler" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <LinkS
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="nav-link"
                activeClass="active-spy"
                offset={-80}
              >
                About
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                to="mywork"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="nav-link"
                activeClass="active-spy"
                offset={-80}
              >
                My Work
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="nav-link"
                activeClass="active-spy"
                offset={-80}
              >
                Skills
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="nav-link"
                activeClass="active-spy"
                offset={-80}
              >
                Contact Me
              </LinkS>
            </li>
          </ul>
          <div className="navbar-second">
            <div className="button-borders">
              <a
                className="primary-button"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1ehQvbL4hJfOqcI7CsaLr06NmceRFFdeY/view?usp=sharing"
              >
                <BsDownload /> Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
