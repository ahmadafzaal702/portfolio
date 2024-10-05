'use client'
// Next imports

// Other imports
import Section from "../shared/Section";
import { AwardsData } from "@/data/awards";
import { motion } from "framer-motion";

import { Element } from 'react-scroll';

// Awards Functional Component

const Awards = () => {
    // Awards Component Return
    return (
        <>
            <Element name="awards">
                <Section id="awards" border={false}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Awards</h3>

                        <ul className={`mt-2`}>
                            {
                                AwardsData?.map((award, index) => {
                                    return (
                                        <li key={index}> - {award}</li>
                                    )
                                })
                            }
                        </ul>
                    </motion.div>
                </Section>
            </Element>

        </>
    )
}

export default Awards
