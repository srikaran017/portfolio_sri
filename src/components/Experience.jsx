import React from 'react'
import { motion } from 'framer-motion'


const items = [
{title:'Associate Director, UI Core Architecture', org:'Fitch Group', date:'2025 - Present', desc:'Leading UI platform and component architecture.'},
{title:'Software Engineer', org:'Previous Company', date:'2023 - 2024', desc:'Worked on frontend features with Angular.'}
]


export default function Experience(){
return (
<section id="experience" className="py-12">
<h3 className="text-xl font-bold">Experience</h3>
<div className="mt-4 space-y-4">
{items.map(i=> (
<motion.div key={i.title} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700">
<div className="flex items-center justify-between">
<div>
<h4 className="font-semibold">{i.title}</h4>
<div className="text-sm text-slate-400">{i.org} • {i.date}</div>
</div>
</div>
<p className="mt-2 text-slate-300">{i.desc}</p>
</motion.div>
))}
</div>
</section>
)
}