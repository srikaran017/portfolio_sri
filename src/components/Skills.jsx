import React from "react";
import { motion } from "framer-motion";

const skillList = [
  { name: "Angular", level: "Expert" },
  { name: "React", level: "Intermediate" },
  { name: "TypeScript", level: "Good" },
  { name: "JavaScript", level: "Expert" },
  { name: "HTML & CSS", level: "Expert" },
  { name: "System Design", level: "Learning" },
  { name: "Algorithms", level: "Practicing" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      
      {/* Section Title */}
      <h3 className="text-3xl font-semibold mb-6">
        Skills
      </h3>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {skillList.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ scale: 1.03 }}
            className="
              p-5 rounded-xl
              bg-[#161B22]
              border border-white/10
              shadow-[0_0_20px_rgba(0,0,0,0.35)]
              transition
            "
          >
            <h5 className="text-lg font-semibold text-white">{s.name}</h5>
            <p className="text-sm text-[#CBD5E1] mt-2">{s.level}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
