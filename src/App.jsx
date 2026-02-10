import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css';
import HeroPage from './assets/components/Hero';
import CurrentProjectPage from './assets/components/CurrProject';
import ProjectsPage from './assets/components/Projects';
import ContactPage from './assets/components/Contact';
import ExperiencePage from './assets/components/Experience';
import LoaderPage from './assets/components/Loader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minLoaderTime = 1500;
    const startTime = Date.now();
    
    const finishLoading = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minLoaderTime) {
        const remainingTime = minLoaderTime - elapsedTime;
        setTimeout(() => setIsLoading(false), remainingTime);
      } else {
        setIsLoading(false);
      }
    };

    window.addEventListener('load', finishLoading);
    
    const backupTimer = setTimeout(() => {
      finishLoading();
    }, 3000); 

    return () => {
      window.removeEventListener('load', finishLoading);
      clearTimeout(backupTimer);
    };
  }, []);

  return (
    <div className='bg-[#151C22]'>
      <AnimatePresence mode="wait">
        {isLoading && <LoaderPage key="page-loader" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5, duration: 1 }}

      >
          <HeroPage />
          <ExperiencePage />

          <CurrentProjectPage />
          <ProjectsPage />
          <ContactPage />
        </motion.div>
      )}
    </div>
  );
}