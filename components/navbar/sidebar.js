"use client";

import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { BsDownload } from "react-icons/bs";

const SideBar = ({ toggle, isOpen }) => {
  return (
    <aside
      className={`fixed z-[999] w-full h-full bg-bg-color-0 grid items-center transition-all duration-300 left-0 ${
        isOpen ? "top-0" : "-top-full hidden"
      }`}
      onClick={toggle}
    >
      <div className="absolute top-5 right-6 bg-transparent text-2xl cursor-pointer">
        <span className="text-white">
          <FaTimes />
        </span>
      </div>
      <div className="text-white">
        <div className="grid grid-cols-1 gap-y-6 text-center">
          <LinkS
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            className="text-lg  font-montserrat font-medium cursor-pointer hover:text-heading-attention-0"
            activeClass="text-heading-attention-0"
            offset={-80}
          >
            About
          </LinkS>

          <LinkS
            to="mywork"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            className="text-lg  font-montserrat font-medium cursor-pointer hover:text-heading-attention-0"
            activeClass="text-heading-attention-0"
            offset={-80}
          >
            Work
          </LinkS>

          <LinkS
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            className="text-lg  font-montserrat font-medium cursor-pointer hover:text-heading-attention-0"
            activeClass="text-heading-attention-0"
            offset={-80}
          >
            Skills
          </LinkS>

          <LinkS
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            className="text-lg  font-montserrat font-medium cursor-pointer hover:text-heading-attention-0"
            activeClass="text-heading-attention-0"
            offset={-80}
          >
            Contact Me
          </LinkS>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="https://drive.google.com/file/d/1ehQvbL4hJfOqcI7CsaLr06NmceRFFdeY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-white bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full  font-montserrat font-medium shadow hover:opacity-90"
          >
            <BsDownload /> Resume
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
