

interface ProjectCardProps {
    name: string;
    description: string;
    link: string;
}

export default function ProjectCard({ name, description, link }: ProjectCardProps) {
    return (
        <div>
            <a
                className="p-1 hover:bg-white/5 transition-colors flex items-center justify-between"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="p-1 text-sm mx-1">
                    <h3 className="mt-2 font-bold">{name}</h3>
                    <p className="mt-1 font-light opacity-60">{description}</p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 shrink-0 opacity-60"
                >
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                </svg>
            </a>
            <hr className="border-white/20" />
        </div>
    );
}
