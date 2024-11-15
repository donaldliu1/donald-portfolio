'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Experience() {
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
        <div id="experience" ref={ref} className="snap-center flex justify-center items-center bg-secondary h-screen text-textcolour flex-col">
            <p className={`flex justify-center text-7xl my-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                Experience
            </p>
            <div className="flex flex-col h-full text-2xl place-content-center mx-48">
                
                {/* School of Code Section */}
                <div className="relative flex py-8 items-center">
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <Image 
                            src="/schoolofcode.png"
                            width={200}
                            height={200}
                            alt="School of Code logo"
                        />
                    </div>
                    <div className={`px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                        <p className="text-center py-4">School of Code</p>
                        <p>Intense 16 week coding bootcamp with real world experience, learning at an incredibly fast pace and creative problem solving. Each was an &#35;intern week&#35; where we would mimic a certain role within the tech industry such as fronend engineer, backend engineer, QA engineer etc. We would have the start of the week learning the core concept and making mini projects, towards the end of the week we would do our weekly hackathon, creating MVPs, using pair programming and agile methodology to create a project and present it to others.</p>
                    </div>
                </div>
                
                {/* Fauna Green Living Section */}
                <div className="relative flex py-8 items-center">
                    <div className={`px-6 transition-all duration-700 ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <p className="text-center py-4">Fauna Green Living</p>
                        <p>For my final project for School of Code we was given a real stakeholder who wanted their e-commerce website to be completely revamped as it was not fit for purpose and had poor UI/UX. The time frame was 4 weeks and within that time we was able to make a custom front-end, greater SEO and a shopify backend for product management.</p>
                    </div>
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                        <Image 
                            src="/fgl.png"
                            width={200}
                            height={200}
                            alt="Fauna Green Living logo"
                        />
                    </div>
                </div>
            </div>   
        </div>
    );
}
