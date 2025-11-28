import React from 'react'
import { motion } from 'framer-motion'


const skillList = [
{name:'Angular', level:'Expert'},
{name:'React', level:'Intermediate'},
{name:'TypeScript', level:'Good'},
{name:'JavaScript', level:'Expert'},
{name:'HTML & CSS', level:'Expert'},
{name:'System Design', level:'Learning'},
{name:'Algorithms', level:'Practicing'},
]


export default function Skills(){
return (
<section id="skills" className="py-12">
<h3 className="text-xl font-bold">Skills</h3>
<motion.div initial={{opacity:0}} animate={{opacity:1}} className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
{skillList.map(s=> (
<div key={s.name} className="p-4 bg-slate-800/40 rounded-xl border border-slate-700">
<h5 className="font-semibold">{s.name}</h5>
<p className="text-sm text-slate-300 mt-2">{s.level}</p>
</div>
))}
</motion.div>
</section>
)
}