import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function ProjectsPage() {
    const bigProj = {
        name: "StudyWithChat",
        desc: "Custom AI Chatbot Integrated with any textbook PDF",
        href: "https://github.com/emiliolugo",
        img: "/studywchat.png"
    }
    
    const bottomProj = [
        {
            name: "MentalWhiz",
            desc: "Endless mental math problems",
            href: "https://mentalwhiz.vercel.app",
            img: "/mentalwhiz.png"
        },
        {
            name: "SkywalkerStacks",
            desc: "Track your star wars legos!",
            href: "https://skywalker-stacks.onrender.com/",
            img: "/skywalkerstacks.png"
        }
    ]
    
    const projects = [
        {
        name: "MoviesWrapped",
        desc: "Discover your favorite viewing statistics!",
        href: "https://imdb-wrapped.vercel.app",
        img: "/movieswrapped.png"
        },
        {
            name: "Squee-G's Windows",
            desc: "Window cleaning business website.",
            href: "https://squeegs.netlify.app",
            img: "/squeegs.png"
        },
        {
            name: "Word Search Generator",
            desc: "Generate unlimited word searches!",
            href: "https://customwordsearch.netlify.app",
            img: "/wordsearch.png"
        }
    ]
    
    // Combine all projects for mobile view
    const allProjects = [bigProj, ...bottomProj, ...projects];
    
    return (
        <div className='h-auto bg-[#151C22] px-4 md:px-50'>
            <h2 className='text-[#C5C6C7] mb-10 text-xl font-bold'>Other Projects</h2>
            
            <div className="md:hidden flex flex-col gap-6 pb-20">
                {allProjects.map((project) => (
                    <div key={project.name}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
            
            <div className="hidden md:grid grid-flow-row-dense grid-cols-10 pb-20 gap-6">
                <div className="col-span-7 h-full flex flex-col">
                    <div className="mb-10">
                        <ProjectCard project={bigProj} />
                    </div>
                    
                    <div className='flex gap-x-6'>
                        {bottomProj.map((project) => (
                            <div key={project.name} className="flex-1">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="flex flex-col justify-between h-full col-span-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.name}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}