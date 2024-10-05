// Experiences Types
interface ExperiencesInterface {
    slug: string;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    isPresent: boolean;
    location: string;
    responsibilities: string[];
}

// Experiences Array
export const ExperiencesData: ExperiencesInterface[] = [
    {
        slug: "suadeo",
        title: "Web Developer",
        company: "Suadeo",
        startDate: "Dec 2023",
        endDate: "Present",
        isPresent: true,
        location: "Dubai, United Arab Emirates",
        responsibilities: [
            "Frontend development for Business Intelligence software using JavaScript, ReactJS, Bootstrap, jQuery, and other libraries.",
            "Implement best practices to ensure scalability of the front-end codebase, focusing on creating reusable components.",
            "Collaborate with backend team and integrate the API’s build using ASP.NET Core for effective client-server communication.",
            "Utilize Jira for Agile project management, defining and tracking tasks to ensure timely project completion and collaboration.",
            "Implement GIT for version control, ensuring codebase integrity and facilitating collaborative development within the team.",
        ]
    },
    {
        slug: "lloyds",
        title: "React JS Developer",
        company: "Lloyds Knight International",
        startDate: "June 2022",
        endDate: "Nov 2023",
        isPresent: false,
        location: "Pakistan",
        responsibilities: [
            "Developed frontend of many applications from scratch using JavaScript frameworks and libraries i.e. ReactJS and NextJS.",
            "Convert designs into responsive user interfaces, and high-quality code using CSS, SASS, Ant Design, and Tailwind CSS.",
            "Developed APIs using ExpressJS (Node) framework and consumed these APIs in React applications.",
            "Implemented and managed authentication mechanisms, leveraging technologies like (JWT, Next-auth).",
            "Utilized Git for proficient code repository management and version control.",
            "Implemented DevOps practices by overseeing cloud infrastructure management, specifically utilizing CI/CD tools.",
            "Collaborated with cross-functional teams including designers, and fellow developers, to deliver high-quality software solutions, fostering a positive team environment through open communication.",
            "Adopted the Agile methodologies, actively participating in daily scrum meetings.",
            "Participated in the full life cycle of new website development projects.",
            "Project Portfolio includes (RHS, Simple Inspections, Security Services, PrepUk) projects."
        ]
    },
    {
        slug: "nerds",
        title: "Frontend Developer",
        company: "Nerds Studio",
        startDate: "Aug 2020",
        endDate: "May 2022",
        isPresent: false,
        location: "Pakistan",
        responsibilities: [
            "Designed responsive UI/UX for React.js websites using Figma, emphasizing Material UI, Bootstrap, and Styled Components.",
            "Contributed to React Native tasks for the development of Android and iOS mobile applications.",
            "Utilized Redux, Context API, and Redux Toolkit for state management ensuring data consistency and efficient state updates.",
            "Integrated Restful APIs with the front-end, effectively parsing payloads and handling responses.",
            "Conducted thorough Unit Testing using Jest to identify and resolve issues, ensuring the delivery of high-quality code.",
            "Improved website visibility through SEO optimization techniques and Google Search Console for effective page indexing.",
            "Worked closely with other developers to deliver high-quality software solutions ensuring a positive team environment.",
        ]
    },
    {
        slug: "fiverr",
        title: "Web Developer",
        company: "Fiverr",
        startDate: "March 2019",
        endDate: "July 2020",
        isPresent: false,
        location: "Pakistan",
        responsibilities: [
            "Developed websites in WordPress and Shopify for US based clients.",
            "Expertise of creating front-end using HTML/HTML5, CSS/CSS3, Bootstrap.",
            "Customize themes according to the requirements with Cross Browser Compatibility.",
        ]
    },
    {
        slug: "uogintern",
        title: "UOG Graduate Intern",
        company: "University of Gujrat ",
        startDate: "Sep 2018",
        endDate: "Jan 2019",
        isPresent: false,
        location: "Pakistan",
        responsibilities: [
            "Provided the comprehensive teaching to BS-IT and BS-SE students for Database Systems and Web Technologies subjects.",
            "Delivered lectures, provided notes, tracked attendance, graded exams, and provided review preparation for the final exam.",
            "Flourish the soft skills (Communication, Management, Leadership, Attention to Details) etc.",
        ]
    },
];
