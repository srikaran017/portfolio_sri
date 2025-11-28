import React from 'react'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'


export default function Navbar(){
const [open, setOpen] = useState(false)
return (
<nav className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-slate-800">
<div className="container-max flex items-center justify-between py-4">
<a href="#home" className="text-xl font-bold tracking-tight">Sri<span className="text-primary">Karan</span></a>
<div className="hidden md:flex gap-6 items-center text-slate-200">
<a href="#about" className="hover:text-primary">About</a>
<a href="#skills" className="hover:text-primary">Skills</a>
<a href="#projects" className="hover:text-primary">Projects</a>
<a href="#experience" className="hover:text-primary">Experience</a>
<a href="#contact" className="px-3 py-1 rounded-md bg-primary text-slate-900 font-medium">Contact</a>
</div>
<button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)} aria-label="menu">
{open ? <FiX size={22}/> : <FiMenu size={22}/>}
</button>
</div>
{open && (
<motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} className="md:hidden bg-black/60 border-t border-slate-800">
<div className="px-6 py-4 flex flex-col gap-3">
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#experience">Experience</a>
<a href="#contact" className="mt-2 inline-block px-3 py-1 rounded-md bg-primary text-slate-900">Contact</a>
</div>
</motion.div>
)}
</nav>
)
}