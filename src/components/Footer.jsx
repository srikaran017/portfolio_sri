import React from 'react'


export default function Footer(){
return (
<footer className="border-t border-slate-800 py-6 mt-12">
<div className="container-max text-center text-slate-400">
© {new Date().getFullYear()} Sri Karan — Built with React & Tailwind. | <a href="https://github.com/srikaran017" className="text-primary">GitHub</a>
</div>
</footer>
)
}