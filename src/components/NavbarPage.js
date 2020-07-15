import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from 'mdbreact';
import { Link } from "react-scroll";

export default class NavbarPage extends React.Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    return (
      <MDBNavbar dark expand='md' fixed='top' scrolling>
        <div className="container">
            <img src={require("../assets/img/svg/logo.svg")} height="40" 
              className="d-inline-block align-top m-1" alt="logo" />
            <MDBNavbarBrand href='/'>
              <strong>Portfolio</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse('mainNavbarCollapse')} />
            <MDBCollapse id='mainNavbarCollapse' isOpen={this.state.collapseID} navbar >
              <MDBNavbarNav left>

                  <MDBNavItem>
                    <Link
                      className="nav-link Ripple-parent"
                      activeClass="active"
                      to="profile"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration= {500}
                    >
                      Profile
                    </Link>
                  </MDBNavItem>


                  <MDBNavItem>
                    <Link
                      className="nav-link Ripple-parent"
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration= {500}
                    >
                      About
                    </Link>
                  </MDBNavItem>


                  <MDBNavItem>
                    <Link
                      className="nav-link Ripple-parent"
                      activeClass="active"
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration= {500}
                    >
                      Education
                    </Link>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink 
                      to="/about"
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Skills
                    </MDBNavLink>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink 
                      to="/about"
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Achivments
                    </MDBNavLink>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink 
                      to="/about"
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Certification
                    </MDBNavLink>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink 
                      to="/about"
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Publication
                    </MDBNavLink>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink 
                      to="/about"
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Goals
                    </MDBNavLink>
                  </MDBNavItem>

              </MDBNavbarNav>
              <MDBNavbarNav right className="navbar-nav nav-flex-icons">
                  <MDBNavItem>
                      <a href="https://www.twitter.com" to="_blank" className="nav-link Ripple-parent">
                        <MDBIcon fab icon="twitter" />
                      </a>
                  </MDBNavItem>
                  <MDBNavItem>
                      <a className="nav-link waves-effect waves-light" href="facebook.com">
                        <MDBIcon fab icon="linkedin-in" />
                      </a>
                  </MDBNavItem>
                  <MDBNavItem>
                      <a className="nav-link waves-effect waves-light" href="facebook.com">
                        <MDBIcon fab icon="github" />
                      </a>
                  </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </div>
      </MDBNavbar>
    );
  }
}
