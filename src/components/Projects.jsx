import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
        title: 'Trading Workflow & Commission System',
        desc: 'Developed a secure platform for monitoring trades, processing commissions, and supporting mediator operations with admin and customer portal.',
        tech: 'React • Node.js',
        link: 'https://www.masterstroke.me/'
    },
    {
        title: 'Nordixone App (Startup-company)',
        desc: 'Enterprise Applications • Staff Augmentation • Application Development Support • Services',
        tech: 'React • Node.js',
        link: 'https://www.nordixone.com/'
    },
    {
        title: 'Makeup Artist Website',
        desc: 'A visually elegant website showcasing a makeup artist’s portfolio, services, and client experiences.',
        tech: 'Next.js',
        link: '#'
    },
    ]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text">
        Featured Projects
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <motion.a
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group block p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-primary transition-all shadow-sm hover:shadow-xl"
            href={p.link}
          >
            <h4 className="text-lg font-semibold group-hover:text-primary transition text-blue-500">
              {p.title}
            </h4>

            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              {p.desc}
            </p>

            <div className="mt-4 text-xs font-medium text-gray-400">
              <span className="text-primary">Tech Stack:</span> {p.tech}
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-10 text-center md:text-right">
        <a
          href="#contact"
          className="inline-block px-5 py-2.5 rounded-lg bg-primary text-black font-semibold hover:opacity-90 transition"
        >
          See more on GitHub
        </a>
      </div>
    </section>
  )
}
