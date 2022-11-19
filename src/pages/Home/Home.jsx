import React from 'react';
import AboutMe from './AboutMe';
import ContactUs from './ContactUs';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='text-white container mx-auto p-2'>
            <Hero />
            <AboutMe />
            <Projects />
            <Skills />
            <ContactUs />
        </div>
    );
};

export default Home;