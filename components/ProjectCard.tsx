import React from 'react';

interface ProjectCardProps {
    name: string;
    description: string;
    image: string;
    link: string;
}

export default function ProjectCard({ name, description, image, link }: ProjectCardProps) {
    return (
        <a
            className="border border-white/5 p-1 rounded-xl hover:bg-white/5 transition-colors flex items-center"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="size-14 rounded-lg border border-white/5 flex items-center justify-center">
                <img
                    src={image}
                    alt={name}
                    className="w-10 object-contain"
                />
            </div>
            <div className="p-1 text-sm mx-1">
                <h4 className="mt-2">{name}</h4>
                <p className="mt-1 font-light">{description}</p>
            </div>
        </a>
    );
}
