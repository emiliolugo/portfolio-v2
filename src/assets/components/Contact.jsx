export default function ContactPage(){
    const socials = [
        
        {name: "linkedin", href: "https://linkedin.com/in/emiliolugog"},
        {name: "email", href: "mailto:emilio23lugo@gmail.com"},
        {name: "github", href: "https://github.com/emiliolugo"},
        {name: "leetcode", href: "https://leetcode.com/u/emiliolugo/"}
    ]
    return(
        <div className="h-screen flex flex-col md:items-start md:justify-between justify-around md:p-40 p-10">
            <div className="md:w-[30%]">
            <h2 className="text-white text-4xl md:text-6xl text-white mt-20 font-bold  text-shadow-md mb-5">Reach <span className="text-[#66FCF1]">Out</span></h2>
            <p className="text-[#C5C6C7] md:text-xl">I'm available for collaborations or discussing freelance jobs! Just contact me below, or see my profiles.</p>
            </div>
            
            <div>
                {socials.map((social)=>{
                    return(
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white md:text-2xl flex hover:text-[#66FCF1] transition duration-300 font-mono">
                            {social.name}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}