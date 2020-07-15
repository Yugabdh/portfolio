import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  className="page-footer font-small footer-section">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:  TechnoGeekx.com 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;