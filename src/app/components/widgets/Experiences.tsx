'use client'
// Next imports
import Link from "next/link";

// Other imports
import Section from "../shared/Section";
import { ExperiencesData } from "@/data/experiences";

import { Element } from 'react-scroll';

import { motion } from "framer-motion";

// Experiences Functional Component
const Experiences = () => {
    // Experiences Component Return
    return (
        <>
            <Element name="experience">
                <Section id="experience">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Professional Experiences:</h3>

                        {ExperiencesData?.map((experience) => {
                            return (
                                <div key={experience.slug} className={`mt-2 bg-grey-light border-t-8 rounded-md ${experience.isPresent ? 'border-green' : 'border-grey'} p-3`}>
                                    <h4>{experience.title}</h4>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                        <p className="text-secondary font-semibold">{experience.company}</p>
                                        <p className="text-primary">{experience.startDate} – {experience.endDate}, {experience.location}</p>
                                    </div>

                                    <ul>
                                        {experience.responsibilities?.slice(0, 3).map((responsibility, index) => {
                                            return <li key={index} className="mt-1">- {responsibility}</li>
                                        })}
                                    </ul>

                                    <Link href={`/experience/${experience.slug}`}>
                                        <p className="text-secondary font-semibold mt-3 underline">
                                            Read More
                                        </p>
                                    </Link>


                                </div>
                            )
                        })}
                    </motion.div>
                </Section>
            </Element>
        </>
    )
}

export default Experiences
