import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title:'Associate Director, UI Core Architecture',
    org:'Fitch Group',
    date:'2025 - Present',
    desc:'Leading UI platform architecture, reusable component systems, and performance engineering.'
  },
  {
    title:'Software Engineer',
    org:'Previous Company',
    date:'2023 - 2024',
    desc:'Developed enterprise frontend modules using Angular. Improved UI performance and UX workflows.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      
      <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text">
        Experience
      </h3>

      <div className="space-y-8">
        {items.map((i, index) => (
          <motion.div
            key={i.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="text-lg font-semibold text-blue-500">
                {i.title}
              </h4>
              <span className="text-sm text-gray-400">
                {i.date}
              </span>
            </div>

            <p className="text-sm text-gray-300 mt-1 font-medium">
              {i.org}
            </p>

            <p className="mt-3 text-gray-300 leading-relaxed">
              {i.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
