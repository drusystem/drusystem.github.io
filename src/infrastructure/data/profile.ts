export const personalInfo = {
  name: "Andrés Quispe",
  fullName: "Andrés Jesús Quispe Caballero",
  role: "Software Architect & Senior Full Stack Developer",
  github: "drusystem",
  specialties: [".NET 8", "React.js", "Next.js", "Flutter"],
  additional: ["Python", "NestJS", "Docker", "Kubernetes", "AWS", "Azure"],
  social: {
    github: "https://github.com/drusystem",
    linkedin: "https://www.linkedin.com/in/andres-quispe-caballero", // Ajusta tu link
    email: "drusystem@gmail.com"
  }
};

export const skills = [
  {
    category: "Main Core Stack", // Este nombre debe coincidir con el filtro en page.tsx
    items: [".NET 8", "React 19", "Next.js 15", "Web API", "Entity Framework"]
  },
  {
    category: "Databases",
    items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "Azure", "AWS", "GitHub Actions"]
  },
  {
    category: "Specialized",
    items: ["Python Django", "Web Scraping", "gRPC", "Microservices"]
  }
];

export const projects = [
  // --- CORE PRINCIPAL: .NET & REACT ---
  {
    id: "1",
    title: "Enterprise ERP Ecosystem",
    description: "Arquitectura distribuida de alta disponibilidad. Backend robusto en .NET 8 con patrones CQRS y Frontend de alto rendimiento en React para gestión de activos críticos.",
    tech: [".NET 8", "React", "SQL Server", "Azure"],
    repo: "https://github.com/drusystem/enterprise-erp",
    image: "/projects/erp-core.png"
  },
  {
    id: "2",
    title: "FinTech Transaction Engine",
    description: "Motor de transacciones financieras con procesamiento asíncrono. Implementación de Next.js para el dashboard administrativo y .NET para el core de validación.",
    tech: ["Next.js", ".NET Core", "Redis", "RabbitMQ"],
    repo: "https://github.com/drusystem/fintech-engine",
    image: "/projects/fintech.png"
  },
  {
    id: "3",
    title: "Healthcare Management System",
    description: "Sistema de gestión hospitalaria escalable. API RESTful bajo Clean Architecture y cliente web reactivo para la visualización de datos médicos en tiempo real.",
    tech: [".NET 8", "React", "PostgreSQL", "Docker"],
    repo: "https://github.com/drusystem/healthcare-system",
    image: "/projects/healthcare.png"
  },
  
  // --- SECONDARY CORE: LARAVEL & OTHERS ---
  {
    id: "4",
    title: "MVP SaaS Marketplace",
    description: "Desarrollo integral de un marketplace desde cero. Lógica de negocio compleja implementada en PHP Laravel para una salida rápida a producción.",
    tech: ["Laravel 11", "PHP 8.3", "MySQL", "Blade"],
    repo: "https://github.com/drusystem/saas-marketplace",
    image: "/projects/laravel-mvp.png"
  },
  {
    id: "5",
    title: "Data Intelligence Scraper",
    description: "Motor de extracción de datos masivo con Python. Orquestación de tareas complejas para análisis de mercado y automatización de reportes.",
    tech: ["Python", "Django", "BeautifulSoup", "MongoDB"],
    repo: "https://github.com/drusystem/python-scraper",
    image: "/projects/scraper.png"
  },
  {
    id: "6",
    title: "Mobile Inventory App",
    description: "Aplicación móvil multiplataforma para control de inventarios. Sincronización offline-first y backend ligero en NestJS.",
    tech: ["Flutter", "NestJS", "SQLite", "Firebase"],
    repo: "https://github.com/drusystem/flutter-inventory",
    image: "/projects/mobile-app.png"
  }
];