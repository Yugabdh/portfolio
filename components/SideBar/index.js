import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { BsDownload } from "react-icons/bs";

const SideBar = ({ toggle, isOpen }) => {
  return (
    <aside
      className={`sidebarCotanier ${
        isOpen ? "sidebarCotanier-toggle-in" : "sidebarCotanier-toggle-out"
      }`}
      onClick={toggle}
    >
      <div className="icon" onClick={toggle}>
        <span className="close-icon">
          <FaTimes />
        </span>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <LinkS
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            className="sidebarLink"
            activeClass="active-spy"
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
            className="sidebarLink"
            activeClass="active-spy"
            offset={-80}
          >
            My Work
          </LinkS>

          <LinkS
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            className="sidebarLink"
            activeClass="active-spy"
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
            className="sidebarLink"
            activeClass="active-spy"
            offset={-80}
          >
            Contact Me
          </LinkS>
        </div>
        <div className="sidebarBtnWrap">
          <div className="button-borders">
            <button className="primary-button">
              <BsDownload /> Resume
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
