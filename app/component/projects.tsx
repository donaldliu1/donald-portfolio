'use client'
import { useState, useEffect, useRef } from "react";
import Project_temp from "./project_temp";
import Modal from "./modal";
import Image from "next/image";

interface Project {
    name: string;
    img: string;
    focus: string;
    url: string;  
}

export default function Projects() {
    const ref = useRef(null);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project>({ name: '', img: '', focus: '', url: '' }); 
    const [spanVisibility, setSpanVisibility] = useState<{ [key: string]: boolean }>({
        "Portfolio": true,
        "Fauna Green Living": true,
        "PokePull": true
    });

    const handleButtonClick = (name: string, img: string, focus: string, url: string): void => {  
        setSelectedProject({ name, img, focus, url });  
        setIsModalVisible(true);
        setSpanVisibility((prev) => ({ ...prev, [name]: false }));
    };

    const handleClose = (): void => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="projects" ref={ref} className="snap-center flex flex-col items-center bg-background min-h-screen text-textcolour">
            <p className="text-7xl mt-10 mb-6">Projects</p>

            <div className="w-full flex flex-col items-center gap-8 max-w-6xl px-4">
                <Project_temp 
                    name="Portfolio" 
                    img="cat.png" 
                    focus="Tailwind, Next.js, TypeScript" 
                    isSpanVisible={spanVisibility["Portfolio"]}
                    onClick={() => handleButtonClick("Portfolio", "cat.png", "This is a passion project for my online portfolio, starting from complete scratch, my main focus of this project is to learn Tailwind and refine my Typescript while using Next.js, JavaScript and HTML. The purpose of this website is to hopefully give an insight into who I am and have an area where I can tinker and play with code!", "https://www.donaldliu.social/")}
                />
                <Project_temp 
                    name="Fauna Green Living" 
                    img="fgl.png" 
                    focus="Shopify, CI/CD, TypeScript" 
                    isSpanVisible={spanVisibility["Fauna Green Living"]}
                    onClick={() => handleButtonClick("Fauna Green Living", "fgl.png", "For my final project for School of Code we was given a real stakeholder who wanted their e-commerce website to be completely revamped as it was not fit for purpose and had poor UI/UX. The time frame was 4 weeks and within that time we was able to make a custom front-end, greater SEO and a shopify backend for product management.", "https://github.com/oscaroneim/fauna-green-living")}
                />
            </div>

            {isModalVisible && (
                <Modal onClose={handleClose} >
                    <div className="m-4 max-h-screen overflow-y-auto flex justify-center items-center flex-col">
                        <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700"> 
                            <h1 className="text-3xl mb-4 text-center cursor-pointer">{selectedProject.name}</h1>
                        </a>
                        <Image src={selectedProject.img} alt={selectedProject.name} className="mb-4 h-[50%] w-[50%]" />
                        <p className="text-lg text-center text-black">{selectedProject.focus}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
}

