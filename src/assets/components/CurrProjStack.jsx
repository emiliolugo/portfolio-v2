export default function ProjectStack() {
    const stack = [
      { name: "Next.js", img: "/next.png" },
      { name: "React", img: "/react.png" },
      { name: "Postgres", img: "/postgres.png" },
    //   { name: "Prisma", img: "/prisma.png" },
    ];
  
    return (
      <div className="flex flex-wrap gap-4">
        {stack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <img src={tech.img} alt={tech.name} className="h-12 w-12 object-contain" />
          </div>
        ))}
      </div>
    );
  }