import React, {useState, useEffect} from 'react';
import AOS from 'aos';

import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';
import HeroHeader from '../components/HeroHeader';
import SectionComponent from '../components/SectionComponent';
import TextSideContent from '../components/TextSideContent';
import ProjectComponent from '../components/ProjectComponent';
import ContactComponent from '../components/ContactComponent';

import { SiHtml5, SiCss3, SiJavascript, SiSass, SiReact, SiBootstrap, SiFlask, SiPhp, SiJava, SiFirebase, SiOracle } from "react-icons/si";
const AboutLeftSide = () => {
    return (
        <>
        <p>
        Hi, I'm Yugabdh Pashte, or a lot of people call me Yuga. I live in Mumbai, India. I pursued a bachelor of engineering degree with a specialization in Information Technology from Pillai College of Engineering, Panvel.
        Why engineering? Well, I always wanted to build something of my own. I also enjoyed dismantling things. This first got me into web development. I started with writing plain HTML pages and currently continuing my journey developing some complex applications.
        </p>
        <p>
        I have worked on technologies like <span className="highlight-pink">Reactjs, Java Jersey, SQL, Flask, PHP, Firebase.</span> I have developed <span className="highlight-pink">static web pages, one-page web applications, CLI applications, created applications for web application footprinting, Created API for touchpoints.</span> </p>
        </>
    )
}

const AboutRightSide = () => {
    return (
        <>
        <ul className="list-group">
            <li className="list-group-item title"><b>Summary</b></li>
            <li className="list-group-item">
                <div className="item-heading"><b>Education</b></div>
                <div className="content">Bachelor of engineering in Information Technology</div>
            </li>
            <li className="list-group-item">
                <div className="item-heading"><b>Lives In</b></div>
                <div className="content">Mumbai, Maharashtra, India</div>
            </li>
            <li className="list-group-item">
                <div className="item-heading"><b>Skills</b></div>
                <div className="content">
                    <div className="skill-pill">Reactjs</div>
                    <div className="skill-pill">Java EE</div>
                    <div className="skill-pill">SQL</div>
                    <div className="skill-pill">Firebase</div>
                    <div className="skill-pill">Flask</div>
                    <div className="skill-pill">PHP</div>
                </div>
            </li>
        </ul>
        </>
    )
}



const Skill = (props) => {
    
    const experinceCards = props.experinces.map((experince) => {
        return (
            <li key={experince.id} className="experince-item">
                <div className="experince-item-wrapper">
                    <h4 className="experince-position">{experince.position}</h4>
                    <p className="experince-company-name">{experince.companyName}</p>
                    <p className="experince-company-duration">{experince.companyDuration}</p>
                    <p className="experince-company-work">{experince.companyWork}</p>
                </div>
             </li>
        );
    });
    
    return (
        <div className="skill-wrapper">
            <div className="left-wrapper">
                <div className="left-side-content">
                    <p>
                        Recently I have begun my professional journey as Software Engineer working on backend development in Java. 
                        Before that for short time I got chance to work on E-Pass application. I have also created few web applications.
                        Got chance to work and learn frontend as intern.
                        <br />
                        <br />
                        I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps also I have experince with backend development creating APIs.
                    </p>
                </div>
            </div>
            <div className="right-wrapper">
                <div className="left-side-content">
                    <div className="text-on-border-wrapper">
                        <div className="file-marker">
                            <div>
                                <div className="box-title">
                                    Front-End
                                </div>
                                <div className="box-contents">
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiHtml5 /></span>
                                        <span className="skill-name">HTML5</span>
                                    </div>
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiCss3 /></span>
                                        <span className="skill-name">CSS3</span>
                                    </div>
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiJavascript /></span>
                                        <span className="skill-name">JAVASCRIPT</span>
                                    </div>
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiSass /></span>
                                        <span className="skill-name">SASS</span>
                                    </div>
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiReact /></span>
                                        <span className="skill-name">REACTJS</span>
                                    </div>
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiBootstrap /></span>
                                        <span className="skill-name">BS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="text-on-border-wrapper">
                        <div className="file-marker">
                            <div>
                                <div className="box-title">
                                    Back-End
                                </div>
                                <div className="box-contents">
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiJava /></span>
                                        <span className="skill-name">JAVA JERSEY</span>
                                    </div>
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiFlask /></span>
                                        <span className="skill-name">FLASK</span>
                                    </div>
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiPhp /></span>
                                        <span className="skill-name">php</span>
                                    </div>
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiFirebase /></span>
                                        <span className="skill-name">firebase</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="text-on-border-wrapper">
                        <div className="file-marker">
                            <div>
                                <div className="box-title">
                                    Database
                                </div>
                                <div className="box-contents">
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiOracle /></span>
                                        <span className="skill-name">Oracle sql</span>
                                    </div>
                                    <div className="skill-box">
                                        <span className="skill-logo"><SiFirebase /></span>
                                        <span className="skill-name">firebase</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-wrapper">
                <ul className="experince-list">
                    {experinceCards}
                </ul>
            </div>
        </div>
    )
}
const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            anchorPlacement: 'center-center'
        });
    });

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    
    
    var about_leftSide = <AboutLeftSide />;
    var about_rightSide = <AboutRightSide />;
    var about_sideContent = <TextSideContent leftSide={ about_leftSide } rightSide={ about_rightSide } />;
    const projectData = [
        {
            id: 4,
            projectName: "Ragul Family Dental",
            projectImage: "/assets/img/projectImages/ragul-family-dental-mockup.png",
            projectImageName: "Ragul Family Dental mock",
            projectDetails: "Ragul Family Dental is one of the freelance opportunities that was given to me by one of my colleagues. The requirements were simple: I needed to create a webapp for a dental clinic that would serve as a booking system. To start with, I generated a low-fidelity UI in Figma to understand the app flow and get the client's go ahead with the design I created. I used Firebase for an easy and trustable login system and data storage to speed up development.",
            skills: ["React.js", "Firebase", "Figma", "Bootstrap", "Sass"]
        },
        {
            id: 3,
            projectName: "Magic Resume",
            projectImage: "/assets/img/projectImages/magic-resume-mockup.png",
            projectImageName: "Magic Resume Mock",
            projectDetails: "Magic Resume is yet another freelance opportunity I got from my friend's connection. The clients were college students with quite a tight deadline of just one week. I had no restrictions on design, so rather than starting from scratch, I quickly generated a UI with the help of a previously created component for other projects. Again, I used Firebase for database and authentication and used React.js. I finished and submitted the project on time with a single-page application.",
            skills: ["React.js", "Firebase", "Bootstrap", "Sass"],
            link: "https://magic-resume.web.app/"
        },
        {
            id: 2,
            projectName: "Technogeekx",
            projectImage: "/assets/img/projectImages/technogeekx-mockup.png",
            projectImageName: "Technogeekx mockup",
            projectDetails: "Technogeekx is one of my personal projects I created when I was learning React.js. I didn't create any particular design for this one, which was a bad choice, but well... I wanted to convert it to my personal blog but later learned that it would be better if I used CMS instead, or any other blogging website rather than creating my own.",
            skills: ["React.js", "Firebase", "Bootstrap", "Sass"],
            link: "https://technogeekx-web.web.app/",
            code: "https://github.com/Yugabdh/technogeekx-website"
        },
        {
            id: 1,
            projectName: "Raven",
            projectImage: "/assets/img/projectImages/raven-logo.png",
            projectImageName: "Raven logo",
            projectDetails: "Raven is a web reconnaissance tool that can perform passive as well as a few active scans. I started with this project as the CLI tool in my second year and converted it to a web-based app using Flask. As I understood that the output is quite hard to digest for someone who is using it for the first time. This project was inspired by the Nessus scanner.",
            skills: ["Python 3", "Flask", "Javascript", "Web Scrapping", "Figma"],
            code: "https://github.com/Yugabdh/raven"
        },
        {
            id: 0,
            projectName: "Codelit",
            projectImage: "/assets/img/projectImages/codelit-mockup.png",
            projectImageName: "Codelit Mock",
            projectDetails: "Codelit was one of my first webapps I created in my first year. I built it using PHP, Javascript, and MySQL. I was just exploring back then. After all, who uses PHP, right? It was a learning website where users could learn C, even though I didn't understand C enough to teach someone in the first place :p. This app had profile management, quizzes, and lessons as modules.",
            skills: ["PHP", "Javascript", "MySQL"]
        }
    ];
    
    const experinceData = [
        {
            id: 2,
            position: "Application Development Associate",
            companyName: "Accenture",
            companyDuration: "March 2022-Current",
            companyWork: "Accenture is multinational professional services company that specialises in information technology (IT) services and consulting. A Fortune Global 500 company, it reported revenues of $50.53 billion in 2021….Accenture. Currently I'm exploring my journey at Accenture.",
        },
        {
            id: 1,
            position: "Software Engineer",
            companyName: "Newgen Software",
            companyDuration: "June 2021-January 2022",
            companyWork: "Newgen is the leading provider of a unified digital transformation platform with native process automation, content services, and communication management capabilities. Here I worked using Java EE to create RESTful Webservices to provide touchpoints to end systems, also integrated APIs to provide additional functionality to user.",
        },
        {
            id: 0,
            position: "Front-end Devloper Intern",
            companyName: "Dezignolics",
            companyDuration: "June, 2020",
            companyWork: "Dezignolics is a professional web design and development company. providing custom website designing & development services. I got chance to develop responsive, one page website with front end framework Bootstrap 4.",
        }
    ];

    var projectComponent = <ProjectComponent projects={ projectData } />
    var skill = <Skill experinces= { experinceData } />;
    var contactComponent = <ContactComponent />
    return (
        <>
            <SideBar toggle={toggle} isOpen={isOpen}/>
            <Navbar toggle={toggle}/>
            <HeroHeader />
            <SectionComponent heading="Little About Me" verticleTiltle="About me" content={ about_sideContent } id="about" />
            <SectionComponent heading="My Work" verticleTiltle="Projects" content={ projectComponent } id="mywork"/>
            <SectionComponent heading="Skills & Experience" verticleTiltle="resume" content={ skill } id="skills" />
            <SectionComponent heading="Let's Talk" verticleTiltle="Contact me" content={ contactComponent } id="contact" />
        </>
    )
}

export default Home;