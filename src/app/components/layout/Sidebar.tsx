"use client"
// Next imports
import Image from "next/image"
import Link from "next/link";

import { useState } from "react";

// Other imports
import profilePic from '@/assests/profile.jpg';
import Menu from "../widgets/Menu";

import { CiMenuFries } from "react-icons/ci";

import { motion } from "framer-motion";

// Sidebar Functional Component
const Sidebar = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Sidebar Component Return
    return (
        <>
            <nav className="bg-primary h-auto w-full p-2 sm:p-4 flex flex-col items-start sm:min-h-screen sm:items-center sm:fixed sm:w-1/4" id="sideNav">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                >
                    <Link href='/'>
                        <Image src={profilePic} alt="Afzaal Ahmad" className="rounded-full border-8 border-opacity-20 border-white w-24 h-24 sm:w-48 sm:h-48" />
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ul className={`${isMobile ? 'block' : 'hidden'}  sm:block sm:text-center mt-2`}>
                        <Menu title="about">About</Menu>
                        <Menu title="skills">Skills</Menu>
                        <Menu title="experience">Experience</Menu>
                        <Menu title="education">Education</Menu>
                        {/* <Menu title="interests">Interests</Menu> */}
                        <Menu title="awards">Awards</Menu>
                    </ul>
                </motion.div>
            </nav>
            <div className={`block sm:hidden absolute top-7 right-8 border-opacity-20 p-3 border-2 border-white`}>
                <CiMenuFries className="text-white font-bold text-3xl" onClick={() => setIsMobile(!isMobile)} />
            </div>
        </>
    )
}

export default Sidebar