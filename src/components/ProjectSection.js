import React from 'react';
import {
  MDBIcon
} from 'mdbreact';

export default function ProjectSection({projects}) {
  if(projects != null) {
    let projectCardList = projects.map((project, index) => {
      let skills = project.skills;
      let skillPills = skills.map((skill, ix) => {
        return (
          <span className="badge badge-pill ml-1" key={ ix }>{ skill }</span>
        );
      })

      return (
        <div className="col my-2" key={ index }>
          <div className="card project-card">
            <div className="card-body">
              <div className="p-4">
                <p className="pb-3 mb-0 project-name">{ project.name }</p>
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                  <img
                    className="d-block w-100 mb-3"
                    src={ project.img }
                    alt="project img"
                  />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <p>
                      { project.description }
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <p><b>Skills demonstrated</b></p>
                    <p>{ skillPills }</p>
                  </div>

                </div>
              </div>
              <div className='row no-gutters rounded-bottom footer lighten-3'>
                  <div className="col-sm-6 col-md-6 col-lg-6 text-center link-button">
                    <a className="stretched-link" 
                      href={ project.live } target="_blank" rel="noopener noreferrer">
                        <MDBIcon icon="check-circle" /> Live
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 text-center link-button">
                    <a className="stretched-link"
                      href={ project.source } target="_blank" rel="noopener noreferrer">
                        <MDBIcon icon='clone left' /> Source Code
                    </a>
                  </div>
              </div>
                
                {/* <div className="align-middle vertical-rule"></div> */}
                
              </div>
            </div>
          </div>
      );
    });

    return (
      <section id="projects" className="projects">
        <div className="container spad-2">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <div className="section-title blue-text-main">
                <h2>Projects</h2>
                <div className="border-meghna"></div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="row row-cols-1 row-cols-md-1 justify-content-center">
                {projectCardList}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <span id="education"></span>
    )
  }
  
}
