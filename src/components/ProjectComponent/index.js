import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { MdLink } from "react-icons/md";

const ProjectComponent = (props) => {
    const projectCards = props.projects.map((project) => {
		return (
			<div key={project.id} className="project-card" data-aos="slide-right" data-aos-easing="ease-in" data-aos-once="true">
                <div className="project-card-name">
                    <h3>{ project.projectName }</h3>
                    <hr />
                </div>
                <div className="project-card-info">
                    <p>{ project.projectDetails }</p>
                    <div className="d-flex mx-2">
                        {
                            project.skills.map((skill, index) => {
                                return  <div className="skill-pill" key={index} >{skill}</div>;
                            })
                        }
                    </div>
                    <div className="d-flex project-buttons">
                        {project.code? <a href={project.code} target="_blank" rel="noreferrer" className="primary-button project-link-button"><BsGithub /> Code</a>:<></>}
                        {project.link? <a href={project.link} target="_blank" rel="noreferrer" className="primary-button project-link-button"><MdLink /> Visit</a>:<></>}
                    </div>
                </div>
                <div className="project-card-image">
                    <img src={ project.projectImage } alt={ project.projectImageName } />
                </div>
			</div>
		);
	});

    return (
        <div className="project-card-wrapper">
            { projectCards }
        </div>
    )
}

export default ProjectComponent;
