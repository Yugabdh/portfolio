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
      <MDBNavbar light expand='md' fixed='top' scrolling>
        <div className="container">
            <img src={require("../assets/img/svg/logo-test.svg")} height="40" 
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
                      activeClass="active-spy"
                      to="profile"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration= {500}
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Profile
                    </Link>
                  </MDBNavItem>

                  <MDBNavItem>
                    <Link
                      className="nav-link Ripple-parent"
                      activeClass="active-spy"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration= {500}
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      About
                    </Link>
                  </MDBNavItem>


                  <MDBNavItem>
                    <Link
                      className="nav-link Ripple-parent"
                      activeClass="active-spy"
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration= {500}
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Education
                    </Link>
                  </MDBNavItem>


                  <MDBNavItem>
                    <Link
                      className="nav-link Ripple-parent"
                      activeClass="active-spy"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration= {500}
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Project
                    </Link>
                  </MDBNavItem>


                  <MDBNavItem>
                    <Link
                      className="nav-link Ripple-parent"
                      activeClass="active-spy"
                      to="certification"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration= {500}
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Certification
                    </Link>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink 
                      to="/about"
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Publication
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
