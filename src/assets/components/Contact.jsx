import { motion } from 'framer-motion';

export default function ContactPage() {
    const socials = [
        {name: "linkedin", href: "https://linkedin.com/in/emiliolugog"},
        {name: "email", href: "mailto:emilio23lugo@gmail.com"},
        {name: "github", href: "https://github.com/emiliolugo"},
        {name: "leetcode", href: "https://leetcode.com/u/emiliolugo/"}
    ];

    return (
        <div className="min-h-screen flex flex-col items-start justify-between md:p-20 lg:p-40 p-8 sm:p-10">
            {/* Header Section - Responsive sizing */}
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5">
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-shadow-md mb-5 md:mb-8 mt-10 md:mt-20">
                    Reach <span className="text-[#66FCF1]">Out</span>
                </h2>
            </div>

            {/* Socials Section - Responsive layout */}
            <div className="w-full md:w-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-3 md:gap-4">
                    {socials.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl
                                     flex items-center hover:text-[#66FCF1]
                                     transition-all duration-300 font-mono
                                     p-3 md:p-4 rounded-lg
                                     bg-gradient-to-br from-[#1F2833] to-[#151C22]
                                     border border-[#45A29E]/30 hover:border-[#66FCF1]/50
                                     shadow-lg hover:shadow-[#45A29E]/20"
                            whileHover={{ scale: 1.02, translateY: -5 }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {social.name}
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
