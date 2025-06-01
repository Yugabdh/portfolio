import React from 'react'
import SectionComponent from '../utility/section-component';
import ProjectList from '../utility/project-component';
import projects from '@/data/projects';

const ProjectSection = () => {
  return (
    <SectionComponent
      id="work"
      heading="My Work"
      content={<ProjectList projects={projects} />}
      verticleTiltle="projects"
    />
  )
}

export default ProjectSection;