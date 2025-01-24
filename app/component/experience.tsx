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
        <div id="experience" ref={ref} className="snap-center bg-secondary h-screen text-textcolour flex flex-col">
            <p className={`flex justify-center text-7xl my-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                Experience
            </p>
        </div>
    );
}
