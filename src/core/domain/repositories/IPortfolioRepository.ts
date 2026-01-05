import { PersonalInfo, Project, SkillCategory } from "../entities/Portfolio";

export interface IPortfolioRepository {
  getPersonalInfo(): PersonalInfo;
  getSkills(): SkillCategory[];
  getProjects(): Project[];
}