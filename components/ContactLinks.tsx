import React from 'react';

export default function ContactLinks() {
    return (
        <div className="flex opacity-60 px-2 md:px-0 items-center space-x-6 mt-10">
            <a
                href="mailto:sopiriyejamabo@gmail.com"
                target="_blank"
                className="underline hover:text-[#46a758] transition-colors flex items-center gap-x-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Drop a mail
            </a>
            <a
                href="https://github.com/priyez"
                target="_blank"
                className="underline hover:text-[#46a758] transition-colors flex items-center gap-x-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 3v12" />
                    <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M15 6a9 9 0 0 0-9 9" />
                    <path d="M18 15v6" />
                    <path d="M21 18h-6" />
                </svg>
                GitHub
            </a>
        </div>
    );
}
