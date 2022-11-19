import React from 'react';
import { heroDetails } from '../../data/HeroDetails';
import ProjectCard from '../../shareComponents/ProjectCard';
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="lg:flex grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-2 gap-3 lg:h-[70vh] relative">

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <img className='lg:w-[300px] lg:h-[500px] object-cover rounded-3xl lg:border-4 lg:my-10' src={heroDetails.image} alt="" />
            </motion.div>
            <div className="lg:col-span-2">
                <motion.div className="space-y-4 lg:mt-40"
                    initial={{ opacity: 0, scale: 3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='md:text-[5rem] text-5xl font-serif font-bold'>{heroDetails.name}</h1>
                    <h3 className='md:text-4xl text-2xl font-semibold'>{heroDetails.title}</h3>
                    <a href='https://drive.google.com/file/d/13_2m0L-AaTJJf0NUJ3LYB-B4w0-ncalH/view?usp=sharing' target={'_blank'} className='btn btn-outline rounded-3xl normal-case text-gray-200' rel="noreferrer">Download Resume</a>
                </motion.div>
                <div className="hidden lg:block absolute bottom-0 right-0 z-20">
                    <p className='font-serif text-2xl uppercase'>Recent Project</p>
                    <ProjectCard />
                </div>
                <div className="alert alert-error shadow-lg absolute w-96 rounded-lg right-0 top-0" data-aos="fade-right">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>This Website Under Construction!</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;