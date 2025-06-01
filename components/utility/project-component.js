import React from 'react'
import Pill from '../ui/pill';
import Image from 'next/image';

const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project, idx) => <ProjectCards project={project} key={idx} />)}
    </ul>
  )
}

{/* <div className="lg:scale-110 h-80 lg:h-full rounded-t-md lg:rounded-lg bg-cover bg-no-repeat bg-center"
                        style={{ "backgroundImage": "url('" + project.projectImage + "')", }}>
                    </div> */}

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const ProjectCards = ({ project }) => {
  return (
    <li className="py-12 w-full flex justify-center">
      <div className="lg:flex lg:max-w-5xl rounded-lg">
        <div className="lg:w-1/2 relative">
          <div className="h-full w-full rounded-t-md lg:rounded-lg  md:absolute -right-4 top-6">
            <Image
              src={project.projectImage}
              alt={project.projectImageName}
              placeholder="blur"
              blurDataURL={rgbDataURL(8, 253, 216)}
              layout="responsive"
              className='rounded-t-md lg:rounded-lg'
              height={500}
              width={800}
            />
          </div>
        </div>
        <div className="bg-bg-color-0 py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-b-md border lg:rounded-lg">
          <h3 className="font-bold font-montserrat text-3xl text-white">
            {project.projectName}
          </h3>
          <p className="mt-4 text-gray-400">
            {project.projectDetails}
          </p>
          <span className='text-sm'>
            {project.skills.map((skillName, idx) => <Pill key={idx} text={skillName} />)}
          </span>
          <div className="mt-6 flex gap-1">
            {project.code ? (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 hover:bg-gray-900 transition duration-300 ease-in  text-gray-100 px-5 py-3 font-semibold rounded"
              >
                <span>Get Code</span>
              </a>
            ) : (
              <></>
            )}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 hover:bg-gray-900 transition duration-300 ease-in  text-gray-100 px-5 py-3 font-semibold rounded"
              >
                <span>View Project</span>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProjectList;