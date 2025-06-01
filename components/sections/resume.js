import React from 'react'
import SectionComponent from '../utility/section-component'
import resume from '@/data/resume'
import SkillAndExperience from '../utility/skills-component'

const ResumeSection = () => {
  return (
    <SectionComponent
      id="skills"
      heading="Skills & Experience"
      content={<SkillAndExperience resume={resume} />}
      verticleTiltle="skills"
    />
  )
}

export default ResumeSection