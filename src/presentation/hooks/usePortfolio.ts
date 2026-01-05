import { StaticPortfolioRepository } from "@/infrastructure/repositories/StaticPortfolioRepository";

// En una app real usaríamos inyección de dependencias, 
// aquí instanciamos directo por simplicidad en SSG.
const repository = new StaticPortfolioRepository();

export const usePortfolio = () => {
  const personalInfo = repository.getPersonalInfo();
  const skills = repository.getSkills();
  const projects = repository.getProjects();

  return {
    personalInfo,
    skills,
    projects
  };
};