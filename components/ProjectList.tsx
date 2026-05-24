import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        name: "Wishly",
        description: "Create and send premium digital greeting cards.",
        link: "https://wishly.fun"
    },
    {
        name: "Signalhog",
        description: "Real-time communication and signaling platform.",
        link: "https://signalhog-web.vercel.app"
    },
    {
        name: "SnapForge",
        description: " Dashboard and tooling platform for managing workflows and automation.",
        link: "https://snapforge-dashboard.vercel.app"
    }
];

export default function ProjectList() {
    return (
        <div className="mt-10 w-full">
            <h3 className="sectionTitle opacity-60 text-lg my-2 font-bold">Projects</h3>
               <hr className="border-white/20" />
            <div className="grid grid-cols-1 gap-4 mt-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}
