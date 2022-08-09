import React from 'react';
import logo from '../../assets/img/svg/intext.svg';
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { Link as LinkS } from 'react-scroll';

const HeroHeader = () => {
    return (
        <section className="section-wrapper">
            <div className="hero-header">
                <div className="hero-content">
                    <div className="hero-main-text-wrapper">
                        <h1>
                            Hi,<br />
                            I'm <img src={logo} className="intext-logo" alt="logo" />ugabdh,<br />
                            Software Engineer
                        </h1>
                    </div>
                    <div className="hero-secondary-text-wrapper">
                        <p>
                        Web Developer, Cyber Security Enthusiast
                        </p>
                    </div>
                    <div className="hero-button-wrapper">
                        <div className="button-borders">
                            <LinkS 
                                to="contact" 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                className="primary-button"
                                offset={-80}>
                                    Contact Me
                            </LinkS>
                        </div>
                    </div>
                    <div className="hero-social-wrapper">
                        <a className="social-media-links" href="https://www.linkedin.com/in/yugabdh-pashte/"  target="_blank" rel="noopener noreferrer"> <BsLinkedin /></a>
                        <a className="social-media-links" href="https://twitter.com/yugabdh"  target="_blank" rel="noopener noreferrer"> <BsTwitter /></a>
                        <a className="social-media-links" href="https://github.com/Yugabdh"  target="_blank" rel="noopener noreferrer"> <BsGithub /></a>
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default HeroHeader;
