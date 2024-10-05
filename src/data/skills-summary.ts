// Skills Summary Types
interface SkillSummaryI {
    slug: string;
    category: string;
    skills: string;
}

// Skills Summary Array
export const skillsSummary: SkillSummaryI[] = [
    {
        slug: "frontend",
        category: "Frontend Development",
        skills: "JavaScript, React.Js, Next.Js, Typescript, React Native, Redux, Redux-Toolkit, Vanilla JS, AngularJS, Vue.js, JSON, AJAX, SCSS/SASS, LESS, Tailwind CSS, DevExpress, Ant-Design, Chakra UI, Shadcn/ui, Bootstrap, Material UI, DOM, ES6, jQuery, Jest, Axios, Hooks, Webpack, XML, HTML5, CSS3, Flex Box, Grid Layout, RESTful API, Third Party Libraries.",
    },
    {
        slug: "backend",
        category: "Backend Development",
        skills: "NodeJS/ExpressJS, MongoDB, Mongoose, MySQL, PostgreSQL, GraphQL, Redis, PHP, ASP.NET Core, Python, Model-View-Controller(MVC), ORM (Drizzle, Prisma), CMS (Sanity & Contentful).",
    },
    {
        slug: "server",
        category: "Server & Domain",
        skills: "Heroku, Vercel, AWS, Digital Ocean, Apache, Google Cloud, Cloudinary.",
    },
    {
        slug: "soft",
        category: "Soft Skills",
        skills: "Teamwork, Communication, Troubleshooting, Adaptability, Problem Solving, Work Ethics, Project Management, Open to Positive Criticism, Ability to Work Under Pressure, Attention to Details.",
    },
    {
        slug: "tools",
        category: "Tools/OS",
        skills: "Visual Code, Protégé, GIT, GitHub, SVN, Bitbucket, Jira, Postman, (Word/PowerPoint/Excel/Visio), Photoshop, Figma, Npm, Yarn.",
    },
];
