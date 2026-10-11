import { PortfolioData } from '../models/portfolio.model';

// This is the single source of truth for personal content. Edit this file when a
// role, project, link, or technology changes; the components stay presentation-only.
export const PORTFOLIO: PortfolioData = {
  name: 'Oskar Schiedewitz',
  shortName: 'oskar.schiedewitz',
  location: 'Potsdam, Germany',
  email: 'oskarschiedewitz@gmail.com',
  github: 'https://github.com/naiylo',
  linkedin: 'https://de.linkedin.com/in/oskar-schiedewitz/de',
  intro:
    'Building intelligent systems, exploring machine learning, and turning ideas into working software.',
  about: [
    'I am a computer scientist focused on machine learning, AI engineering, and the fundamentals that make intelligent systems work.',
    'Alongside research-driven work, I build complete software products — from data processing and backend systems to clear, useful interfaces.',
  ],
  projects: [
    {
      number: '01',
      title: 'Reliability & AI Automation',
      description:
        'Engineering reliability features and automation across SAP GreenToken and Hyperspace, from technical design to deployment.',
      category: 'AI / SOFTWARE ENGINEERING',
      technologies: ['Python', 'Java', 'TypeScript', 'Angular'],
      status: 'ONGOING AT SAP',
      accent: 'yellow',
      preview: 'systems',
    },
    {
      number: '02',
      title: 'voxelizeR',
      description:
        'An R package for LiDAR data preprocessing and voxel-based analysis, prepared for a public CRAN release at GFZ.',
      category: 'DATA / RESEARCH SOFTWARE',
      technologies: ['R', 'C', 'LiDAR', 'Data Processing'],
      status: 'GFZ PROJECT',
      accent: 'green',
      preview: 'voxel',
    },
    {
      number: '03',
      title: 'Gamified Learning Study',
      description:
        'Bachelor’s research examining how gamified learning influences engagement in educational settings.',
      category: 'ACADEMIC RESEARCH',
      technologies: ['Study Design', 'Analysis', 'Scientific Writing'],
      status: 'COMPLETED 2025',
      accent: 'blue',
      preview: 'research',
    },
  ],
  focusAreas: [
    'Machine Learning & Deep Learning',
    'AI Engineering & Automation',
    'Neural Networks, RAG & LLMs',
    'Full-Stack Product Engineering',
  ],
  technologies: [
    'Python / PyTorch',
    'Java / Spring Boot',
    'TypeScript / Angular',
    'HTML / CSS / Tailwind',
    'R / Data Processing',
    'Git / CI/CD / MCP',
  ],
  experience: [
    {
      period: '2025 — NOW',
      role: 'Software / AI Engineering Intern',
      organization: 'SAP',
      summary: 'Reliability engineering, automation, product improvements, and CI/CD.',
    },
    {
      period: '2024 — 2025',
      role: 'Software Engineering Intern',
      organization: 'GFZ Helmholtz Centre for Geosciences',
      summary: 'Research software for LiDAR analysis and data preprocessing.',
    },
    {
      period: '2022 — 2025',
      role: 'Student Research Assistant',
      organization: 'University of Potsdam',
      summary: 'Algorithms, theoretical computer science, and software engineering.',
    },
  ],
};
