import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
    if (!project) return null; 
    return (
        <a 
            href={project.href} 
            className="rounded-md drop-shadow-lg block " 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <div className=" rounded-t-md hover:grayscale-25 overflow-hidden transition duration-400">
                <motion.img
                    src={project.img}
                    alt={project.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
            </div>
            <div className="w-full bg-[#45A29E] p-3 rounded-b-md">
                <h3 className='text-xl text-white font-bold text-shadow-md'>{project.name}</h3>
                <div className="h-6">
                    <p 
                        className='text-[#C5C6C7] text-shadow-md'
                        
                    >
                        {project.desc}
                    </p>
                </div>
            </div>
        </a>
    );
}