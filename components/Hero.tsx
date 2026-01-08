import React from 'react';

export default function Hero() {
    return (
        <div>
            <h1 className="text-xl lg:mt-4 flex items-center space-x-4">
                Hello, I am Sopiriye.
            </h1>
            <div className="mt-10 space-y-6 text-lg font-light">
                <p>
                    {" "}
                    {/* */}A developer based in Nigeria, focused on creating memorable digital experience  &  solving problems by building impactful software.
                </p>
                <p>
                    Working with start ups & organisations in West Africa & USA such as{/* */}{" "}
                    <span className="text-[#46a758]  hover:underline">
                        SAVVILY, DAP
                    </span>
                    . & more{" "}
                    <a
                        href="https://terminal.sopiriye.xyz/"
                        target="_blank"
                        className="text-[#46a758] hover:underline"
                    >
                        {"< Resume Terminal/>"}
                    </a>
                </p>
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
