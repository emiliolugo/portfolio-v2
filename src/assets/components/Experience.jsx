import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceItem = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md-lg">
      <motion.button
        className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: '#f3f4f6' }}
      >
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-[#45A29E] mr-3">
            <Briefcase size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-black">{experience.role}</h3>
            <a className="text-[#45A29E] font-medium" href={experience.href} target='__blank'
            rel="noopener noreferrer">{experience.company}</a>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05}}
        >
          <ChevronDown className="text-[#C5C6C7]" />
        </motion.div>
      </motion.button>
      
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center mb-3 text-[#C5C6C7]">
            <Calendar size={16} className="mr-2" />
            <span>{experience.period}</span>
          </div>
          
          <div className="flex items-center mb-4 text-gray-600">
            <MapPin size={16} className="mr-2" />
            <span>{experience.location}</span>
          </div>
          
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {experience.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          {experience.technologies && (
            <div className="mt-4">
              <p className="font-medium text-gray-700 mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 text-[#45A29E] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// Main Experience Page Component
export default function ExperiencePage() {
  // Sample experience data
  const experiences = [
    {
      role: "Research Assistant",
      company: "CURB Research Center",
      href: "https://curb.wustl.edu",
      period: "May 2025 - Aug 2025",
      location: "College Station, TX",
      responsibilities: [
        "Conducted data analysis to help with the development of quantitative models for climate change.",
      ],
      technologies: ["Pandas"]
    },
  ];

  return (
    <div className=" mx-auto py-20 px-4 bg-[#151C22] w-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-2 text-white">Professional Experience</h1>
      <p className="text-center text-[#C5C6C7] mb-10">My journey through the tech industry</p>
      
      <div className="space-y-6 max-w-xl">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}