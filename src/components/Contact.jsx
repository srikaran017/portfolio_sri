import React from 'react'


export default function Contact(){
return (
<section id="contact" className="py-12">
<h3 className="text-xl font-bold">Contact</h3>
<div className="mt-4 grid md:grid-cols-2 gap-6">
<div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
<h4 className="font-semibold">Get in touch</h4>
<p className="text-slate-300 mt-2">Email: <a className="text-primary" href="mailto:your-email@example.com">your-email@example.com</a></p>
<p className="text-slate-300 mt-2">Location: Chennai, India</p>
<p className="text-slate-300 mt-2">Open to remote and relocation for the right role.</p>
</div>
<form className="p-6 bg-slate-800/30 rounded-xl border border-slate-700" onSubmit={(e)=>{e.preventDefault(); window.location = 'mailto:your-email@example.com';}}>
<label className="block text-sm">Name</label>
<input required className="w-full mt-2 p-2 rounded bg-transparent border border-slate-700" />
<label className="block text-sm mt-4">Message</label>
<textarea required className="w-full mt-2 p-2 rounded bg-transparent border border-slate-700 h-28" />
<button type="submit" className="mt-4 px-4 py-2 rounded-md bg-primary text-slate-900">Send</button>
</form>
</div>
</section>
)
}