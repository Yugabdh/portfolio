import React, {useState, useEffect} from 'react';
import logo from '../../assets/img/svg/logo.svg';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { BsDownload } from "react-icons/bs";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <nav className={`navbar ${scrollNav ? "" : "scrollNav"}`}>
                <div className="navbar-container">
                    <Link to="/" className="logo" onClick={ toggleHome }>
                        <img src={logo} className="app-logo" alt="logo" />
                        Yugabdh Pashte
                    </Link>
                    <div className="navbar-toggler" onClick={ toggle }>
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
                                offset={-80}>
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
                                offset={-80}>
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
                                offset={-80}>
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
                                offset={-80}>
                                    Contact Me
                            </LinkS>
                        </li>
                    </ul>
                    <div className="navbar-second">
                        <div className="button-borders">
                            <button className="primary-button">
                              <BsDownload /> Resume
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
