const projects = [
    {
        id: 6,
        projectName: "Designer's Portfolio",
        projectImage:
            "https://res.cloudinary.com/dej6mdgme/image/upload/v1748800128/project-mockups/designer-portfolio_ebixrj.png",
        projectImageName: "Portfolio mock",
        projectDetails:
            "I worked on this project with the designer who provided me this gig. Requirements included creating a website to display his work, allowing visitors to search projects, and ensuring that the site was SEO optimized. We need to construct a project in which each page is rendered server-side. To optimize, I designed components for both server and client-side rendering. ",
        skills: ["Next.js", "Figma", "TailwindCSS"],
        link: "https://gauravtalekar.com/",
    },
    {
        id: 5,
        projectName: "SD IoTecs",
        projectImage:
            "https://res.cloudinary.com/dej6mdgme/image/upload/v1736060285/project-mockups/sd-iotecs-mockup.png",
        projectImageName: "SD IoTecs mock",
        projectDetails:
            "SD IoTecs is a startup focused on IoT and building management. I collaborated with them on this project, where the goal was to create a site for landing with code that could be quickly altered based on the requirements. I chose NextJs for this project since such websites typically require SEO optimized content so that crawlers can see the actual content of the site. I used TailwindCSS for styling because it is as good as CSS with all of its utility classes.",
        skills: ["Next.js", "Figma", "TailwindCSS"],
        link: "https://www.sdiotecs.com/",
    },
    {
        id: 4,
        projectName: "Ragul Family Dental",
        projectImage:
            "https://res.cloudinary.com/dej6mdgme/image/upload/v1660632621/project-mockups/ragul-family-dental-mockup_j0brfs.png",
        projectImageName: "Ragul Family Dental mock",
        projectDetails:
            "Ragul Family Dental is one of the freelance opportunities given to me by one of my colleagues. The requirements were simple: I needed to design a webapp for a dental clinic that would function as a booking system. To begin, I designed a low-fidelity UI in Figma to better understand the app flow and gain the client's approval for the design I proposed. To speed up development, I utilized Firebase as an easy and trustworthy login system and data storage solution. This webapp was totally built with React and Firebase.",
        skills: ["React.js", "Firebase", "Figma", "Bootstrap", "Sass"],
        link: "https://dental-appointment-app.web.app/",
    },
    {
        id: 3,
        projectName: "Magic Resume",
        projectImage:
            "https://res.cloudinary.com/dej6mdgme/image/upload/v1660632620/project-mockups/magic-resume-mockup_ob071x.png",
        projectImageName: "Magic Resume Mock",
        projectDetails:
            "Magic Resume was freelancing assignment I received via reference. The clients had a very tight deadline of only one week. I had no design constraints, so instead of beginning from scratch, I rapidly constructed a UI using a previously created component for other projects. I used Firebase for database and authentication, and React for the front end. I completed and submitted the project on schedule, using an application with only one page (SPA).",
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
            "Technogeekx is one of my personal projects that I built while learning React. I didn't make a specific design for this one, which was a horrible decision, but... I wanted to convert it to my own blog, but I subsequently realized that it would be preferable to utilize CMS or another blogging platform instead of making my own.",
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
            "Raven is a web reconnaissance tool capable of performing both passive and active scans. In my second year, I began working on this project as a CLI tool and then transformed it to a web-based app with Flask. I understand that the output is difficult to digest for someone using it for the first time. This idea was inspired by the Nessus scanner.",
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
            "Codelit was one of the first webapps I built during my first year. I developed it with PHP, Javascript, and MySQL. I was simply exploring back then. After all, who uses PHP anyway? It was an educational platform where users could learn C, even though I didn't know enough to teach anyone in the first place. This app included modules for profile administration, quizzes, and lessons. Now I'm transferring code to Next.js.",
        skills: ["PHP", "Javascript", "MySQL", "Bootstrap"],
        link: "https://codelit-web.web.app/",
        code: "https://github.com/Yugabdh/Codelit",
    },
];

export default projects;