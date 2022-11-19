import React, { useContext } from 'react';
import { mainContext } from '../../contexts/MainContext';
import AboutMe from './AboutMe';
import ContactUs from './ContactUs';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    const { light } = useContext(mainContext);
    console.log(light);
    return (
        <div className={`p-2 ${light ? "bg-white text-black" : ""}`}>
            <div className="container mx-auto ">
                <Hero />
                <AboutMe />
                <Projects />
                <Skills />
                <ContactUs />
            </div>
        </div>
    );
};

export default Home;