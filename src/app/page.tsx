import { personalInfo, projects } from "@/infrastructure/data/profile";
import { ProfileAvatar } from "@/presentation/components/ui/ProfileAvatar";
import { SafeImage } from "@/presentation/components/ui/SafeImage";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* --- CAPA DE FONDO (Ingeniería & Blueprint) --- */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-10 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        
        {/* --- HERO SECTION: Branding & Social --- */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-32">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-blue-600 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
            <ProfileAvatar src="/profile/avatar.png" name={personalInfo.name} />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-6 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              DISPONIBLE PARA PROYECTOS CRÍTICOS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight text-slate-900 dark:text-white leading-tight">
              {personalInfo.name.split(' ')[0]} <span className="text-primary">{personalInfo.name.split(' ')[1]}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-6 max-w-2xl leading-relaxed">
              Software Architect & Senior Full Stack Developer. <br className="hidden md:block" />
              Especializado en <span className="text-slate-900 dark:text-slate-200 font-semibold">sistemas distribuidos</span> y <span className="text-slate-900 dark:text-slate-200 font-semibold">experiencias digitales de alto rendimiento.</span>
            </p>

            {/* BOTONES DE REDES SOCIALES */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm transition-all hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-white dark:bg-surface text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-md active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
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

        {/* --- SECCIÓN DE PROYECTOS --- */}
        <section id="projects" className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-slate-100 dark:border-slate-800 pb-8">
            <div className="space-y-2 text-left w-full md:w-auto">
              <h2 className="text-3xl font-bold tracking-tight">Proyectos Seleccionados</h2>
              <p className="text-slate-500 dark:text-slate-400">Soluciones de ingeniería enfocadas en arquitectura y escalabilidad.</p>
            </div>
            <a 
              href={personalInfo.social.github} 
              target="_blank"
              className="text-sm font-bold text-primary hover:text-blue-700 transition-colors tracking-widest uppercase shrink-0"
            >
              GitHub Explorer →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article 
                key={project.id} 
                className="group relative bg-white dark:bg-surface border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 flex flex-col"
              >
                <div className="h-52 overflow-hidden relative bg-slate-100 dark:bg-slate-900 shrink-0">
                  <SafeImage 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-md text-slate-900 dark:text-white text-[10px] font-bold rounded-md uppercase tracking-tighter border border-slate-200 dark:border-white/10">
                      {project.tech[0]}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold px-2 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 rounded border border-slate-100 dark:border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.repo} 
                    target="_blank"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-widest hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Ver Implementación
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- TECH STACK CLOUD --- */}
        <section className="mt-32 pt-16 border-t border-slate-100 dark:border-slate-800 text-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12">
            Enterprise Stack & Infrastructure
          </h3>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {personalInfo.additional.map(tool => (
              <span 
                key={tool} 
                className="text-lg md:text-xl font-semibold text-slate-300 dark:text-slate-700 hover:text-primary dark:hover:text-primary transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}