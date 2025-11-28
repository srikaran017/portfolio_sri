import React from 'react'
import { motion } from 'framer-motion'


const projects = [
{title:'Student App (Stucor-like)', desc:'Xerox delivery, results portal, eBooks, stationery delivery', tech:'React, Node, Vite', link:'#'},
{title:'Portfolio Website', desc:'This site — responsive, performance focused', tech:'React, Tailwind, Framer Motion', link:'#'},
{title:'Corporate Collections UI', desc:'Collection dashboard for fintech', tech:'Angular, Java', link:'#'}
]


export default function Projects(){
return (
<section id="projects" className="py-12">
<h3 className="text-xl font-bold">Selected Projects</h3>
<div className="mt-4 grid md:grid-cols-3 gap-6">
{projects.map(p=> (
<motion.a key={p.title} whileHover={{y:-6}} className="block p-4 bg-slate-800/40 rounded-xl border border-slate-700" href={p.link}>
<h4 className="font-semibold">{p.title}</h4>
<p className="text-sm text-slate-300 mt-2">{p.desc}</p>
<div className="mt-3 text-xs text-slate-400">Tech: {p.tech}</div>
</motion.a>
))}
</div>
<div className="mt-6 text-right">
<a href="#contact" className="px-4 py-2 rounded-md bg-primary text-slate-900">See more on GitHub</a>
</div>
</section>
)
}