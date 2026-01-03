export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[]; // e.g., ['.NET', 'React', 'Docker']
  role: string;
  imageUrl: string;
  repoUrl: string;
  category: 'FullStack' | 'Backend' | 'Mobile' | 'DevOps';
}