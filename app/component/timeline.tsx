"use client";

import { motion } from "framer-motion";

const milestones = [
  { id: 1, label: "Childhood" },
  { id: 2, label: "College" },
  { id: 3, label: "University" },
  { id: 4, label: "Bootcamp" },
  { id: 5, label: "Present" },
];

export default function Timeline() {
  return (
    <div className="relative w-full flex items-center justify-center py-16 mt-auto">
      {/* Timeline Line */}
      <div className="absolute top-1/2 w-4/5 h-1 bg-gray-500 transform -translate-y-1/2"></div>

      {/* Timeline Dots */}
      <div className="relative flex justify-between w-4/5">
        {milestones.map((milestone) => (
          <motion.div
            key={milestone.id}
            className="relative flex flex-col items-center"
            whileHover={{ scale: 1.2 }}
          >
            {/* Dot */}
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

            {/* Label & Description */}
            <div className="absolute top-12 text-center">
              <p className="text-sm font-semibold text-white">{milestone.label}</p>
              <p className="text-xs text-gray-300">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
