import { BrainCircuit, ComputerIcon, LayoutTemplateIcon } from "lucide-react";

export default function SkillCardPage({skills}){
    return(
        <motion.div 
                className="flex flex-col w-[25vw] gap-y-10 items-start justify-between h-[50vh] border-white"
                style={{ y: skills.transform }}
            >   
            <div className="flex gap-x-2">
                <skills.icon />
                <h2 className="text-white font-bold text-7xl">{skills.name}</h2>
            </div>
                
                <div>
                    <p className="text-[#C5C6C7] mb-5">
                        {skills.text}
                    </p>
                </div>
            </motion.div>
    )
}