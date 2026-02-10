import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
    if (!project) return null;
    return (
        <motion.a
            href={project.href}
            className="rounded-md block border border-[#45A29E]/30 overflow-hidden shadow-lg hover:shadow-[#45A29E]/20 hover:border-[#66FCF1]/50 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, translateY: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="rounded-t-md hover:grayscale-25 overflow-hidden transition duration-400">
                <motion.img
                    src={project.img}
                    alt={project.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
            </div>
            <div className="w-full bg-gradient-to-br from-[#45A29E] to-[#3a8984] p-3 rounded-b-md">
                <h3 className='text-xl text-white font-bold text-shadow-md'>{project.name}</h3>
                <div className="h-6">
                    <p
                        className='text-[#C5C6C7] text-shadow-md hidden md:block'

                    >
                        {project.desc}
                    </p>
                </div>
            </div>
        </motion.a>
    );
}