import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { MdLink } from "react-icons/md";

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const ProjectComponent = (props) => {
  const projectCards = props.projects.map((project) => {
    return (
      <li
        key={project.id}
        className="project-card"
        data-aos="fade-up"
        data-aos-easing="ease-in"
      >
        <div className="project-card-name">
          <h3>{project.projectName}</h3>
          <hr />
        </div>
        <div className="project-card-info">
          <p>{project.projectDetails}</p>
          <div className="d-flex mx-2">
            {project.skills.map((skill, index) => {
              return (
                <div className="skill-pill" key={index}>
                  {skill}
                </div>
              );
            })}
          </div>
          <div className="project-buttons">
            {project.code ? (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="primary-button project-link-button"
              >
                <BsGithub /> Code
              </a>
            ) : (
              <></>
            )}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="primary-button project-link-button"
              >
                <MdLink /> Visit
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="project-card-image">
          <div className="project-card-image-wrapper">
            <Image
              src={project.projectImage}
              alt={project.projectImageName}
              placeholder="blur"
              blurDataURL={rgbDataURL(8, 253, 216)}
              layout="responsive"
              height={"500px"}
              width={"800px"}
            />
          </div>
        </div>
      </li>
    );
  });

  return <ul className="project-card-wrapper">{projectCards}</ul>;
};

export default ProjectComponent;
