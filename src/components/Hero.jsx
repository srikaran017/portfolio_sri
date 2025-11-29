import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 px-4 bg-gray-900 rounded-2xl"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-16">

        {/* TEXT AREA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-blue-500">Sri Karan</span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-xl mx-auto md:mx-0 text-lg">
            Frontend Engineer specializing in{" "}
            <span className="font-semibold text-white">Angular & React</span>.  
            I build scalable, performant & beautiful interfaces.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
            >
              See Projects <FiArrowRight />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-500 text-gray-200 font-medium hover:bg-gray-800 transition"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* PROFILE IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <div className="
            w-64 h-64 md:w-80 md:h-80 
            rounded-3xl border-2 border-blue-600 
            bg-gray-800 shadow-[0_0_30px_rgba(0,120,255,0.3)]
            flex items-center justify-center
          ">
            <div className="
              w-32 h-32 md:w-40 md:h-40 
              rounded-full border-2 border-blue-500 
              bg-gray-900 flex items-center justify-center
            ">
              <span className="text-white font-bold text-2xl md:text-3xl">SK</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
