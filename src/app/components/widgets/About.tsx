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

                        <p>A highly motivated Full Stack Developer with a Master&apos;s degree in Information Technology and 5+ years of experience, expanding expertise in Artificial Intelligence (AI), Machine Learning (ML), and Generative AI. Skilled in developing scalable, high-performance web applications using JavaScript, React, Next.js, Node.js, and TypeScript, while integrating AI-driven solutions with Python, TensorFlow, LangChain, and Transformer models. Seeking opportunities to contribute to innovative projects that merge modern software development with AI to drive efficiency and technological advancement.</p>

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