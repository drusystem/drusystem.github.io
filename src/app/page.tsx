import { personalInfo, projects, skills } from "@/infrastructure/data/profile";
import { ProfileAvatar } from "@/presentation/components/ui/ProfileAvatar";
import { SafeImage } from "@/presentation/components/ui/SafeImage";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* --- FONDO DE INGENIERÍA (GRID) --- */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-10 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        
        {/* --- HERO: ENFOQUE CORE (VERSION RESTAURADA + BOTONES) --- */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-32">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-blue-600 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
            <ProfileAvatar src="/profile/avatar.png" name={personalInfo.name} />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-6 border border-emerald-500/20 tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              DISPONIBLE PARA PROYECTOS CRÍTICOS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight text-slate-900 dark:text-white leading-tight">
              {personalInfo.name.split(' ')[0]} <span className="text-primary">{personalInfo.name.split(' ')[1]}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Software Architect & Senior Full Stack Developer. <br className="hidden md:block" />
              Especializado en <span className="text-slate-900 dark:text-slate-200">sistemas distribuidos</span> y <span className="text-slate-900 dark:text-slate-200">experiencias digitales de alto rendimiento.</span>
            </p>

            {/* BOTONES DE CONTACTO Y REDES */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
              {/* LINKEDIN */}
              <a href={personalInfo.social.linkedin} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-md active:scale-95">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              {/* GITHUB */}
              <a href={personalInfo.social.github} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-surface text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              {/* EMAIL */}
              <a href={`mailto:${personalInfo.social.email}`} className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:bg-primary/20 active:scale-95">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Gmail
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {personalInfo.specialties.map(skill => (
                <span key={skill} className="px-4 py-1.5 bg-white dark:bg-surface text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-800 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* --- DETAILED SKILLS: JERARQUÍA TÉCNICA --- */}
        <section className="mb-32">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Technical Ecosystem</h2>
            <div className="flex-1 h-[1px] bg-slate-100 dark:bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CORE PRINCIPAL */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-primary/[0.03] border border-primary/10 relative overflow-hidden group">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8">Main Core Stack</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M23.834 16.101l-1.047-1.047c-.798-.798-2.092-.798-2.89 0l-1.047 1.047c-.798.798-.798 2.092 0 2.89l1.047 1.047c.798.798 2.092.798 2.89 0l1.047-1.047c.798-.798.798-2.092 0-2.89zm-13.063-9.534l-1.047-1.047c-.798-.798-2.092-.798-2.89 0l-1.047 1.047c-.798.798-.798 2.092 0 2.89l1.047 1.047c.798.798 2.092.798 2.89 0l1.047-1.047c.798-.798.798-2.092 0-2.89zM12 4.142c-4.332 0-7.858 3.526-7.858 7.858S7.668 19.858 12 19.858s7.858-3.526 7.858-7.858S16.332 4.142 12 4.142z"/></svg>
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-white">.NET Core</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li className="flex items-center gap-2"><span>▹</span> Arquitecturas Enterprise & DDD</li>
                    <li className="flex items-center gap-2"><span>▹</span> Web APIs & Microservicios</li>
                    <li className="flex items-center gap-2"><span>▹</span> Entity Framework Core</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"/></svg>
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-white">React / Next</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li className="flex items-center gap-2"><span>▹</span> SSR & Static Generation</li>
                    <li className="flex items-center gap-2"><span>▹</span> Performance Optimization</li>
                    <li className="flex items-center gap-2"><span>▹</span> Tailwind CSS v4 Expert</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* LARAVEL CORE */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-surface border border-slate-100 dark:border-slate-800 group transition-all hover:border-blue-400/30">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.042 17.129l-7.203 4.144c-.567.327-1.111.305-1.631 0l-7.203-4.144c-.521-.305-.782-.828-.782-1.57V8.441c0-.742.261-1.265.782-1.57l7.203-4.144c.567-.327 1.111-.305 1.631 0l7.203 4.144c.521.305.782.828.782 1.57v7.118c0 .742-.261 1.265-.782 1.57z"/></svg>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Laravel Expertise</h3>
              </div>
              <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">PHP Full Stack</h4>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">Capacidad probada para desarrollar productos completos y robustos (MVPs) desde el primer commit hasta el despliegue.</p>
              <div className="flex flex-wrap gap-2">
                {['Laravel 11', 'Eloquent', 'Auth', 'APIs'].map(s => <span key={s} className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-[9px] font-bold shadow-sm">{s}</span>)}
              </div>
            </div>

            {/* OTRAS CATEGORÍAS (DINÁMICAS) */}
            {skills.filter(s => s.category !== "Main Core Stack").map((group) => (
              <div key={group.category} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {group.items.map(item => (
                    <span key={item} className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-slate-300"></span> {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROYECTOS SELECCIONADOS --- */}
        <section id="projects" className="space-y-12">
          <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-8">
            <h2 className="text-3xl font-bold tracking-tight shrink-0">Proyectos de Ingeniería</h2>
            <div className="flex-1"></div>
            <a href={personalInfo.social.github} className="text-xs font-black tracking-widest text-primary hover:opacity-70 uppercase transition-opacity">Full Repository →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.id} className="group relative bg-white dark:bg-surface border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                <div className="h-48 overflow-hidden relative bg-slate-50 dark:bg-slate-900">
                  <SafeImage src={project.image} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => <span key={t} className="text-[9px] font-bold px-2 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-500 rounded border border-slate-100 dark:border-slate-800">{t}</span>)}
                    </div>
                    <a href={project.repo} target="_blank" className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-sm">
                      Analyze Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}