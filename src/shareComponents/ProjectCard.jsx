import React from 'react';
import { FaGithub, FaCode } from "react-icons/fa"
import { motion } from 'framer-motion';
const ProjectCard = () => {
    return (
        <motion.div className="card bg-black  shadow-xl p-2 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <img className='rounded-xl' src="https://placeimg.com/400/225/arch" alt="Shoes" />
            <div className="card-body p-0 py-3">
                <h2 className="card-title">
                    Driving Portal
                    <div className="badge badge-secondary">Web App</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="btn-sm btn rounded-lg btn-outline gap-1 normal-case"><FaCode /> Preview</div>
                    <div className="btn-sm btn rounded-lg btn-outline gap-1 normal-case"><FaGithub /> GitHub</div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;