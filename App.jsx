import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Terminal, Github, Linkedin, ExternalLink, Cpu, Mail, 
  BookOpen, Award, ArrowRight, User, Trophy, LayoutTemplate, Zap, Smartphone
} from 'lucide-react';
import './globals.css';

const profilePhoto = '/profile_pic.png';

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
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-white pb-12 overflow-x-hidden">
      
      {/* Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto sticky top-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5">
        <div className="text-white font-bold text-xl flex items-center gap-2 tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-900 shadow-lg">
            <User size={18} />
          </div>
          {text}<span className="animate-pulse text-cyan-400">_</span>
        </div>
        <div className="space-x-8 hidden md:flex items-center text-sm font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Forge</a>
          <a href="#writing" className="hover:text-cyan-400 transition-colors">Writing</a>
          <a href="#contact" className="bg-white/10 border border-white/10 px-5 py-2.5 rounded-full text-white hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
            Connect
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        
        {/* Hero Section */}
        <section className="mb-40 pt-10 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8 animate-fade-in shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <Smartphone size={16} className="text-cyan-400" /> 100% Mobile-Engineered
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            No Laptop. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">No Excuses.</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl text-slate-400 leading-relaxed mb-10 font-light">
            I'm a full-stack developer engineering Next.js applications, Supabase backends, and award-winning technical articles—all entirely from an Android phone.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1">
              Explore Forge <ArrowRight size={18} />
            </a>
            <a href="#writing" className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2 hover:-translate-y-1">
              <BookOpen size={18} /> Read My Articles
            </a>
          </div>
        </section>

        {/* Flagship Project: FORGE */}
        <section id="projects" className="mb-32 scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 tracking-tight">
              <LayoutTemplate className="text-cyan-400" /> Flagship Platform
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div className="relative group rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-900/50 p-8 md:p-12 transition-all duration-500 hover:border-cyan-400/60 shadow-[0_0_40px_rgba(34,211,238,0.05)] hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                  Now Live
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Forge</h3>
                <h4 className="text-xl text-cyan-400 font-medium mb-4">The Mobile Developer Hub</h4>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  A developer platform built specifically for people who code on Android. It features a Script Vault with 20+ one-line <code>curl | bash</code> installs, interactive MDX Termux guides, and a One-Tap Configurator that generates instant development environments for Node, Python, and Go.
                </p>
                <div className="flex gap-3 flex-wrap mb-8">
                  <span className="bg-white/5 border border-white/10 text-slate-300 px-4 py-1.5 rounded-lg text-sm font-medium">Next.js 14</span>
                  <span className="bg-white/5 border border-white/10 text-slate-300 px-4 py-1.5 rounded-lg text-sm font-medium">Supabase</span>
                  <span className="bg-white/5 border border-white/10 text-slate-300 px-4 py-1.5 rounded-lg text-sm font-medium">GitHub OAuth</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://forge.brgt.site" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                    Visit forge.brgt.site <ExternalLink size={18} />
                  </a>
                  <a href="https://dev.to/brighto7700/i-built-a-full-stack-developer-platform-from-my-android-phone-no-laptop-no-excuses-37ol" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                    <BookOpen size={18} /> Read the Story
                  </a>
                </div>
              </div>
              
              <div className="aspect-video bg-slate-950 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 z-0"></div>
                <div className="z-10 text-left w-full font-mono text-sm text-slate-300 bg-slate-900/80 p-4 rounded-lg border border-white/5">
                  <div className="text-slate-500 mb-2">// Generate your dev environment</div>
                  <span className="text-cyan-400">curl</span> -fsSL https://forge.brgt.site/api/config/bm9kZS1sdH | <span className="text-indigo-400">bash</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects (Bento Grid) */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group border border-white/10 p-8 rounded-3xl hover:border-cyan-500/50 transition duration-500 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col h-full relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Terminal className="text-cyan-400" size={24} />
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/brighto7700/shell-signal" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition"><Github size={22} /></a>
                  <a href="https://shellsignal.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition"><ExternalLink size={22} /></a>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">ShellSignal</h3>
              <p className="text-slate-400 mb-8 flex-grow">A real-time news dashboard for developers. Curating the best of tech directly to your terminal-style UI.</p>
              <div className="flex gap-2 flex-wrap mt-auto">
                <span className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-md text-xs font-semibold tracking-wide">Next.js</span>
                <span className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-md text-xs font-semibold tracking-wide">Tailwind</span>
                <span className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-md text-xs font-semibold tracking-wide">API</span>
              </div>
            </div>

            <div className="group border border-white/10 p-8 rounded-3xl hover:border-cyan-500/50 transition duration-500 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col h-full relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Cpu className="text-indigo-400" size={24} />
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/brighto7700" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition"><Github size={22} /></a>
                  <a href="https://t.me/teexy_bot" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition"><ExternalLink size={22} /></a>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">CodeBot</h3>
              <p className="text-slate-400 mb-8 flex-grow">An AI-powered Telegram assistant built with Python and the Groq API, deployed on Render for maximum uptime.</p>
              <div className="flex gap-2 flex-wrap mt-auto">
                <span className="text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-md text-xs font-semibold tracking-wide">Python</span>
                <span className="text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-md text-xs font-semibold tracking-wide">Groq API</span>
                <span className="text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-md text-xs font-semibold tracking-wide">Render</span>
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned About Section */}
        <section id="about" className="mb-32 scroll-mt-32">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <User className="text-cyan-400" /> About The Builder
                </h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                Hi, I'm <strong className="text-white font-medium">Bright Emmanuel</strong>. I'm a 16-year-old developer and technical writer based in Nigeria. 
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I am currently balancing my JUPEB program to pursue Computer Science, while architecting real-world applications. The catch? <strong className="text-white">Every single line of code, deployment, and article is written on a Tecno Spark 8c Android phone using Termux.</strong>
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I believe constraints breed innovation. That philosophy is what led me to build Forge, and it's what drives me to write technical deep-dives for platforms like Forem and SitePoint to help the next generation of mobile developers.
              </p>
              
              <div className="pt-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">The Mobile Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {['Termux', 'Next.js 14', 'Supabase', 'Go (Golang)', 'Python', 'Node.js', 'pxxl.app', 'Vercel'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 font-medium shadow-sm hover:border-cyan-500/50 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-5 relative group mt-10 md:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 relative z-10 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Bright Emmanuel" 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 md:-left-12 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20 font-mono text-xs hover:-translate-y-2 transition-transform duration-500">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">const</span> <span className="text-yellow-300">setup</span> = {'{'}
                  <br/>
                  &nbsp;&nbsp;hardware: <span className="text-green-400">'Tecno Spark 8c'</span>,
                  <br/>
                  &nbsp;&nbsp;environment: <span className="text-green-400">'Termux'</span>,
                  <br/>
                  &nbsp;&nbsp;excuses: <span className="text-blue-400">null</span>
                  <br/>
                  {'}'};
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Writing Section */}
        <section id="writing" className="mb-32 scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 tracking-tight">
              <BookOpen className="text-cyan-400" /> Published Writing
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            <a href="https://www.sitepoint.com/next-js-for-the-next-billion-users" target="_blank" rel="noopener noreferrer" 
               className="group relative border border-white/10 p-8 rounded-3xl hover:border-cyan-500/50 transition duration-500 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1 shadow-lg">
                <Award size={14} /> FEATURED
              </div>
              <div className="text-cyan-400 font-semibold text-sm mb-3 tracking-widest uppercase">SitePoint</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Next.js for the Next Billion Users</h3>
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">An in-depth look at how Next.js features like SSR, ISR, and edge computing are crucial for delivering highly performant web applications to global audiences.</p>
              <div className="flex items-center text-cyan-400 font-medium group-hover:translate-x-2 transition-transform mt-auto">
                Read Article <ArrowRight size={18} className="ml-2" />
              </div>
            </a>

            <a href="https://dev.to/brighto7700/your-next-real-time-feature-probably-doesnt-need-websockets-go-sse-at-500-concurrent-connections-39ne" target="_blank" rel="noopener noreferrer" 
               className="group relative border border-white/10 p-8 rounded-3xl hover:border-indigo-500/50 transition duration-500 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1 shadow-lg">
                <Trophy size={14} /> TOP GO AUTHOR
              </div>
              <div className="text-indigo-400 font-semibold text-sm mb-3 tracking-widest uppercase">DEV Community</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">Your Next Real-Time Feature Probably Doesn't Need WebSockets</h3>
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">An architectural deep dive into why Server-Sent Events (SSE) paired with Go might be a better, lighter alternative to WebSockets at 500+ concurrent connections.</p>
              <div className="flex items-center text-indigo-400 font-medium group-hover:translate-x-2 transition-transform mt-auto">
                Read Article <ArrowRight size={18} className="ml-2" />
              </div>
            </a>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20 scroll-mt-32">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to Build?</h2>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
                Whether you're looking to collaborate on a new platform, need high-level technical writing, or just want to talk shop—my inbox is always open.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                <a 
                  href="mailto:brighto7700@gmail.com" 
                  className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                >
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>

                <a 
                  href="https://wa.me/2348153765443" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 hover:border-[#25D366]/60 font-semibold rounded-xl transition-all hover:-translate-y-1"
                >
                  <WhatsAppIcon size={20} />
                  <span>WhatsApp</span>
                </a>
                
                <a 
                  href="https://github.com/brighto7700" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/10 hover:border-white/30 hover:-translate-y-1"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/brighto7700" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] border border-[#0A66C2]/30 hover:border-[#0A66C2]/60 font-semibold rounded-xl transition-all hover:-translate-y-1"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 pt-10 pb-8 text-center px-6 mt-12 bg-slate-950">
        <div className="flex justify-center items-center gap-8 text-slate-500 mb-8">
          <a href="https://wa.me/2348153765443" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors" title="WhatsApp">
            <WhatsAppIcon size={22} />
          </a>
          <a href="https://www.sitepoint.com/author/bright-emmanuel/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="SitePoint">
            <BookOpen size={22} />
          </a>
          <a href="https://linkedin.com/in/brighto7700" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" title="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="https://github.com/brighto7700" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
            <Github size={22} />
          </a>
        </div>
        <p className="text-slate-500 text-sm font-medium">
          Designed & Built by <span className="text-slate-300">Bright Emmanuel</span>
        </p>
        <p className="text-slate-600 text-xs mt-3 tracking-widest uppercase">© {new Date().getFullYear()} All rights reserved.</p>
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
