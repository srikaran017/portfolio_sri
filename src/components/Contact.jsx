import React from 'react';
import { FaInstagram, FaWhatsapp,FaGithub,FaEnvelope,FaLinkedin} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
export default function Contact() {
  return (
    <section id="contact" className="py-16">

      {/* Section Title */}
      <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text">
        Contact
      </h3>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-sm hover:shadow-xl transition-all">
          <h4 className="text-xl font-semibold text-blue-500">Get in touch</h4>

          <p className="text-gray-300 mt-4 flex items-center gap-2">
            <FaEnvelope className="text-white"/> 
            <a 
              className="text-primary underline ml-1"
              href="mailto:srikaran017@gmail.com"
            >
              srikaran017@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mt-3 flex items-center gap-2">
            <FaLinkedin className="text-blue-600"/> 
            <a 
              className="text-primary underline"
              href="https://www.linkedin.com/in/sri-karan-32b999237" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/SRIKARAN S
            </a>
          </p>
          <p className="text-gray-300 mt-3 flex items-center gap-2">
            <FaInstagram className="text-pink-500"/> 
            <a 
              className="text-primary underline"
              href="https://www.instagram.com/vibee_with_sri?igsh=MXgweTY4MHZsMGN5&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              SRIKARAN S
            </a>
          </p>

          <p className="text-gray-300 mt-3 flex items-center gap-2">
            <FaWhatsapp className="text-green-500"/> 
            <a 
              className="text-primary underline"
              href="https://wa.me/919361200683" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              +91 9361200683
            </a>
          </p>
         <p className="text-gray-300 mt-3 flex items-center gap-2">
            <FaGithub className="text-white"/> 
            <a 
              className="text-primary underline"
              href="https://github.com/srikaran017" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/SRIKARAN S
            </a>
          </p>
          <p className="text-gray-300 mt-3 flex items-center gap-2">
            <SiLeetcode className="text-yellow-400"/> 
            <a 
              className="text-primary underline"
              href="https://leetcode.com/srikaran017/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              leetcode.com/SRIKARAN S
            </a>
          </p>
          <p className="text-gray-300 mt-3">
            Location: <span className="text-gray-400">Chennai, India</span>
          </p>

          <p className="text-gray-300 mt-3">
            Open to remote roles and relocation for the right opportunity.
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="p-6 rounded-2xl bg-[#0f172a] border border-white/10 shadow-sm hover:shadow-xl transition-all"
          onSubmit={(e) => {
            e.preventDefault();
            window.location = "mailto:srikaran017@gmail.com";
          }}
        >
          <label className="block text-sm text-gray-300 font-medium">
            Name
          </label>
          <input 
            required
            className="w-full mt-2 p-2 rounded bg-transparent border border-white/10 text-gray-200 focus:outline-none focus:border-primary transition"
          />

          <label className="block text-sm mt-4 text-gray-300 font-medium">
            Message
          </label>
          <textarea 
            required
            className="w-full mt-2 p-2 rounded bg-transparent border border-white/10 text-gray-200 h-28 focus:outline-none focus:border-primary transition"
          />

          <button
            type="submit"
            className="mt-6 px-5 py-2.5 rounded-lg bg-primary text-blue-500 font-semibold hover:opacity-90 transition w-full md:w-auto"
          >
            Send
          </button>
        </form>

      </div>
    </section>
  )
}
