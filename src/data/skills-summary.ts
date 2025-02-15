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
        skills: "JavaScript, TypeScript, React.js, Next.js, React Native, Vue.js, Redux Toolkit, JSON, AJAX, SCSS/SASS, LESS, Tailwind CSS, Ant Design, Chakra UI, Shadcn/ui, Bootstrap, Material UI, DOM, ES6, jQuery, Hooks, Webpack, HTML5, CSS3, RESTful APIs, Third-Party Libraries.",
    },
    {
        slug: "backend",
        category: "Backend Development",
        skills: "Node.js/Express.js, FastAPI, Python, MongoDB, Mongoose, MySQL, PostgreSQL, Model-View-Controller (MVC), Pinecone.",
    },
    {
        slug: "mlai",
        category: "Machine Learning & AI",
        skills: "NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, Keras, ANN, RNN, LSTM, Transformers, LangChain, Hugging Face, OpenAI API.",
    },
    {
        slug: "server",
        category: "Server & Domain",
        skills: "Vercel, AWS, AWS Amplify, Lambda Functions, API Gateway, S3 Bucket, Cloudinary.",
    },
    {
        slug: "soft",
        category: "Soft Skills",
        skills: "Teamwork, Communication, Troubleshooting, Problem Solving, Work Ethics, Open to Positive Criticism, Adaptability, Collaboration, Ability to Work Under Pressure, Attention to Details.",
    },
    {
        slug: "tools",
        category: "Tools/OS",
        skills: "Visual Studio Code, GIT, GitHub, Gitlab, Jira, Postman, Figma, Npm, Pip, Anaconda, Google Colab, Jupyter Notebooks.",
    },
];
