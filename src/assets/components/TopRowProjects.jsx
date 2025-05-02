import { motion, scale } from 'framer-motion'
export default function TopRowProjectsPage(){
    const bigProj = {
        name: "MoviesWrapped", desc: "Discover your favorite viewing statistics!", href: "https://imdb-wrapped.vercel.app", img: "/movieswrapped.png"
    }
    const projects = [
        {
            name: "MentalWhiz", desc: "Endless mental math problems", href: "https://mentalwhiz.vercel.app", img: "/mentalwhiz.png"
        },
        {
            name: "SkywalkerStacks", desc: "Track your star wars legos!", href: "https://mentalwhiz.vercel.app", img: "/skywalkerstacks.png"
        }
    ]
    return(
        <div className="w-screen flex items-center justify-center gap-x-10">
            <div className="w-[55vw]">
                <div className="rounded-md drop-shadow-md">
                <div className="overflow-hidden rounded-t-md hover:brightness-150 transition duration-400">
                    <motion.img
                        src={bigProj.img}
                        alt={bigProj.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    />
                    </div>
                    <div className="w-full bg-[#45A29E] p-3 rounded-b-md ">
                        <h3 className='text-xl text-white font-bold text-shadow-md'>{bigProj.name}</h3>
                        <p className='text-[#C5C6C7] text-shadow-md'>{bigProj.desc}</p>
                    </div>
                </div>
            </div>
            <div className="w-[20vw] flex flex-col gap-y-8">
            {projects.map((project) => {
    return (
        <div className="rounded-md drop-shadow-md" key={project.name}>
            <div className="overflow-hidden rounded-t-md hover:brightness-120 transition duration-400">
                <motion.img
                    src={project.img}
                    alt={project.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
            </div>
            <div className="w-full bg-[#45A29E] p-3 rounded-b-md">
                <h3 className='text-xl text-white font-bold text-shadow-md'>{project.name}</h3>
                <p className='text-[#C5C6C7] text-shadow-md'>{project.desc}</p>
            </div>
        </div>
    );
})}
            
            </div>
        </div>
    )
}