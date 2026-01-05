import { Project } from "@/core/domain/entities/Portfolio";
import { SafeImage } from "../core/SafeImage"; // Ajusta la ruta si es necesario

interface ProjectsProps {
  projects: Project[];
  githubUrl: string;
}

export const ProjectsSection = ({ projects, githubUrl }: ProjectsProps) => {
  return (
    <section id="projects" className="space-y-12">
      {/* HEADER DE SECCIÓN */}
      <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-8">
        <h2 className="text-3xl font-bold tracking-tight shrink-0">
          Proyectos de Ingeniería
        </h2>
        <div className="flex-1"></div>
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-black tracking-widest text-primary hover:opacity-70 uppercase transition-opacity"
        >
          Ver repositorio completo →
        </a>
      </div>

      {/* GRID DE PROYECTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article 
            key={project.id} 
            className="group relative bg-white dark:bg-surface border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
          >
            {/* IMAGEN DEL PROYECTO */}
            <div className="h-48 overflow-hidden relative bg-slate-50 dark:bg-slate-900">
              <SafeImage 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
            </div>

            {/* CONTENIDO DEL PROYECTO */}
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-auto">
                {/* TECNOLOGÍAS */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((t) => (
                    <span 
                      key={t} 
                      className="text-[9px] font-bold px-2 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-500 rounded border border-slate-100 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BOTÓN DE ACCIÓN */}
                <a 
                  href={project.repositoryUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  Analyze Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};