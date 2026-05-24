import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        name: "Wishly",
        description: "Create and send beautiful story to someone special.",
        link: "https://wishly.fun"
    },
    {
        name: "Signalhog",
        description: "A feature flag and product analytics platform",
        link: "https://signalhog-web.vercel.app"
    },
    {
        name: "SnapForge",
        description: "A screenshot API built for developers who want visual monitoring without the complexity.",
        link: "https://snapforge-dashboard.vercel.app"
    }
];

export default function ProjectList() {
    return (
        <div className="mt-10 w-full">
            <h3 className=" opacity-60 text-xs my-2 px-2 uppercase font-regular">Featurred Projects ({projects.length})</h3>
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
