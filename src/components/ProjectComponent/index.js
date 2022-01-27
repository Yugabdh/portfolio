import React from 'react';

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
