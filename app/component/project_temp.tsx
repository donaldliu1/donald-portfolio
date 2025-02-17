"use client"
import React from 'react';
import Image from 'next/image'

interface ProjectProps {
    name: string;
    img: string;
    focus: string;
    onClick: () => void;
    isSpanVisible: boolean;
}

const Project_temp: React.FC<ProjectProps> = ({ name, img, focus, onClick, isSpanVisible }) => {
    return (
        <button 
            className="relative flex flex-col sm:flex-row w-full max-w-6xl bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-white transition duration-300"
            onClick={onClick}
        >
            <div className="w-full sm:w-1/2 h-56 sm:h-64">
                <Image src={img} alt={name} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-6 text-white">
                {isSpanVisible && (
                    <span className="absolute top-4 right-4 h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                )}
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="font-light text-sm">{focus}</p>
            </div>
        </button>
    );
}

export default Project_temp;
