import { motion, useTransform, useScroll } from "framer-motion";
import ProjectStack from "./CurrProjStack";
import { useRef, useEffect, useState } from "react";

export default function CurrentProjectPage() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen size is mobile
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const textTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["75%", "0%", "-75%"]
  );

  const imgTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["150%", "0%", "-150%"]
  );

  return (
    <div
      className="relative w-full min-h-screen bg-[#151C22] p-4 md:p-10 flex flex-col md:flex-row items-center justify-around overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="flex flex-col w-full md:w-[25vw] gap-y-5 md:gap-y-10 items-start md:justify-around md:h-[50vh]"
        style={{ y: !isMobile ? textTransform : 0 }}
      >
        <h2 className="text-white font-bold text-4xl md:text-7xl">My Latest Work</h2>
        <div>
          <ProjectStack />
          <p className="text-[#C5C6C7] md:mb-5 text-sm md:text-base">
            <span className="text-white font-bold text-base md:text-lg">vjr.</span> is the travel 
            social media. It is a fullstack web application where users can share the countries 
            they have been to. They can follow other users and compare trips and countries visited.
          </p>
          <motion.button
            className="mb-6 border-lg bg-gradient-to-br from-[#45A29E] to-[#3a8984] px-4 md:px-6 py-2 md:py-3 rounded-md text-white font-bold tracking-wider text-lg md:text-xl block md:block hidden border border-[#45A29E]/30 shadow-lg hover:shadow-[#45A29E]/50 hover:border-[#66FCF1]/50 transition-all duration-300"
            whileHover={{ scale: 1.05, translateY: -2 }}
            transition={{ duration: 0.25 }}
          >
            <span>COMING SOON</span>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-[45vw] flex items-center justify-center h-auto md:h-[70vh]"
        style={{ y: !isMobile ? imgTransform : 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="vjrLogin.png"
          alt="VJR Dashboard for user @emilio"
          className="max-w-full h-auto rounded-lg border border-[#45A29E]/30 shadow-lg hover:shadow-[#45A29E]/20 hover:border-[#66FCF1]/50 transition-all duration-300"
        />
      </motion.div>
    </div>
  );
}