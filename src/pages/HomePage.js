import React from "react";
import HeaderBanner from '../components/HeaderBanner';
import AboutUser from "../components/AboutUser";
import EducationCards from "../components/EducationCards";
import ProjectSection from "../components/ProjectSection";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderBanner userName={this.props.user.userName} onLiner={this.props.user.oneLiner} />
        <AboutUser/>
        <EducationCards education={this.props.user.education} />
        <ProjectSection projects={this.props.user.projects} /> 
      </React.Fragment>
    )
  }
}

export default HomePage;
