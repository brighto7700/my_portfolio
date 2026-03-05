import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Terminal, Github, Linkedin, ExternalLink, Cpu, Mail, BookOpen, Award, ArrowRight, User, Trophy } from 'lucide-react';
import './globals.css';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function App() {
  const [text, setText] = useState('');
  const fullText = "Brighto G";

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
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-yellow-500/30 selection:text-white pb-12 overflow-x-hidden">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-900">
        <div className="text-yellow-500 font-mono font-bold text-xl">
          &gt; {text}<span className="animate-pulse">_</span>
        </div>
        <div className="space-x-6 hidden md:flex items-center text-sm font-medium">
          <a href="#about" className="hover:text-yellow-500 transition">About</a>
          <a href="#writing" className="hover:text-yellow-500 transition">Articles</a>
          <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
          <a href="#contact" className="border border-yellow-500/50 px-5 py-2 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
            Connect
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        
        {/* Hero Section */}
        <section className="mb-32">
          <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-medium mb-6 animate-fade-in">
            🚀 Full-Stack Developer & Technical Writer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Building for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Next Billion</span> Users.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-400 leading-relaxed mb-8">
            I engineer fast, scalable web applications and AI tools, while breaking down complex concepts into top-tier technical articles.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition flex items-center gap-2">
              <Terminal size={18} /> View My Work
            </a>
            <a href="#writing" className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition border border-gray-700 flex items-center gap-2">
              <BookOpen size={18} /> Read My Articles
            </a>
          </div>
        </section>

        {/* Extended About Section */}
        <section id="about" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <User className="text-yellow-500" /> System.whoami()
            </h2>
            <div className="h-[1px] flex-1 bg-gray-800"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hi, I'm <strong className="text-white font-medium">Bright Emmanuel</strong>. I'm a software engineer and technical writer based in Nigeria. My journey in tech is driven by a simple mission: to build robust, accessible tools that solve real problems.
              </p>
              <p>
                Currently, I'm balancing my <span className="text-yellow-500 font-medium">JUPEB program</span> while actively developing Micro-SaaS products and Telegram bots. When I'm not writing code, I'm writing *about* code—translating technical jargon into clear, actionable articles for platforms like SitePoint and DEV Community.
              </p>
              <p>
                My expertise lies in tying together beautiful UI/UX with powerful backend architectures using <strong className="text-white font-medium">Next.js, Python, Go, and Supabase</strong>.
              </p>
            </div>
            
            {/* Decorative Code Window */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6 font-mono text-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-gray-300">
                <span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> = {'{'}
                <br/>
                &nbsp;&nbsp;name: <span className="text-green-400">'Bright Emmanuel'</span>,
                <br/>
                &nbsp;&nbsp;role: <span className="text-green-400">'Full-Stack Engineer'</span>,
                <br/>
                &nbsp;&nbsp;location: <span className="text-green-400">'Nigeria'</span>,
                <br/>
                &nbsp;&nbsp;focus: [<span className="text-green-400">'Micro-SaaS'</span>, <span className="text-green-400">'AI Bots'</span>, <span className="text-green-400">'Tech Writing'</span>],
                <br/>
                &nbsp;&nbsp;status: <span className="text-green-400">'Building the future 🚀'</span>
                <br/>
                {'}'};
              </div>
            </div>
          </div>
        </section>

        {/* Technical Writing Section */}
        <section id="writing" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <BookOpen className="text-yellow-500" /> Published Writing
            </h2>
            <div className="h-[1px] flex-1 bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* SitePoint Article - Highlighted */}
            <a href="https://www.sitepoint.com/next-js-for-the-next-billion-users" target="_blank" rel="noopener noreferrer" 
               className="group relative border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition bg-gray-900/30 hover:bg-gray-900/60 flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 bg-gray-800 text-gray-300 text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-sm">
                <Award size={14} /> FEATURED
              </div>
              <div className="text-yellow-500 font-semibold text-sm mb-3 tracking-wider uppercase">SitePoint</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition">Next.js for the Next Billion Users</h3>
              <p className="text-gray-400 mb-8 flex-grow">An in-depth look at how Next.js features like SSR, ISR, and edge computing are crucial for delivering highly performant web applications to global audiences.</p>
              <div className="flex items-center text-yellow-500 font-medium group-hover:translate-x-2 transition-transform mt-auto">
                Read Article <ArrowRight size={18} className="ml-2" />
              </div>
            </a>

            {/* DEV Community Article - NEW AWARD WINNER */}
            <a href="https://dev.to/brighto7700/your-next-real-time-feature-probably-doesnt-need-websockets-go-sse-at-500-concurrent-connections-39ne" target="_blank" rel="noopener noreferrer" 
               className="group relative border border-yellow-500/30 p-8 rounded-2xl hover:border-yellow-500 transition bg-gradient-to-br from-yellow-500/5 to-transparent flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-sm">
                <Trophy size={14} /> TOP GO AUTHOR
              </div>
              <div className="text-blue-400 font-semibold text-sm mb-3 tracking-wider uppercase">DEV Community</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition">Your Next Real-Time Feature Probably Doesn't Need WebSockets</h3>
              <p className="text-gray-400 mb-8 flex-grow">An architectural deep dive into why Server-Sent Events (SSE) paired with Go might be a better, lighter alternative to WebSockets at 500+ concurrent connections.</p>
              <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-2 transition-transform mt-auto">
                Read Article <ArrowRight size={18} className="ml-2" />
              </div>
            </a>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Terminal className="text-yellow-500" /> Selected Works
            </h2>
            <div className="h-[1px] flex-1 bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition bg-gray-900/30 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Terminal className="text-yellow-500" size={28} />
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/brighto7700/shell-signal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><Github size={22} /></a>
                  <a href="https://shellsignal.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><ExternalLink size={22} /></a>
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

            <div className="group border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition bg-gray-900/30 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Cpu className="text-yellow-500" size={28} />
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/brighto7700" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><Github size={22} /></a>
                  <a href="https://t.me/teexy_bot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><ExternalLink size={22} /></a>
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
        <section id="stack" className="mb-32 scroll-mt-24">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">The Tech Stack</h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {['Next.js', 'React', 'Node.js', 'Go (Golang)', 'Supabase', 'PostgreSQL', 'Python', 'Tailwind CSS'].map((tech) => (
                <div key={tech} className="bg-gray-900/40 border border-gray-800 p-4 text-center rounded-xl hover:bg-gray-800 hover:border-gray-700 transition cursor-default font-medium text-gray-300 hover:text-yellow-500">
                  {tech}
                </div>
              ))}
           </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20 bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-16 text-center scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Something.</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            Whether you're looking to collaborate on a new project, need a technical article written, or just want to chat code—my inbox is open!
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <a 
              href="mailto:brighto7700@gmail.com" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] hover:-translate-y-1"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>

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
              href="https://linkedin.com/in/brighto7700" 
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

      <footer className="border-t border-gray-800/60 pt-8 pb-8 text-center px-6">
        <div className="flex justify-center items-center gap-6 text-gray-500 mb-6">
          <a href="https://wa.me/2348153765443" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition" title="WhatsApp">
            <WhatsAppIcon size={20} />
          </a>
          <a href="https://www.sitepoint.com/author/bright-emmanuel/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition" title="SitePoint">
            <BookOpen size={20} />
          </a>
          <a href="https://linkedin.com/in/brighto7700" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/brighto7700" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition" title="GitHub">
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

const rootElement = document.getElementById('root');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
