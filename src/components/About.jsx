import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          p-6 rounded-2xl 
          bg-[#161B22] 
          border border-white/10 
          shadow-[0_0_25px_rgba(0,0,0,0.4)]
        "
      >
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[#F1F5F9]">
          About Me
        </h2>

        {/* Main Description */}
        <p className="mt-3 text-[#CBD5E1] leading-relaxed">
          I’m a <span className="text-[#3B82F6] font-semibold">Frontend Engineer</span>
          with strong Angular expertise and growing React + backend(node.js/java/python) skills.
          I build clean, fast, scalable interfaces with a focus on performance,
          accessibility, and engineering excellence.
        </p>

        {/* Two Column Section */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">

          {/* Highlights Box */}
          <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10">
            <h4 className="text-white font-semibold mb-2">Highlights</h4>
            <ul className="text-[#CBD5E1] list-disc list-inside space-y-1">
              <li>Software Developer @ Mindgate Solutions</li>
              <li>1.5+ years hands-on Angular development</li>
              <li>Preparing for FAANG full-stack roles</li>
            </ul>
          </div>

          {/* What I Bring Box */}
          <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10">
            <h4 className="text-white font-semibold mb-2">What I Bring</h4>
            <p className="text-[#CBD5E1] leading-relaxed">
  Designing and implementing component-driven UI architectures, optimizing performance, ensuring clean and maintainable code, building scalable design systems, and applying strong problem-solving skills to deliver high-quality solutions for top product-based companies.
</p>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
