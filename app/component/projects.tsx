'use client'
import { useState, useEffect, useRef } from "react";
import Project_temp from "./project_temp";
import Modal from "./modal";
import Skills from "./skills";

interface Project {
    name: string;
    img: string;
    focus: string;
    url: string;  
}

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
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
        <div
            id="projects"
            ref={ref}
            className="snap-center flex justify-center items-center bg-background h-screen text-textcolour flex-col"
        >
            <p
                className={`text-7xl my-6 transition-opacity duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
                Projects
            </p>
            <div className=" flex justify-evenly items-center h-full w-full">
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
                    <Project_temp 
                        name="PokePull" 
                        img="pokepull.png" 
                        focus="RESTful API, MongoDB, Mongoose" 
                        isSpanVisible={spanVisibility["PokePull"]}
                        onClick={() => handleButtonClick("PokePull", "pokepull.png", "Passion project to learn more about interacting with RESTful API, MongoDB and Mongoose. I am a big fan of gacha and love the randomness of it combined with my love for Pokemon card packs, the project is to simulate opening a random card pack while also providing users to view their inventory and upgrading cards they have pulled.", "https://github.com/donaldliu1/PokePull")}
                    />
            </div>
            {isModalVisible && (
                <Modal onClose={handleClose} >
                <div className="m-4 max-h-screen overflow-y-auto flex justify-center items-center flex-col">
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700"> 
                        <h1 className="text-3xl mb-4 text-center cursor-pointer">{selectedProject.name}</h1>
                    </a>
                    <img src={selectedProject.img} alt={selectedProject.name} className="mb-4 h-[50%] w-[50%]" />
                    <p className="text-lg text-center text-black">{selectedProject.focus}</p>
                </div>
            </Modal>
            )}
            <Skills/>
            </div>
    );
}
