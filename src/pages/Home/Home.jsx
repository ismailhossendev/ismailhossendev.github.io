import React from 'react';
import AboutMe from './AboutMe';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='text-white container mx-auto'>
            <Hero />
            <AboutMe />
            <Projects />
        </div>
    );
};

export default Home;