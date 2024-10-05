// Personal Details Types
type contactTypes = {
    email: string,
    mobile: string,
    phone?: string,
}

type socialLinksT = {
    linkedin: string,
    github: string,
}

interface PersonalDetailsI {
    name: string,
    title: string,
    address: string,
    visa: string,
    contact: contactTypes,
    socialLinks: socialLinksT,
    objective: string[],
    dob: string,
    martialStatus: string,
    passportExpiry: string,
    languages: string,
}

// Personal Details Object

export const personalDetails: PersonalDetailsI = {
    name: "Afzaal Ahmad",
    title: "Full Stack Developer | Reactjs | Nodejs | Nextjs",
    address: "Bur Dubai, Dubai, UAE",
    visa: "Residence Visa",
    contact: {
        email: "ahmadafzaal703@gmail.com",
        mobile: "+971 52 7483200",
        phone: "+92 345 1528970",
    },
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/afzaalahmad845/",
        github: "https://github.com/ahmadafzaal702",
    },
    objective: [
        "A dedicated Full Stack Developer with over 5 years of experience in web development. With a Master's degree in Information Technology, I specialize in creating seamless and robust digital solutions.",
        // "My technical expertise includes HTML, CSS, JavaScript, Typescript, React.js, Next.js, Node.js, and both SQL and NoSQL databases. Proficiency in state management tools such as Redux and Context API, and seamlessly integrating APIs to enhance application functionality.",
        // "I am well-versed in Agile Methodology, ensuring adaptability and efficiency throughout the Software Development Lifecycle. My commitment to excellence extends to areas such as Data Structures, Object-Oriented Programming (OOP), Coding Security, Unit Testing, and Documentation Standards.",
        // "I am actively seeking opportunities to collaborate with forward-thinking teams and contribute my skills and commitment to impactful projects. Let's connect and explore how my expertise can contribute to the success of your team or organization."
    ],
    dob: "2-Dec-1995",
    martialStatus: "Single",
    passportExpiry: "27-Feb-2028",
    languages: "English, Urdu, Hindi",
}