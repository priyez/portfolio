import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        name: "Wishly",
        description: "Create and send premium digital greeting cards.",
        image: "/wishly.png",
        link: "https://wishly.fun"
    },
    {
        name: "Gen Invoice",
        description: "AI-powered invoicing platform designed for freelancers and creative agencies",
        image: "/geninvoice.png",
        link: "https://www.geninvoice.online"
    },
    {
        name: "Accesspay",
        description: "A fintech app to pay utility bills, manage subscriptions, play game and earn.",
        image: "/accesspay.png",
        link: "https://accesspay.com.ng/"
    }
];

export default function ProjectList() {
    return (
        <div className="mt-10 w-full">
            <h3 className="text-lg">Projects</h3>
            <div className="grid grid-cols-1 gap-4 mt-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}
