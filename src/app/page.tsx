import { usePortfolio } from "@/presentation/hooks/usePortfolio";
import { HeroSection } from "@/presentation/components/sections/HeroSection";
import { SkillsSection } from "@/presentation/components/sections/SkillsSection";
import { ProjectsSection } from "@/presentation/components/sections/ProjectsSection";
import { EnumSocialPlatform } from "@/core/domain/enums/enums";

export default function Home() {
  const { personalInfo, skills, projects } = usePortfolio();
  const githubUrl = personalInfo.socials.find(s => s.platform === EnumSocialPlatform.GITHUB)?.url || "#";

  return (
    <div className="relative min-h-screen">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-10 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <HeroSection info={personalInfo} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} githubUrl={githubUrl} />
      </div>
    </div>
  );
}