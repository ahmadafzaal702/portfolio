'use client'
// Next imports

// Other imports
import Section from "../shared/Section";
import { EducationData } from "@/data/education";

import { Element } from 'react-scroll';

import { motion } from "framer-motion";

// Education Functional Component

const Education = () => {
    // Education Component return
    return (
        <>
            <Element name="education">
                <Section id="education">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3>Education</h3>

                        {EducationData?.map((education) => {
                            return (
                                <div key={education.slug} className={`mt-2`}>
                                    <h4>{education.university}</h4>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                        <p className="text-secondary font-semibold">{education.slug.toUpperCase()}</p>
                                        <p className="text-primary">{education.startYear}- {education.endYear}</p>
                                    </div>
                                    <div>
                                        <p>{education.degree}</p>
                                        <p>CGPA: {education.cgpa}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </motion.div>
                </Section >
            </Element>
        </>
    )
}

export default Education
