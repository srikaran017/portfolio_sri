import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);        // mobile menu open
  const [hidden, setHidden] = useState(false);    // hide navbar on scroll
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setHidden(true);  // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`w-full sticky top-0 z-50 backdrop-blur-md bg-gray-900 border-b rounded-2xl transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Sri<span className="text-cyan-400">Karan</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-slate-200 font-medium">
          {['about','skills','projects','experience'].map((section) => (
            <a key={section} href={`#${section}`} className="hover:text-cyan-400 transition">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
                  <a
                      href="https://drive.google.com/file/d/1-tg9ecKtNyCsi68XWWwSxwXOyB4on9ny/view?usp=sharing"
                      download
                      className="px-4 py-2 rounded-md bg-green-500 text-white font-medium hover:bg-green-600 transition"
                  >
                      Download Resume
                  </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-cyan-400 text-gray-900 hover:brightness-110 transition"
          >
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
          className="md:hidden bg-gray-900/95 border-t border-slate-700"
        >
          <div className="flex flex-col gap-3 px-6 py-4 text-slate-200 font-medium">
            {['about','skills','projects','experience'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="hover:text-cyan-400 transition"
                onClick={() => setOpen(false)} // close mobile menu when link clicked
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <a
                          href="https://drive.google.com/file/d/1-tg9ecKtNyCsi68XWWwSxwXOyB4on9ny/view?usp=sharing"
                          download
                          className="px-4 py-2 rounded-md bg-green-500 text-white font-medium hover:bg-green-600 transition"
                      >
                          Download Resume
            </a>
            <a
              href="#contact"
              className="mt-2 inline-block px-4 py-2 rounded-md bg-cyan-400 text-gray-900 hover:brightness-110 transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
