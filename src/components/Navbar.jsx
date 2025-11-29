import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Sri<span className="text-primary">Karan</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-slate-200 font-medium">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-primary text-blue-500 hover:brightness-110 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white" 
          onClick={() => setOpen(!open)} 
          aria-label="menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black/80 border-t border-slate-700"
        >
          <div className="flex flex-col gap-3 px-6 py-4 text-slate-200 font-medium">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#skills" className="hover:text-primary transition">Skills</a>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="#experience" className="hover:text-primary transition">Experience</a>
            <a href="#contact" className="mt-2 inline-block px-4 py-2 rounded-md bg-primary text-slate-900 hover:brightness-110 transition">
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
