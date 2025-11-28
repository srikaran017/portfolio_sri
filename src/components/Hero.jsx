import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from "react-icons/fi";

export default function Hero(){
return (
<section id="home" className="py-12">
<div className="md:flex items-center gap-10">
<motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{delay:0.1}} className="flex-1">
<h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Hi, I'm <span className="text-primary">Sri Karan</span></h1>
<p className="mt-4 text-slate-300 max-w-xl">Frontend Engineer specializing in Angular & React. Building scalable UIs and aiming for FAANG/MAANG roles. I craft performant, accessible user interfaces and love solving complex problems.</p>
<div className="mt-6 flex gap-4">
<a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-white font-medium">See Projects <FiArrowRight/></a>
<a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-700">Hire Me</a>
</div>
</motion.div>
<motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{delay:0.2}} className="flex-1 mt-8 md:mt-0">
<div className="w-full h-64 md:h-80 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center border border-slate-700">
<div className="text-center">
<div className="w-28 h-28 rounded-full bg-slate-900 border-2 border-primary mx-auto"></div>
<h3 className="mt-4 font-semibold">UI Engineer • Open to Product Roles</h3>
<p className="text-sm text-slate-400 mt-2">Focusing on React, Angular, performance & system design.</p>
</div>
</div>
</motion.div>
</div>
</section>
)
}