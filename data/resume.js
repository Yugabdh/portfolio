import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiBootstrap,
    SiPython,
    SiFlask,
    SiFirebase,
    SiOracle,
    SiSpring,
    SiNextdotjs,
    SiTailwindcss,
    SiSnowflake,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";

const resume = {
    experinces: [
        {
            id: 2,
            position: "Software Developer",
            companyName: "Accenture",
            companyDuration: "March 2022-Current",
            companyWork:
                "At Accenture, I work as a full-time engineer and have hands-on expertise with Java, Spring Boot, ReactJs, Snowflake, and SnowPark. I've contributed to a variety of projects, including the development of microservices, Snowspark wrapper libraries, and automation utilities.",
        },
        {
            id: 1,
            position: "Software Engineer",
            companyName: "Newgen Software",
            companyDuration: "June 2021-January 2022",
            companyWork:
                "At Newgen, I used their excellent low-code BPM tools. I utilized Java EE to create RESTful Webservices that connect to end systems. I also included APIs to give consumers more capability. I also got a chance to work on the front end with JavaScript.",
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
                    skillName: "REACTJS",
                    skillIcon: <SiReact />,
                },
                {
                    skillName: "NEXTJS",
                    skillIcon: <SiNextdotjs />,
                },
                {
                    skillName: "Tailwindcss",
                    skillIcon: <SiTailwindcss />,
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
                    skillName: "JAVA",
                    skillIcon: <FaJava />,
                },
                {
                    skillName: "SPRING BOOT",
                    skillIcon: <SiSpring />,
                },
                {
                    skillName: "Python",
                    skillIcon: <SiPython />,
                },
                {
                    skillName: "FLASK",
                    skillIcon: <SiFlask />,
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
                    skillName: "SNOWFLAKE",
                    skillIcon: <SiSnowflake />,
                },
                {
                    skillName: "FIREBASE",
                    skillIcon: <SiFirebase />,
                },
            ],
        },
    ],
};

export default resume;