import { useRef } from "react";
import NamePage from "./Name";
import TKScene from "./TKScene";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroPage(){
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["start start", "end start"]
        
    })

    const textTransform = useTransform(scrollYProgress,[0,1], ["0","150%"])


    return(
        <div className="relative w-full h-screen  justify-center bg-gradient-to-b from-[#2C3845] to-[#151C22] p-10">
            <div className="mt-10 mx-20 hidden md:block">
                <h4 className="text-[#66FCF1] mr-auto font-mono text-2xl hover:text-[#45A29E]">Emilio Lugo<span className="text-white font-sans text-4xl">.</span></h4>
            </div>
           <div 
        ref={ref}
        className="relative w-full h-full flex overflow-hidden items-center justify-center">
            
            <motion.div className="absolute inset-0 z-0 flex items-center justify-center hidden md:block"
            >
                <TKScene />
            </motion.div>
            <motion.div className="absolute z-10 "
            style={{ y: textTransform }}>
                <NamePage />
            </motion.div>
        </div> 
        </div>
        

    )
}