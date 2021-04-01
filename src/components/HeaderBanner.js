import React from "react";
import {
  MDBIcon
} from 'mdbreact';
import { Link } from "react-scroll";

function HeaderBanner(props) {
  return(
    <div className="view profile" id="profile">
      <div className="mask d-flex justify-content-center align-items-center">
        <div className="container px-md-3 px-sm-0">
          <div className="row wow fadeIn">
            <div className="col-md-12 text-center wow fadeIn">
              <div className="d-flex justify-content-center">
                <img src={props.profilePic} className="img-fluid rounded-circle z-depth-1-half"
                width="140"
                alt="Profile" />
              </div>
              <h3 className="mb-0 pt-md-4 pt-3 user-name">{props.userName}</h3>
              <div className="border-meghna"></div>
              <h4 className="subtext-header mt-2 mb-4">
                {props.onLiner}
              </h4>
              <Link
                className="btn btn-rounded btn-outline-white d-md-inline"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration= {500}
              >
                <MDBIcon icon="bullhorn" /> Reach out
              </Link>
              <Link
                className="btn btn-rounded btn-outline-white d-md-inline"
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration= {500}
              >
                <MDBIcon icon='clone left' /> Go to projects
              </Link>

            </div>
          </div>
        </div>
      </div>
      <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
    </div>
  );
}

export default HeaderBanner;