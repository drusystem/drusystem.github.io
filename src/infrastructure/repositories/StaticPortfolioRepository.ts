import { IPortfolioRepository } from "@/core/domain/repositories/IPortfolioRepository";
import { PersonalInfo, Project, SkillCategory } from "@/core/domain/entities/Portfolio";
import { EnumCategorySkill, EnumSocialPlatform } from "@/core/domain/enums/enums";

export class StaticPortfolioRepository implements IPortfolioRepository {
  
  getPersonalInfo(): PersonalInfo {
    return {
      name: "Andrés Quispe",
      fullName: "Andrés Jesús Quispe Caballero",
      role: "Software Architect & Senior Full Stack Developer",
      availability: true,
      bio: "Software Architect & Senior Full Stack Developer. Especializado en sistemas distribuidos y experiencias digitales de alto rendimiento.",
      socials: [
        { platform: EnumSocialPlatform.LINKEDIN, url: "https://www.linkedin.com/in/andres-jesus-quispe-caballero" },
        { platform:EnumSocialPlatform.GITHUB, url: "https://github.com/drusystem" },
        { platform: EnumSocialPlatform.GMAIL, url: "mailto:drusystem@gmail.com" }
      ],
      specialties:[
        {name:'.NET'},
        {name:'React.js'},
        {name:'Flutter'},
        {name:'SQL Server'},
      ]
    };
  }

  getSkills(): SkillCategory[] {
    return [
      {
        title: "Stack Principal",
        category:EnumCategorySkill.MAIN,
        skills: [
          { 
            name: ".NET",
            details:[
              'Arquitecturas Enterprise & DDD',
              'Web APIs & Microservicios',
              'Entity Framework Core'
            ]
          },
          { 
            name: "React / Next",
            details:[
              'SSR & Static Generation',
              'Frontend Architecture & Performance',
              'Tailwind CSS v4 Expert'
            ]
          },
          { 
            name: "Flutter",
            details:[
              'Flutter Device & Hardware Integration',
              'Riverpod, BLoC & Cubits',
              'Go Router, Shared Preferences & Secure Storage',
              'Material Widgets & Custom Theme',
            ]
          }
        ]
      },
      {
        title: "Experiencia Complementaria",
        category:EnumCategorySkill.ADDITIONAL_EXPERTISE,
        skills:[
          {
            name:'PHP Full Stack',
            description:'Desarrollo de aplicaciones full stack con Laravel, desde diseño de APIs hasta despliegue en producción.',
            details:[
              'Laravel 8',
              'Eloquent',
              'JWT/oAuth2',
              'MySQL',
              'APIs'
            ]
          }
        ]
      },
      {
        title: "Bases de Datos",
        category:EnumCategorySkill.DATABASE,
        skills: [
          { name: "SQL Server" },
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "MongoDB" },
          { name: "Redis" }
        ]
      },
      {
        title: "Cloud & DevOps",
        category:EnumCategorySkill.CLOUD_DEVOPS,
        skills: [
          { name: "Docker" },
          { name: "Kubernetes" },
          { name: "Azure" },
          { name: "AWS" },
          { name: "GitHub Actions" }
        ]
      },
      {
        title: "Exploración Técnica",
        category:EnumCategorySkill.SPECIALIZED,
        skills: [
          { name: "AI-Assisted Software Engineering" },
          { name: "LLM Integration & Prompt Engineering" },
          { name: "AI in Backend Systems" },
          { name: "RAG (Retrieval-Augmented Generation)" },
          { name: "AI Automation & Agents" },
        ]
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: "1",
        title: "Professional Engineering Portfolio",
        description: "Sistema de marca personal arquitectado bajo principios Clean y SOLID. Implementa un pipeline de CI/CD automatizado y optimización SEO avanzada para perfiles de alto impacto.",
        technologies: ["Next.js 15", "TypeScript", "Clean Architecture", "GitHub Actions"],
        repositoryUrl: "https://github.com/drusystem/drusystem.github.io",
        imageUrl: "/projects/portafolio.png",
        featured: true
      },
      {
        id: "2",
        title: "Flutter Cinema App",
        description: "Aplicación móvil moderna para explorar películas usando The Movie Database (TMDB) API. Desarrollada con Flutter y siguiendo los principios de Clean Architecture.",
        technologies: ["Flutter SDK", "Riverpod", "Go Router", "Dio","Drift"],
        repositoryUrl: "https://github.com/drusystem/flutter_moviedb",
        imageUrl: "/projects/cinema_app.png",
        featured: true
      },
      {
        id: "3",
        title: "Healthcare Management System",
        description: "Sistema de gestión hospitalaria escalable. API RESTful bajo Clean Architecture y cliente web reactivo para la visualización de datos médicos en tiempo real.",
        technologies: [".NET", "React", "PostgreSQL", "Docker"],
        repositoryUrl: "https://github.com/drusystem/healthcare-system",
        imageUrl: "/projects/healthcare.png",
        featured: true
      },
      {
        id: "4",
        title: "MVP SaaS Marketplace",
        description: "Desarrollo integral de un marketplace desde cero. Lógica de negocio compleja implementada en PHP Laravel para una salida rápida a producción.",
        technologies: ["Laravel 11", "PHP 8.3", "MySQL", "Blade"],
        repositoryUrl: "https://github.com/drusystem/saas-marketplace",
        imageUrl: "/projects/laravel-mvp.png",
        featured: false
      },
      {
        id: "5",
        title: "Data Intelligence Scraper",
        description: "Motor de extracción de datos masivo con Python. Orquestación de tareas complejas para análisis de mercado y automatización de reportes.",
        technologies: ["Python", "Django", "BeautifulSoup", "MongoDB"],
        repositoryUrl: "https://github.com/drusystem/python-scraper",
        imageUrl: "/projects/scraper.png",
        featured: false
      },
      {
        id: "6",
        title: "Mobile Inventory App",
        description: "Aplicación móvil multiplataforma para control de inventarios. Sincronización offline-first y backend ligero en NestJS.",
        technologies: ["Flutter", "NestJS", "SQLite", "Firebase"],
        repositoryUrl: "https://github.com/drusystem/flutter-inventory",
        imageUrl: "/projects/mobile-app.png",
        featured: false
      }
    ];
  }
}