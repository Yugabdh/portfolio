import React from 'react'
import SectionComponent from '../utility/section-component'
import SideBySideComponent from '../utility/side-by-side-component'
import Pill from '../ui/pill'

const AboutSection = () => {
  return (
    <SectionComponent
      id="about"
      heading='Little About Me'
      content={<AboutMeContent />}
      verticleTiltle="About"
    />
  )
}

const skills = ['Spring Boot', 'ReactJs', 'Snowspark', 'Flask', 'Java', 'JavaScript', 'Python'];


const AboutMeContent = () => {
  return (
    <SideBySideComponent
      leftSide={
        <>
          <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;p&gt;</span>
          <p>
            Hello, my name is Yugabdh Pashte, but most people call me Yuga.
            I live in Mumbai, India. I earned a bachelor of engineering degree with a specialization in information technology.
            What is the purpose of engineering? I&apos;ve always wanted to develop something on my own.
            I also enjoyed dismantling items. This was the catalyst for my initial interest in web development.
            I began by building simple HTML sites and am now progressing to the development of more complicated applications.
          </p>
          <p>
            I&apos;ve worked with technologies such as{" "}
            <em className="text-heading-attention-1">
              Reactjs, Java, Spring Boot, SQL, Python, Flask, Oracle Database, Snowflake, and Firebase.
            </em>
          </p>
          <p>
            I have written{" "}
            <em className="text-heading-attention-1">
              microservice-based applications with Spring Boot, single page applications,
              static web pages, CLI applications, a tool for web application footprinting, and APIs for touchpoints.
            </em>
          </p>
          <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;/p&gt;</span>
        </>
      }
      rightSide={
        <>
          <ul className="list-group border border-gray-400 h-full w-full text-base">
            <li className="list-group-item p-4 border-b text-lg text-heading-attention-0">
              <strong>Summary</strong>
            </li>
            <li className="list-group-item p-4 border-b">
              <div className="item-heading">
                <strong>Current Job</strong>
              </div>
              <div>
                Java Software Engineering
              </div>
            </li>
            <li className="list-group-item p-4 border-b">
              <div className="item-heading">
                <strong>Education</strong>
              </div>
              <div>
                Bachelor of Engineering in Information Technology
              </div>
            </li>
            <li className="list-group-item p-4 border-b">
              <div className="item-heading">
                <strong>Lives In</strong>
              </div>
              <div>Mumbai, Maharashtra, India</div>
            </li>
            <li className="list-group-item p-4">
              <div className="item-heading">
                <strong>Skills</strong>
              </div>
              <div className="content text-sm">
                {
                  skills.map((skill, idx) =>
                    <Pill text={skill} key={idx} />
                  )
                }
              </div>
            </li>
          </ul>
        </>
      }
    />
  )
}

export default AboutSection