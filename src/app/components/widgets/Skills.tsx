'use client'
// Next imports

// Other imports
import Section from "../shared/Section";
import { skillsSummary } from "@/data/skills-summary";

import { Element } from 'react-scroll';

import { motion } from "framer-motion";

// Skills Functional Component
const Skills = () => {

    // Skills Component Return
    return (
        <>
            <Element name="skills">
                <Section id="skills">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <h3>Summary of Skills:</h3>

                        {/* skills mapping */}
                        {skillsSummary?.map((skill) => {
                            return (
                                <div key={skill.slug} className="mt-2">
                                    <h4>{skill.category}</h4>
                                    <p className="mt-1">{skill.skills}</p>
                                </div>
                            )
                        })}
                    </motion.div>
                </Section>

            </Element>

        </>
    )
}

export default Skills
