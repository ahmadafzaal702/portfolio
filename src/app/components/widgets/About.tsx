'use client'
// Next imports

// Other imports
import { personalDetails } from "@/data/personal-details";
import Section from "../shared/Section";
import { Element } from 'react-scroll';

import { FaLinkedin, FaGithub } from "react-icons/fa6";

import { motion } from "framer-motion";

// About Functional Component
const About = () => {

    // About Component Return
    return (
        <>
            <Element name="about">
                <Section id="about">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <h1 className="uppercase">Afzaal <span className="text-primary">Ahmad</span></h1>
                        <h2>{personalDetails.title}</h2>

                        <p className="mb-8">
                            {personalDetails.contact.mobile},
                            &nbsp; <a href="mailto:ahmadafzaal703@gmail.com" className="text-primary underline">{personalDetails.contact.email}</a>
                        </p>

                        <p>A dedicated Full Stack Developer with over 5 years of experience in web development. With a Master's degree in Information Technology, I specialize in creating seamless and robust digital solutions. My technical expertise includes HTML, CSS, JavaScript, Typescript, React.js, Next.js, Node.js, and both SQL and NoSQL databases. Proficiency in state management tools such as Redux and Context API, and seamlessly integrating APIs to enhance application functionality.</p>

                        <ul className="mt-8 flex gap-4">
                            <li className="text-black"><a href="https://www.linkedin.com/in/afzaalahmad845/" target="_blank"><FaLinkedin className="w-12 h-12" /></a></li>
                            <li className="text-black"><a href="https://github.com/ahmadafzaal702" target="_blank"><FaGithub className="w-12 h-12" /></a></li>
                        </ul>
                    </motion.div>
                </Section>
            </Element>
        </>
    )
}

export default About