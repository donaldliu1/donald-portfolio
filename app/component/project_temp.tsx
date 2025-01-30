"use client"
import React from 'react';

interface ProjectProps {
    name: string;
    img: string;
    focus: string;
    onClick: () => void;
    isSpanVisible: boolean;
}

const Project_temp: React.FC<ProjectProps> = ({ name, img, focus, onClick, isSpanVisible }) => {
    return (
        <button className="relative flex flex-col items-center justify-between text-white p-2 border-2 border-transparent rounded-md hover:border-white transition duration-500 h-auto w-72" onClick={onClick}>
    <div className="place-self-center">
        {isSpanVisible && (
            <span className="absolute top-[-4.5px] right-[-0.5px] h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
        )}
        <p className="text-2xl text-textcolour">{name}</p>
        <p className="font-extralight text-sm text-textcolour">{focus}</p>
    </div>

    {/* Wrapping Image in a Container */}
    <div className="w-full">
        <img src={img} alt={name} className="w-full h-auto rounded-md" />
    </div>
</button>

    );
}

export default Project_temp;