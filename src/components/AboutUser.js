import React from 'react';

export default function AboutUser() {
  return (
    <section id="about" className="about">
      <div className="container spad-2">
        <div className="row">
          <div className="col-md-4 d-none d-lg-block">
            <ul className="list-group">
              <li className="list-group-item small-heading"><b className="p-2">Overview</b></li>
              <li className="list-group-item item">
                <b className="p-2">Education</b><br />
                <span className="grey-text p-2">Course</span>
              </li>
              <li className="list-group-item item">
                <b className="p-2">Lives In</b><br />
                <span className="grey-text p-2">Location</span>
              </li>
              <li className="list-group-item item">
                <div className="text-left d-inline-block p-2">
                  <span>0</span><br />
                  <span><b>Awards</b></span>
                </div>
                <div className="text-left d-inline-block p-2">
                  <span>0</span><br />
                  <span><b>Certificates</b></span>
                </div>
                <div className="text-left d-inline-block p-2">
                  <span>0</span><br />
                  <span ><b>External courses</b></span>
                </div>
                <div className="text-left d-inline-block p-2">
                  <span id="projects-count">0</span><br />
                  <span><b>Projects</b></span>
                </div>
              </li>
              <li className="list-group-item item">
                <b className="p-2">Skills</b><br />
                <span id="skills-pills">
                  
                </span>
              </li>
            </ul>
          </div> 
          <div className="col-sm-12 col-md-8 text-center">
            <div className="section-title blue-text-main">
              <h2>About me</h2>
            </div>
            <div className="border-meghna"></div>
            <p className="w-responsive mx-auto mb-5 secondary-text">
              Ex do nulla tempor mollit sint id. Ad irure occaecat quis esse nostrud qui esse. Cupidatat ullamco adipisicing adipisicing amet reprehenderit irure proident sunt cupidatat est. Dolor pariatur ad proident mollit. Reprehenderit quis amet sint adipisicing ut laboris do. Sint elit qui irure ex laboris tempor est est minim voluptate cupidatat pariatur proident.
            </p>
          </div> 
        </div>

      </div>
    </section>
  )
}
