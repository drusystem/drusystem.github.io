import { PersonalInfo } from "@/core/domain/entities/Portfolio";
import { ProfileAvatar } from "../core/ProfileAvatar";
import { IconSvgLinkedIn } from "../shared/IconSvgLinkedIn";
import { IconSvgGitHub } from "../shared/IconSvgGitHub";
import { IconSvgEmail } from "../shared/IconSvgEmail";
import { EnumSocialPlatform } from "@/core/domain/enums/enums";

interface HeroProps {
  info: PersonalInfo;
}

export const HeroSection = ({ info }: HeroProps) => {
  // Obtenemos los links específicos buscando en el array de socials
  const github = info.socials.find(s => s.platform ===EnumSocialPlatform.GITHUB)?.url;
  const linkedin = info.socials.find(s => s.platform === EnumSocialPlatform.LINKEDIN)?.url;
  const email = info.socials.find(s => s.platform === EnumSocialPlatform.GMAIL)?.url;
  const specialties = info.specialties;

  return (
    <section className="flex flex-col md:flex-row items-center gap-12 mb-32">
      <div className="relative group">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-blue-600 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
        <ProfileAvatar src="/profile/avatar.png" name={info.name} />
      </div>
      
      <div className="flex-1 text-center md:text-left">
        {info.availability && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-6 border border-emerald-500/20 tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            DISPONIBLE PARA PROYECTOS CRÍTICOS
          </div>
        )}
        
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight text-slate-900 dark:text-white leading-tight">
          {info.name.split(' ')[0]} <span className="text-primary">{info.name.split(' ')[1]}</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
          {info.role}. <br className="hidden md:block" />
          Especializado en <span className="text-slate-900 dark:text-slate-200">sistemas distribuidos</span> y <span className="text-slate-900 dark:text-slate-200">experiencias digitales de alto rendimiento.</span>
        </p>
        

        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
          <a href={linkedin} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-md active:scale-95">
            <IconSvgLinkedIn/>
             LinkedIn
          </a>
          <a href={github} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-surface text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95">
             <IconSvgGitHub/>
             GitHub
          </a>
          <a href={email} className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:bg-primary/20 active:scale-95">
             <IconSvgEmail/>
             Gmail
          </a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {specialties.map(speciality => (
            <span key={speciality.name} className="px-4 py-1.5 bg-white dark:bg-surface text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-800 shadow-sm">
              {speciality.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};