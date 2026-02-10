import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Individual Experience Card Component - Modular and reusable
const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  const [currentResponsibility, setCurrentResponsibility] = useState(0);

  const handleNext = () => {
    setCurrentResponsibility((prev) =>
      prev < experience.responsibilities.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setCurrentResponsibility((prev) => prev > 0 ? prev - 1 : prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Desktop Layout - Timeline with alternating sides */}
      <div className="hidden md:block">
        <div className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
          {/* Content Card */}
          <div className={`w-5/12 ${isEven ? 'text-right' : 'text-left'}`}>
            <motion.div
              whileHover={{ scale: 1.02, translateY: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#1F2833] to-[#151C22] p-6 rounded-lg border border-[#45A29E]/30 shadow-lg hover:shadow-[#45A29E]/20 hover:border-[#66FCF1]/50 transition-all duration-300"
            >
              {/* Company and Role */}
              <div className={`mb-4 ${isEven ? 'items-end' : 'items-start'} flex flex-col`}>
                <h3 className="text-2xl font-bold text-white mb-1">{experience.role}</h3>
                <a
                  href={experience.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#66FCF1] hover:text-[#45A29E] transition-colors duration-300 flex items-center gap-1 font-medium"
                >
                  {experience.company}
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Date and Location */}
              <div className={`flex ${isEven ? 'justify-end' : 'justify-start'} gap-4 mb-4 text-[#C5C6C7] text-sm`}>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{experience.location}</span>
                </div>
              </div>

              {/* Responsibilities - Accordion */}
              <div className={`mb-4 ${isEven ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center gap-3 justify-between">
                  <button
                    onClick={handlePrev}
                    disabled={currentResponsibility === 0}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      currentResponsibility === 0
                        ? 'text-[#45A29E]/30 cursor-not-allowed'
                        : 'text-[#66FCF1] hover:bg-[#45A29E]/20 hover:scale-110'
                    }`}
                    aria-label="Previous responsibility"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <motion.div
                    key={currentResponsibility}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 text-[#C5C6C7] leading-relaxed"
                  >
                    <span className="text-[#66FCF1]">{isEven ? '← ' : '→ '}</span>
                    {experience.responsibilities[currentResponsibility]}
                  </motion.div>

                  <button
                    onClick={handleNext}
                    disabled={currentResponsibility === experience.responsibilities.length - 1}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      currentResponsibility === experience.responsibilities.length - 1
                        ? 'text-[#45A29E]/30 cursor-not-allowed'
                        : 'text-[#66FCF1] hover:bg-[#45A29E]/20 hover:scale-110'
                    }`}
                    aria-label="Next responsibility"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Progress indicator */}
                <div className={`mt-3 flex items-center gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
                  {experience.responsibilities.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentResponsibility
                          ? 'w-8 bg-[#66FCF1]'
                          : 'w-1.5 bg-[#45A29E]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Technologies */}
              {experience.technologies && (
                <div className={`flex ${isEven ? 'justify-end' : 'justify-start'} flex-wrap gap-2`}>
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#45A29E]/20 text-[#66FCF1] rounded-full text-xs font-medium border border-[#45A29E]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Timeline Center Point */}
          <div className="w-2/12 flex justify-center">
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="w-4 h-4 bg-[#66FCF1] rounded-full border-4 border-[#151C22] z-10 relative shadow-lg shadow-[#66FCF1]/50"
              />
            </div>
          </div>

          {/* Empty Space on Other Side */}
          <div className="w-5/12" />
        </div>
      </div>

      {/* Mobile Layout - Stacked cards */}
      <div className="md:hidden">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-[#1F2833] to-[#151C22] p-5 rounded-lg border border-[#45A29E]/30 shadow-lg mb-6"
        >
          {/* Company and Role */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
            <a
              href={experience.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#66FCF1] hover:text-[#45A29E] transition-colors duration-300 flex items-center gap-1 font-medium text-sm"
            >
              {experience.company}
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Date and Location */}
          <div className="flex flex-wrap gap-3 mb-4 text-[#C5C6C7] text-xs">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Responsibilities - Accordion */}
          <div className="mb-4">
            <div className="flex items-center gap-3 justify-between">
              <button
                onClick={handlePrev}
                disabled={currentResponsibility === 0}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentResponsibility === 0
                    ? 'text-[#45A29E]/30 cursor-not-allowed'
                    : 'text-[#66FCF1] hover:bg-[#45A29E]/20 hover:scale-110'
                }`}
                aria-label="Previous responsibility"
              >
                <ChevronLeft size={18} />
              </button>

              <motion.div
                key={currentResponsibility}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex-1 text-[#C5C6C7] leading-relaxed text-sm"
              >
                <span className="text-[#66FCF1]">→ </span>
                {experience.responsibilities[currentResponsibility]}
              </motion.div>

              <button
                onClick={handleNext}
                disabled={currentResponsibility === experience.responsibilities.length - 1}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentResponsibility === experience.responsibilities.length - 1
                    ? 'text-[#45A29E]/30 cursor-not-allowed'
                    : 'text-[#66FCF1] hover:bg-[#45A29E]/20 hover:scale-110'
                }`}
                aria-label="Next responsibility"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Progress indicator */}
            <div className="mt-3 flex items-center gap-2 justify-center">
              {experience.responsibilities.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentResponsibility
                      ? 'w-8 bg-[#66FCF1]'
                      : 'w-1.5 bg-[#45A29E]/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Technologies */}
          {experience.technologies && (
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-[#45A29E]/20 text-[#66FCF1] rounded-full text-xs font-medium border border-[#45A29E]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Experience Page Component
export default function ExperiencePage() {
  // Experience data - easily add new experiences here
  const experiences = [
    {
      role: "Software Engineering Research Intern",
      company: "CURB Research Center",
      href: "https://curb.wustl.edu",
      period: "May 2025 - Aug 2025",
      location: "College Station, TX",
      responsibilities: [
        "Developed and implemented a backend SQL schema to store 30+ techno-economic analyses",
        "Joined SQL database with frontend Tkinter GUI, streamlining use of the application for 3+ researchers at CURB",
        "Spearheaded financial engine development using pandas and NumPy, enabling researchers to decrease TEA compilation time from days to minutes."

      ],
      technologies: ["Python","Pandas","Numpy","SciPy","SQL"]
    },
    {
      role: "AI and LLM Trainer for SWE",
      company: "Data Annotation Tech",
      href: "https://www.dataannotation.tech/",
      period: "May 2025 - Present",
      location: "Remote",
      responsibilities: [
        "Corrects and debugs LLM programming performance in Java, Python, TypeScript and SQL",
        "Trained the LLMs on 15+ file codebases in Python, Java, TypeScript and JavaScript"
      ],
      technologies: ["TypeScript", "Next.js", "Python", "SQL"]
    },
    {
      role: "Undergraduate Instructor",
      company: "Indiana University CS Department",
      href: "https://luddy.indiana.edu/index.html",
      period: "Jan 2025 - May 2025",
      location: "Bloomington, IN",
      responsibilities: [
        "Instructed a cohort of 35+ students in a lab about Java topics like OOP, Collections, and JUnit Testing",
        "Hosted weekly office hours, assisting 220+ students with questions about Java programming"
      ],
      technologies: ["Java", "JUnit"]
    },
  ];

  return (
    <div className="min-h-screen bg-[#151C22] py-20 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Code2 className="text-[#66FCF1]" size={32} />
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Professional <span className="text-[#66FCF1]">Experience</span>
          </h1>
        </div>
        <p className="text-[#C5C6C7] text-base md:text-lg">My journey through the tech industry</p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line - Desktop Only */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#66FCF1] via-[#45A29E] to-[#66FCF1] opacity-30" />

        {/* Experience Cards */}
        <div className="space-y-12 md:space-y-20">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 h-1 bg-gradient-to-r from-transparent via-[#66FCF1] to-transparent mx-auto max-w-md"
      />
    </div>
  );
}
