import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, ExternalLink, Cpu, Mail } from 'lucide-react';

// Custom WhatsApp SVG Icon to ensure perfect brand matching
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function App() {
  const [text, setText] = useState('');
  const fullText = "Brighto G";

  // Typewriter effect for the header
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-yellow-500/30 selection:text-white pb-12">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-yellow-500 font-mono font-bold text-xl">
          &gt; {text}<span className="animate-pulse">_</span>
        </div>
        <div className="space-x-6 hidden md:flex items-center">
          <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
          <a href="#stack" className="hover:text-yellow-500 transition">Stack</a>
          <a href="#contact" className="border border-yellow-500/50 px-5 py-2 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition font-medium">
            Connect
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        {/* Hero Section */}
        <section className="mb-32">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Building the <span className="text-yellow-500">Future</span><br className="hidden md:block" /> of the Web.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-400 leading-relaxed mb-8">
            Full-stack Developer based in Nigeria. Specializing in <span className="text-white font-medium">Next.js</span>, 
            <span className="text-white font-medium"> Node.js</span>, and <span className="text-white font-medium">Supabase</span>. 
            Currently focused on building Micro-SaaS and developer tools.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition border border-gray-700">
              Get in Touch
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Selected Works</h2>
            <div className="h-[1px] flex-1 bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1: ShellSignal */}
            <div className="group border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition bg-gray-900/30 hover:bg-gray-900/60 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Terminal className="text-yellow-500" size={28} />
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/brighto7700/shell-signal" className="text-gray-400 hover:text-white transition"><Github size={22} /></a>
                  <a href="https://shellsignal.vercel.app" className="text-gray-400 hover:text-white transition"><ExternalLink size={22} /></a>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">ShellSignal</h3>
              <p className="text-gray-400 mb-6 flex-grow">A real-time news dashboard for developers. Curating the best of tech directly to your terminal-style UI.</p>
              <div className="flex gap-2 flex-wrap mt-auto">
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-xs font-medium">Next.js</span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-xs font-medium">Tailwind</span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-xs font-medium">API</span>
              </div>
            </div>

            {/* Project 2: CodeBot */}
            <div className="group border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition bg-gray-900/30 hover:bg-gray-900/60 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Cpu className="text-yellow-500" size={28} />
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition"><Github size={22} /></a>
                  <a href="https://telegram.com/teexy_bot" className="text-gray-400 hover:text-white transition"><ExternalLink size={22} /></a>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">CodeBot</h3>
              <p className="text-gray-400 mb-6 flex-grow">An AI-powered Telegram assistant built with Python and the Groq API, deployed on Render for maximum uptime.</p>
              <div className="flex gap-2 flex-wrap mt-auto">
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-xs font-medium">Python</span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-xs font-medium">Groq API</span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-xs font-medium">Render</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Stack Section */}
        <section id="stack" className="mb-32">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">The Tech Stack</h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {['Next.js', 'React', 'Node.js', 'Supabase', 'PostgreSQL', 'Python', 'Tailwind CSS', 'Git & GitHub'].map((tech) => (
                <div key={tech} className="bg-gray-900/40 border border-gray-800 p-4 text-center rounded-xl hover:bg-gray-800 hover:border-gray-700 transition cursor-default font-medium text-gray-300 hover:text-yellow-500">
                  {tech}
                </div>
              ))}
           </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20 bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Something.</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            I'm currently open for new opportunities. Whether you have a question or just want to chat code, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            
            <a 
              href="mailto:brighto7700@gmail.com" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] hover:-translate-y-1"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>

            {/* New WhatsApp Button */}
            <a 
              href="https://wa.me/2348153765443" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 hover:border-[#25D366]/60 font-semibold rounded-xl transition hover:-translate-y-1"
            >
              <WhatsAppIcon size={20} />
              <span>WhatsApp</span>
            </a>
            
            <a 
              href="https://github.com/brighto7700" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition border border-gray-700 hover:border-gray-500 hover:-translate-y-1"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] border border-[#0A66C2]/30 hover:border-[#0A66C2]/60 font-semibold rounded-xl transition hover:-translate-y-1"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/60 pt-8 pb-4 text-center px-6">
        <div className="flex justify-center items-center gap-6 text-gray-500 mb-6">
          <a href="https://wa.me/2348153765443" className="hover:text-[#25D366] transition" title="WhatsApp">
            <WhatsAppIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-yellow-500 transition" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/brighto7700" className="hover:text-yellow-500 transition" title="GitHub">
            <Github size={20} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          Designed & Built by <span className="text-gray-300">Bright Emmanuel</span>
        </p>
        <p className="text-gray-600 text-xs mt-2">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}


    
