import React, { useContext } from 'react';
import { mainContext } from '../../contexts/MainContext';
import ProjectCard from '../../shareComponents/ProjectCard';

const Projects = () => {
    const { light } = useContext(mainContext);
    return (
        <div className='my-10' data-aos="flip-up">
            <h1 className='text-4xl font-serif '>Projects</h1>
            <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
                {[...Array(8)].map(project => <ProjectCard />)}
            </div>
            <button className={`btn ${light ? "" : "btn-outline"} uppercase block mx-auto rounded-2xl px-6 my-5`}>SEE ALL</button>
        </div>
    );
};

export default Projects;