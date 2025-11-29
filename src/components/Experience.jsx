import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Software Developer',
    org: 'Mindgate Solutions',
    date: 'Apr 2024 - Present',
    desc: [
      'Built and optimized UI modules for Corporate Banking Collection Platform using Angular, TypeScript, NgRx, and RxJS, improving performance and load time by 30%.',
      'Developed and optimized the Payments Module enabling domestic and international fund transfers with automated currency conversion and charge calculations.',
      'Implemented robust validation flows and refactored legacy logic, improving transaction efficiency by 20%.',
      'Built the Cash, Cheque Deposit, and Direct Debit System enabling automated fund collection from corporate accounts.',
      'Implemented scheduled auto-debit logic based on preferred dates and integrated validation workflows to ensure accurate deductions across multiple payment modes.',
      'Integrated RESTful APIs for payment processing and transaction dashboards with secure authentication.',
      'Collaborated in Agile Scrum cycles and contributed to CI/CD pipelines using Jenkins.'
    ]
  },
  //   {
//     title:'Software Engineer',
//     org:'Previous Company',
//     date:'2023 - 2024',
//     desc:'Developed enterprise frontend modules using Angular. Improved UI performance and UX workflows.'
//   }
];




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

                <p className="mt-3 text-slate-300 leading-relaxed">
                    <ul className="list-disc ml-6 mt-3 text-slate-300 space-y-2">
                        {i.desc.map((point, idx) => (
                            <li key={idx} className="leading-relaxed text-left">
                                {point}
                            </li>
                        ))}
                    </ul>
                </p>

          </motion.div>
        ))}
      </div>

    </section>
  )
}
