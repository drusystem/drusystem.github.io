import { SkillCategory } from "@/core/domain/entities/Portfolio";
import { EnumCategorySkill } from "@/core/domain/enums/enums";

interface SkillsProps {
  skills: SkillCategory[];
}

export const SkillsSection = ({ skills }: SkillsProps) => {
  const mainStack = skills.find(s => s.category === EnumCategorySkill.MAIN);
  const expertise = skills.find(s => s.category === EnumCategorySkill.ADDITIONAL_EXPERTISE);
  const otherSkills = skills.filter(s => s.category !== EnumCategorySkill.MAIN && s.category !== EnumCategorySkill.ADDITIONAL_EXPERTISE);

  return (
    <section className="mb-32">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Ecosistema Técnico</h2>
        <div className="flex-1 h-[1px] bg-slate-100 dark:bg-slate-800"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          mainStack && (
            <div className="md:col-span-2 p-8 rounded-3xl bg-primary/[0.03] border border-primary/10 relative overflow-hidden group">
              <h3 className="text-[15px] font-black uppercase tracking-[0.2em] text-primary mb-8">{mainStack.title}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 relative z-10">
                  {
                    mainStack.skills.map((skill)=>(
                      <div key={skill.name}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M23.834 16.101l-1.047-1.047c-.798-.798-2.092-.798-2.89 0l-1.047 1.047c-.798.798-.798 2.092 0 2.89l1.047 1.047c.798.798 2.092.798 2.89 0l1.047-1.047c.798-.798.798-2.092 0-2.89zm-13.063-9.534l-1.047-1.047c-.798-.798-2.092-.798-2.89 0l-1.047 1.047c-.798.798-.798 2.092 0 2.89l1.047 1.047c.798.798 2.092.798 2.89 0l1.047-1.047c.798-.798.798-2.092 0-2.89zM12 4.142c-4.332 0-7.858 3.526-7.858 7.858S7.668 19.858 12 19.858s7.858-3.526 7.858-7.858S16.332 4.142 12 4.142z"/></svg>
                          </div>
                          <h4 className="font-bold text-xl text-slate-900 dark:text-white">{skill.name}</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-500">
                          { skill.details &&
                            skill.details.map((detail)=>(
                              <li key={detail} className="flex items-center gap-2"><span>▹</span>{detail}</li>
                            ))
                          }
                        </ul>
                      </div>
                    ))
                  }
              </div>
            </div>
          )
        }
        {
          expertise && (
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-surface border border-slate-100 dark:border-slate-800 group transition-all hover:border-blue-400/30">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.042 17.129l-7.203 4.144c-.567.327-1.111.305-1.631 0l-7.203-4.144c-.521-.305-.782-.828-.782-1.57V8.441c0-.742.261-1.265.782-1.57l7.203-4.144c.567-.327 1.111-.305 1.631 0l7.203 4.144c.521.305.782.828.782 1.57v7.118c0 .742-.261 1.265-.782 1.57z"/></svg>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">{expertise.title}</h3>
              </div>
              {
                expertise.skills && (
                  expertise.skills.map(skill=>(
                    <div key={skill.name}>
                      <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{skill.name}</h4>
                      <p className="text-sm text-slate-500 mb-6 leading-relaxed">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.details?.map(s => <span key={s} className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-[9px] font-bold shadow-sm">{s}</span>)}
                      </div>
                    </div>
                  ))
                )
              }
            </div>
          )
        }
        {
          otherSkills.map(otherSkill=>(
             <div key={otherSkill.category} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{otherSkill.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {otherSkill.skills.map(item => (
                    <span key={item.name} className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-slate-300"></span> {item.name}
                    </span>
                  ))}
                </div>
              </div>
          ))
        }
      </div>
    </section>
  );
};