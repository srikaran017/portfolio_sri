import React from 'react'
import { motion } from 'framer-motion'


export default function About(){
return (
<section id="about" className="py-12">
<motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="bg-slate-800/40 p-6 rounded-2xl">
<h2 className="text-2xl font-bold">About me</h2>
<p className="mt-3 text-slate-300">I’m a Frontend engineer with strong Angular experience and growing React + backend skills. I love building clean, accessible interfaces and preparing for large-scale system design. Currently focused on performance optimization, component architecture, and interview readiness for FAANG/MAANG roles.</p>
<div className="mt-4 grid md:grid-cols-2 gap-4">
<div>
<h4 className="font-semibold">Highlights</h4>
<ul className="mt-2 text-slate-300 list-disc list-inside">
<li>Associate Director of UI Core Architecture at Fitch Group</li>
<li>1+ years in Angular, building product-ready components</li>
<li>Open to frontend/product-engineer roles at top tech companies</li>
</ul>
</div>
<div>
<h4 className="font-semibold">What I bring</h4>
<p className="mt-2 text-slate-300">Component-driven design, performance-first thinking, and practical knowledge of coding interview patterns. I focus on clean code, testing, and system thinking.</p>
</div>
</div>
</motion.div>
</section>
)
}