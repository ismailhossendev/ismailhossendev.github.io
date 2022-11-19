import React from 'react';
import { motion } from 'framer-motion';
const AboutMe = () => {
    return (
        <div className='lg:h-[60vh] grid md:grid-cols-2 lg:p-10 p-2 my-5'>
            <motion.div className="flex justify-center flex-col"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <h1 className='text-6xl font-semibold font-my-font my-5'>AboutMe</h1>
                <p className='lg:text-xl mb-10'>I learned early on in my photography
                    career that I didn't need to travel the
                    world to capture great photos. My
                    most interesting shots are those of
                    unnoticed corners.career that I didn't need to travel the
                    world to capture great photos. My
                    most interesting shots are those of
                    unnoticed corners.</p>
            </motion.div>
            <div className="mx-auto">
                <img className='rounded-2xl md:w-[350px] lg:h-[450px] object-cover w-full border-8' src="https://i.ibb.co/V0FPxVG/IMG-0116.jpg" alt="" />
            </div>
        </div>
    );
};

export default AboutMe;