import React from 'react';
import { FaCheckSquare } from "react-icons/fa"
const Skills = () => {
    return (
        <div data-aos="fade-down-left" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100" bis_skin_checked="1">
            <h2 className="mb-8 text-4xl font-bold leading-none text-center">Skills And Tools </h2>
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>ReactJs </span>
                    <progress className="progress progress-warning w-56 border rounded" value="90" max="100"></progress>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>NodeJs</span>
                    <progress className="progress progress-warning w-56 border rounded" value="50" max="100"></progress>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>ExpressJs</span>
                    <progress className="progress progress-warning w-56 border rounded" value="50" max="100"></progress>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>HTML</span>
                    <progress className="progress progress-warning w-56 border rounded" value="100" max="100"></progress>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>CSS</span>
                    <progress className="progress progress-warning w-56 border rounded" value="100" max="100"></progress>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>TailwindCSS</span>
                    <progress className="progress progress-warning w-56 border rounded" value="100" max="100"></progress>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>Bootstrap</span>
                    <progress className="progress progress-warning w-56 border rounded" value="90" max="100"></progress>
                </li><li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>Figma</span>
                    <progress className="progress progress-warning w-56 border rounded" value="50" max="100"></progress>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>AdobeXD</span>
                    <progress className="progress progress-warning w-56 border rounded" value="50" max="100"></progress>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>MongoDB</span>
                    <progress className="progress progress-warning w-56 border rounded" value="80" max="100"></progress>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>GitHub</span>
                    <progress className="progress progress-warning w-56 border rounded" value="80" max="100"></progress>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCheckSquare />
                    <span>VS Code</span>
                    <progress className="progress progress-warning w-56 border rounded" value="80" max="100"></progress>
                </li>
            </ul>
        </div>
    );
};

export default Skills;