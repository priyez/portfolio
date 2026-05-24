
'use client';

import React, { useState, useEffect } from 'react';
import Music from './Music';

const images = [
    { src: '/wishly.png', alt: 'Wishly' },
    { src: '/geninvoice.png', alt: 'GenInvoice' },
    { src: '/travel.png', alt: 'Travel' },
    { src: '/accesspay.png', alt: 'AccessPay' }
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
           <h1 className="displayName text-2xl">
          Sopiriye<br/>
          <em className="opacity-60">Jamabo</em>
        </h1>
        <h4 className="text-base uppercase font-regular  opacity-60">Software Engineer</h4>
            <div className="mt-10 space-y-6 text-base font-light">
                <p>
                    I build scalable products & real-world solutions across web, mobile platforms.
                    <span className="inline-flex items-center align-middle ml-1 w-6 h-6 overflow-hidden bg-white/5 relative">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            />
                        ))}
                    </span>
                </p>
                <Music />
              
                <p>
                    Currently Available for collaboration from December.   Drop a mail
                    <span className="inline-flex items-center align-middle">
                        <a
                            href="mailto:sopiriyejamabo@gmail.com"
                            target="_blank"
                            className="text-[#46a758] hover:underline"> @sopiriyejamabo@gmail.com</a>
                    </span>
                </p>
            </div>
        </div>
    );
}
