
'use client';

import { useState, useEffect } from 'react';

const images = [
    { src: '/nollywood.jpg', alt: 'Wishly' },
];

export default function IceBreaker() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-2 my-6 -md:px-0">
          
            <h4 className="text-xs uppercase font-regular  opacity-60">Ice breaker</h4>
            <div className=" space-y-1 my-1 text-base font-light">
                <p>
                   I build interactive digital experiences — from a <a href="https://terminal.sopiriye.xyz"><em>Resume terminal</em></a> to a <a href="#"><em>Feature Flag Platform</em></a>. Currently documenting my journey in tech and creativity at Documenting Nollywood.
                    <span className="inline-flex items-center align-middle ml-1 w-6 h-6 overflow-hidden bg-white/5 relative">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        ))}
                    </span>
                </p>
        
            </div>
        </div>
    );
}
