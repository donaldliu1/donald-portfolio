"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const milestones = [
  { id: 1, label: "Childhood", content: "Ever since childhood, I was always drawn towards everything related to technology, always wondering how I could use it, how it worked, and what I could tinker with. I loved experimenting with code, starting with small AutoHotKey scripts to automate tasks and Rainmeter widgets to customise my desktop. There was something incredibly satisfying about finding a problem and coming up with my own solution. Whether that was optimising how it worked, automating it, or just figuring out how it functioned. This curiosity quickly turned into a passion as I always looked for new technology to play with, constantly learning and experimenting." },
  { id: 2, label: "Education", content: "Once I got to college, I studied for a Level 3 Extended Diploma in Software Development at Oldham College. This course helped me gain insight into understanding software development principles. I learned the fundamentals of programming, how to think logically about problem-solving, and how to approach building software. The course also offered a hands-on approach to software development, coding, building projects, and seeing results from my work. At the University of Salford, I studied Physics. I loved tackling problems and approaching them with an analytical mindset. While not a traditional Computer Science degree, it gave me experience working with complex mathematical concepts, interpreting data, and writing scripts to automate calculations. I primarily used Python to help solve equations, model physics problems, and visualise data through plotting. This exposure to programming in a scientific context helped me understand the power of coding beyond just web development, it could be used as a tool for analysis, automation, and problem-solving on a larger scale. My time at university reinforced my love for logic and working with data, ultimately solidifying my passion for technology." },
  { id: 3, label: "After", content: "Due to issues with Student Finance beyond my control, I was unfortunately unable to finish university. I was stuck in a rut, working as a cinema assistant on a zero-hour contract. Feeling like I wasnt being challenged, wasnt learning anything new, saw no progression, and had an untapped passion for tech, I decided to turn my life around. I wanted to get into tech." },
  { id: 4, label: "Bootcamp", content: "Knowing I wanted to fully commit to a career in tech, I enrolled in the School of Code, an intensive 16-week full-time bootcamp designed to mimic real-world development environments. The experience was incredibly fast-paced, requiring me to quickly learn and adapt. Each week we focused on a different area, from frontend development (JavaScript, React, Tailwind CSS) to backend engineering (Node.js, Express, PostgreSQL, Supabase), as well as key industry skills like DevOps, CI/CD, Agile methodologies, and cloud computing (AWS). I worked on an e-commerce website for a real stakeholder. We implemented Agile practices, holding daily stand-ups, iterating on MVPs, using GitHub for version control, and deploying through CI/CD pipelines with Vercel, ESLint, and Snyk." },
  { id: 5, label: "Present", content: "Having built a strong technical foundation through my studies, personal projects, and bootcamp experience, I am now actively looking for my first professional role in tech. I am eager to bring my passion for automation, problem-solving, and continuous learning into a dynamic environment where I can grow, contribute, and refine my skills. I thrive in fast-paced, collaborative settings and am particularly drawn to roles that allow me to work on challenging problems, automate solutions, and build impactful products. My experience working in Agile environments, coupled with my hands-on experience with full-stack development, DevOps, and cloud technologies, gives me confidence that I can hit the ground running." }
];

export default function Timeline() {
  const [selected, setSelected] = useState(milestones[0]);

  return (
    <div className="flex flex-col items-center w-full h-screen">
      {/* Content */}
      <div className="flex-1 flex items-center justify-center w-full px-8">
        <div className="p-6 bg-background text-textcolour rounded-lg shadow-lg w-full max-w-7xl text-center transition-all duration-300 transform scale-100">
          <h2 className="text-4xl font-bold">{selected.label}</h2>
          <p className="mt-2 text-3xl">{selected.content}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative w-4/5 h-1 bg-gray-500"></div>

      {/* Timeline Dots */}
      <div className="relative flex justify-between w-4/5 mt-4 pb-16">
        {milestones.map((milestone) => (
          <motion.div
            key={milestone.id}
            className="relative flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => setSelected(milestone)}
          >
            {/* Dot */}
            <div
              className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                selected.id === milestone.id ? "bg-green-500 scale-125" : "bg-blue-500"
              }`}
            ></div>

            {/* Label */}
            <div className="absolute top-12 text-center">
              <p className="text-sm font-semibold text-white">{milestone.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
