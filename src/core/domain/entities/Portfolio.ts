import { EnumCategorySkill, EnumSocialPlatform } from "../enums/enums";

export interface SocialLink {
  platform: EnumSocialPlatform;
  url: string;
  icon?: string; // Podríamos manejar iconos aquí o en UI
}

export interface SkillItem {
  name: string;
  description?:string;
  level?: number;
  details?:string[]// 1-5, opcional
}

export interface SkillCategory {
  title: string;
  category:EnumCategorySkill,
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  imageUrl: string;
  featured: boolean;
}

export interface Specialtiy{
  name:string
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  role: string;
  availability: boolean; // Para el badge de "Disponible"
  location?: string;
  bio: string;
  socials: SocialLink[];
  specialties:Specialtiy[];
}