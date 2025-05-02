import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BrainCircuit, ComputerIcon, LayoutTemplateIcon } from "lucide-react";

export default function SkillsPage() {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
        };
    
        checkMobile();
        window.addEventListener("resize", checkMobile);
        
        return () => {
          window.removeEventListener("resize", checkMobile);
        };
      }, []);

    const transform1 = useTransform(scrollYProgress, 
        [0, .5],
        ["75%","0%"] 
      );
      
      const transform2 = useTransform(scrollYProgress, 
        [0, .5], 
        ["150%", "0%"]
      );

      const transform3 = useTransform(scrollYProgress, 
        [0, .5], 
        ["225%", "0%"]
      );

      const skills = [
        {
            name: "Software Development",
            icon: ComputerIcon,
            text: "I am proficient with React, HTML, CSS and JS on the frontend. On the backend I have used Flask, Next.js, with my go to database being PostgreSQL.",
            transform: transform1
        },
        {
            name: "Web Design",
            icon: LayoutTemplateIcon,
            text: "I have created professional websites for Window Cleaning businesses and University organizations.",
            transform: transform2
        },
        {
            name: "AI and Data Analysis",
            icon: BrainCircuit,
            text: "I have worked on research with modeling and data analyis. Furthermore, I have done pro-bono consulting with my specialty being Pandas.",
            transform: transform3
        },
    ]


    return (
        <div
        className=" w-full md:h-screen bg-[#151C22] md:p-20 p-10 flex flex-col items-center justify-center"

        >
            <h2 className="text-center text-white md:text-7xl text-4xl font-bold mt-30 mb-10 md:mb-0">My Expertise</h2>
          <div 
            className="relative w-full md:h-screen flex flex-col md:flex-row items-center md:justify-around justify-center gap-y-5 md:gap-y-0"
            ref={ref}
        >
            
            {skills.map((skill) => {
                return(
                    <SkillCardPage key={skill.name} skills={skill} isMobile={isMobile} />
                )
            })}

        </div>  
        </div>
        
    );
}


const SkillCardPage = ({skills, isMobile}) => {
    return(
        <motion.div 
                className="md:w-[25vw] gap-y-10 w-full"
                style={{ y: isMobile ? 0 : skills.transform }}
            >   
            <div className="flex gap-x-2 items-center w-full md:rounded-t-lg bg-[#45A29E] md:p-8 p-3">
                <skills.icon className ='text-white'/>
                <h2 className="text-white font-bold md:text-3xl">{skills.name}</h2>
            </div>
                
                <div className="bg-stone-100/5 p-10 md:h-[20vh] h-[30vh] rounded-b-lg hidden md:block">
                    <p className="text-[#C5C6C7] w-full  md:mt-auto">
                        {skills.text}
                    </p>
                </div>
            </motion.div>
    )
}
