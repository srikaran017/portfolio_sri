import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App(){
return (
  
<div className="min-h-screen">
<Navbar />
<main className="container-max py-12">
<Hero />
<About />
<Skills />
<Projects />
<Experience />
<Contact />
</main>
<Footer />
</div>
)
}