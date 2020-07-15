import React from "react";
import profilePic from "../assets/img/component/profile.png";

function HeaderBanner(props) {
  return(
    <div className="view profile" id="profile">
      <div className="mask purple-gradient d-flex justify-content-center align-items-center">
        <div className="container px-md-3 px-sm-0">
          <div className="row wow fadeIn">
            <div className="col-md-12 white-text text-center wow fadeIn">
              <div className="d-flex justify-content-center">
                <img src={profilePic} className="img-fluid rounded-circle"
                width="140"
                alt="Profile" />
              </div>
              <h3 className="white-text mb-0 pt-md-4 pt-3">{props.userName}</h3>
              <div className="border-meghna"></div>
              <h4 className="subtext-header mt-2 mb-4">
              {props.onLiner}
              </h4>
              <a className="btn btn-rounded btn-outline-white" href="#!">
                <i className="fas fa-bullhorn"></i> Reach out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;