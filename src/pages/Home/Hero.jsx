import React from 'react';
import { heroDetails } from '../../data/HeroDetails';
import ProjectCard from '../../shareComponents/ProjectCard';
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-2 gap-3 lg:h-[70vh]">

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <img className='lg:w-[300px] lg:h-[500px] object-cover rounded-3xl lg:border-4 lg:my-10' src={heroDetails.image} alt="" />
            </motion.div>
            <div className="lg:col-span-2 relative">
                <motion.div className="space-y-4 lg:mt-40"
                    initial={{ opacity: 0, scale: 3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='md:text-8xl text-5xl font-serif font-bold'>{heroDetails.name}</h1>
                    <h3 className='md:text-4xl text-2xl font-semibold'>{heroDetails.title}</h3>
                    <button className='btn btn-outline rounded-3xl normal-case text-gray-200'>Download Resume</button>
                </motion.div>
                <div className="hidden lg:block absolute bottom-0 right-0">
                    <p className='font-serif text-2xl uppercase'>Recent Project</p>
                    <ProjectCard />
                </div>
            </div>
        </div >
    );
};

export default Hero;