'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="about" ref={ref} className="snap-center bg-secondary h-screen text-textcolour flex flex-col">
            <p className={`flex justify-center text-7xl my-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                About me
            </p>
            <div className="flex flex-col h-full text-2xl place-content-between mx-48">
                
                {/* First About Section */}
                <div className="relative flex py-8 items-center">
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <Image 
                            src="/about1.webp"
                            width={200}
                            height={200}
                            alt="picture of cat :3"
                        />
                    </div>
                    <p className={`transition-all duration-700 px-10 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                    My passion for coding started when I was younger, creating and automating AutoHotKey scripts for my games and using Rainmeter to create custom desktop widgets. This early interest led me to study Level 3 Software Development in college and dabble with Python while I studied Physics at the University of Salford. Due to circumstances beyond my control, I was unable to continue my higher education and took up a role as a cinema assistant.
                    </p>
                </div>
                
                {/* Second About Section */}
                <div className="relative flex py-8 items-center">
                    <p className={`transition-all duration-700 px-10 ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-10"}`}>
                    Feeling unfulfilled in my role and eager to learn something new and exciting, I looked for more meaningful direction. That&#39;s when I came across the School of Code bootcamp - a 16-week intensive programme that not only focused on teaching coding but also getting us used to real-world environments. We practiced pair programming, adopted agile methodologies, and engaged in daily standups, hackathons, and creating and sticking to MVPs. I thrived in this fast-paced environment, and for my final project, I worked with a real stakeholder to revamp an e-commerce website, which is set to go live soon.
                    </p>
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                        <Image 
                            src="/about2.webp"
                            width={200}
                            height={200}
                            alt="picture of cat :3"
                        />
                    </div>
                </div>
                
                {/* Third About Section */}
                <div className="relative flex py-8 items-center">
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <Image 
                            src="/about3.webp"
                            width={200}
                            height={200}
                            alt="picture of cat :3"
                        />
                    </div>
                    <p className={`transition-all duration-700 px-10 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                    After completing the School of Code, I am excited to continue my journey of learning and growing in the world of technology. I am eager to secure my first role as a junior software developer. In the meantime, I am continuously refining my skills by working on passion projects that align with my interests, allowing me to stay sharp and expand my knowledge in all things tech-related.
                    </p>
                </div>
            </div>
        </div>
    );
}
