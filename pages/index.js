import { useState, useEffect } from "react";
import Head from "next/head";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiReact,
  SiBootstrap,
  SiFlask,
  SiPhp,
  SiJava,
  SiFirebase,
  SiOracle,
  SiSpring,
} from "react-icons/si";

import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import HeroHeader from "../components/HeroHeader";
import TextSideContent from "../components/TextSideContent";
import SectionComponent from "../components/SectionComponent";
import ProjectComponent from "../components/ProjectComponent";
import SkillsComponent from "../components/SkillsComponent";
import ContactComponent from "../components/ContactComponent";

const AboutLeftSide = () => {
  return (
    <>
      <p>
        Hi, I&apos;m Yugabdh Pashte, or as a lot of people call me, Yuga. I live
        in Mumbai, India. I pursued a bachelor of engineering degree with a
        specialisation in information technology from Pillai College of
        Engineering, Panvel. Why engineering? Well, I always wanted to build
        something of my own. I also enjoyed dismantling things. This first got
        me into web development. I started with writing plain HTML pages and am
        currently continuing my journey by developing some complex applications.
      </p>
      <p>
        I have worked on technologies like{" "}
        <em className="highlight-pink">
          Reactjs, Java Jersey, SQL, Flask, PHP, Firebase.
        </em>{" "}
        I have developed{" "}
        <em className="highlight-pink">
          static web pages, one-page web applications, CLI applications, created
          applications for web application footprinting and created APIs for
          touchpoints.
        </em>
      </p>
    </>
  );
};

const AboutRightSide = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item title">
          <strong>Summary</strong>
        </li>
        <li className="list-group-item">
          <div className="item-heading">
            <strong>Education</strong>
          </div>
          <div className="content">
            Bachelor of engineering in Information Technology
          </div>
        </li>
        <li className="list-group-item">
          <div className="item-heading">
            <strong>Lives In</strong>
          </div>
          <div className="content">Mumbai, Maharashtra, India</div>
        </li>
        <li className="list-group-item">
          <div className="item-heading">
            <strong>Skills</strong>
          </div>
          <div className="content">
            <div className="skill-pill">Reactjs</div>
            <div className="skill-pill">Java EE</div>
            <div className="skill-pill">Spring Core</div>
            <div className="skill-pill">SQL</div>
            <div className="skill-pill">Firebase</div>
            <div className="skill-pill">Flask</div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: "center-center",
    });
    AOS.refresh();
  }, []);

  const data = {
    projectData: [
      {
        id: 4,
        projectName: "Ragul Family Dental",
        projectImage:
          "https://res.cloudinary.com/dej6mdgme/image/upload/v1660632621/project-mockups/ragul-family-dental-mockup_j0brfs.png",
        projectImageName: "Ragul Family Dental mock",
        projectDetails:
          "Ragul Family Dental is one of the freelance opportunities that was given to me by one of my colleagues. The requirements were simple: I needed to create a webapp for a dental clinic that would serve as a booking system. To start with, I generated a low-fidelity UI in Figma to understand the app flow and get the client's go ahead with the design I created. I used Firebase for an easy and trustable login system and data storage to speed up development.",
        skills: ["React.js", "Firebase", "Figma", "Bootstrap", "Sass"],
        link: "https://ragulfamilydental.com/",
      },
      {
        id: 3,
        projectName: "Magic Resume",
        projectImage:
          "https://res.cloudinary.com/dej6mdgme/image/upload/v1660632620/project-mockups/magic-resume-mockup_ob071x.png",
        projectImageName: "Magic Resume Mock",
        projectDetails:
          "Magic Resume is yet another freelance opportunity I got from my friend's connection. The clients were college students with quite a tight deadline of just one week. I had no restrictions on design, so rather than starting from scratch, I quickly generated a UI with the help of a previously created component for other projects. Again, I used Firebase for database and authentication and used React.js. I finished and submitted the project on time with a single-page application.",
        skills: ["React.js", "Firebase", "Bootstrap", "Sass"],
        link: "https://magic-resume.web.app/",
      },
      {
        id: 2,
        projectName: "Technogeekx",
        projectImage:
          "https://res.cloudinary.com/dej6mdgme/image/upload/v1660632620/project-mockups/technogeekx-mockup_htkjwy.png",
        projectImageName: "Technogeekx mockup",
        projectDetails:
          "Technogeekx is one of my personal projects I created when I was learning React.js. I didn't create any particular design for this one, which was a bad choice, but well... I wanted to convert it to my personal blog but later learned that it would be better if I used CMS instead, or any other blogging website rather than creating my own.",
        skills: ["React.js", "Firebase", "Bootstrap", "Sass"],
        link: "https://technogeekx-web.web.app/",
        code: "https://github.com/Yugabdh/technogeekx-website",
      },
      {
        id: 1,
        projectName: "Raven",
        projectImage:
          "https://res.cloudinary.com/dej6mdgme/image/upload/v1660632620/project-mockups/raven-logo_kvw037.png",
        projectImageName: "Raven logo",
        projectDetails:
          "Raven is a web reconnaissance tool that can perform passive as well as a few active scans. I started with this project as the CLI tool in my second year and converted it to a web-based app using Flask. As I understood that the output is quite hard to digest for someone who is using it for the first time. This project was inspired by the Nessus scanner.",
        skills: ["Python 3", "Flask", "Javascript", "Web Scrapping", "Figma"],
        code: "https://github.com/Yugabdh/raven",
      },
      {
        id: 0,
        projectName: "Codelit",
        projectImage:
          "https://res.cloudinary.com/dej6mdgme/image/upload/v1660632621/project-mockups/codelit-mockup_khy1dw.png",
        projectImageName: "Codelit Mock",
        projectDetails:
          "Codelit was one of my first webapps I created in my first year. I built it using PHP, Javascript, and MySQL. I was just exploring back then. After all, who uses PHP, right? It was a learning website where users could learn C, even though I didn't understand C enough to teach someone in the first place :p. This app had profile management, quizzes, and lessons as modules. Now I'm porting code to Next.js.",
        skills: ["PHP", "Javascript", "MySQL"],
        link: "https://codelit-web.web.app/",
        code: "https://github.com/Yugabdh/Codelit",
      },
    ],
    skills: {
      experince: [
        {
          id: 2,
          position: "Application Development Associate",
          companyName: "Accenture",
          companyDuration: "March 2022-Current",
          companyWork:
            "Accenture is multinational professional services company that specialises in information technology (IT) services and consulting. A Fortune Global 500 company, it reported revenues of $50.53 billion in 2021….Accenture. Currently I'm exploring my journey at Accenture.",
        },
        {
          id: 1,
          position: "Software Engineer",
          companyName: "Newgen Software",
          companyDuration: "June 2021-January 2022",
          companyWork:
            "Newgen is the leading provider of a unified digital transformation platform with native process automation, content services, and communication management capabilities. Here I worked using Java EE to create RESTful Webservices to provide touchpoints to end systems, also integrated APIs to provide additional functionality to user.",
        },
        {
          id: 0,
          position: "Front-end Devloper Intern",
          companyName: "Dezignolics",
          companyDuration: "June, 2020",
          companyWork:
            "Dezignolics is a professional web design and development company. providing custom website designing & development services. I got chance to develop responsive, one page website with front end framework Bootstrap 4.",
        },
      ],
      techstack: [
        {
          nameOfStack: "Front-End",
          skills: [
            {
              skillName: "HTML",
              skillIcon: <SiHtml5 />,
            },
            {
              skillName: "CSS3",
              skillIcon: <SiCss3 />,
            },
            {
              skillName: "JAVASCRIPT",
              skillIcon: <SiJavascript />,
            },
            {
              skillName: "SASS",
              skillIcon: <SiSass />,
            },
            {
              skillName: "REACTJS",
              skillIcon: <SiReact />,
            },
            {
              skillName: "BOOTSTRAP",
              skillIcon: <SiBootstrap />,
            },
          ],
        },
        {
          nameOfStack: "Back-End",
          skills: [
            {
              skillName: "JAVA JERSEY",
              skillIcon: <SiJava />,
            },
            {
              skillName: "SPRING CORE",
              skillIcon: <SiSpring />,
            },
            {
              skillName: "FLASK",
              skillIcon: <SiFlask />,
            },
            {
              skillName: "PHP",
              skillIcon: <SiPhp />,
            },
            {
              skillName: "FIREBASE",
              skillIcon: <SiFirebase />,
            },
          ],
        },
        {
          nameOfStack: "Database",
          skills: [
            {
              skillName: "ORACLE SQL",
              skillIcon: <SiOracle />,
            },
            {
              skillName: "FIREBASE",
              skillIcon: <SiFirebase />,
            },
          ],
        },
      ],
    },
  };
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div>
      <Head>
        <title>Yugabdh Pashte | Web Developer | Software Engineer</title>
      </Head>

      <>
        <SideBar toggle={toggle} isOpen={isOpen} />
        <Navbar toggle={toggle} />
        <HeroHeader />
      </>

      <main>
        <SectionComponent
          heading="Little About Me"
          verticleTiltle="About me"
          content={
            <TextSideContent
              leftSide={<AboutLeftSide />}
              rightSide={<AboutRightSide />}
            />
          }
          id="about"
        />
        <SectionComponent
          heading="My Work"
          verticleTiltle="Projects"
          content={<ProjectComponent projects={data.projectData} />}
          id="mywork"
        />
        <SectionComponent
          heading="Skills & Experience"
          verticleTiltle="resume"
          content={
            <SkillsComponent
              experinces={data.skills.experince}
              techstack={data.skills.techstack}
            />
          }
          id="skills"
        />
        <SectionComponent
          heading="Let's Talk"
          verticleTiltle="Contact me"
          content={<ContactComponent />}
          id="contact"
        />
      </main>

      <footer>
        Yugabdh Pashte |{" "}
        <a href="https://www.linkedin.com/in/yugabdh-pashte/">LinkedIn</a> |{" "}
        <a href="https://twitter.com/yugabdh">Twitter</a> |{" "}
        <a href="https://github.com/Yugabdh">Github</a>
      </footer>
    </div>
  );
}
