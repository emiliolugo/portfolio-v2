import { motion } from 'framer-motion';

export default function ProjectStack() {
    const stack = [
      { name: "Next.js", img: "/next.png" },
      { name: "React", img: "/react.png" },
      { name: "Postgres", img: "/postgres.png" },
      // { name: "Prisma", img: "/prisma.png" },
    ];

    return (
      <div className="flex flex-wrap gap-4">
        {stack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center p-2 rounded-lg bg-gradient-to-br from-[#1F2833] to-[#151C22] border border-[#45A29E]/30 shadow-lg hover:shadow-[#45A29E]/20 hover:border-[#66FCF1]/50 transition-all duration-300"
            whileHover={{ scale: 1.1, translateY: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <img src={tech.img} alt={tech.name} className="h-12 w-12 object-contain" />
          </motion.div>
        ))}
      </div>
    );
  }