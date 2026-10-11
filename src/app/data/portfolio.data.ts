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
    'I am a Computer Science master\'s student at HPI and a working student in Software and AI Engineering at SAP. I enjoy turning machine-learning ideas into dependable software.',
  about: [
    'I am Oskar, a machine-learning engineer and Computer Science student based in Potsdam. At HPI, I focus on Data and AI and currently hold an average grade of 1.2.',
    'Alongside my studies, I work at SAP on software, AI engineering, reliability, and automation. Before that, I built research software at GFZ and worked across several computer-science research groups at the University of Potsdam.',
  ],
  projects: [
    {
      number: '01',
      title: 'YouTube AI Thumbnail Detector',
      description:
        'I am building a detector that analyzes YouTube thumbnails and estimates whether AI-generated imagery was used.',
      category: 'COMPUTER VISION',
      technologies: ['Image Analysis', 'YouTube', 'AI Detection'],
      status: 'WORK IN PROGRESS',
      preview: 'thumbnail',
    },
    {
      number: '02',
      title: 'Language Model From Scratch',
      description:
        'I am implementing a small language model, including forward and backward propagation, and training it on real text data as a chat companion.',
      category: 'DEEP LEARNING',
      technologies: ['Neural Networks', 'From Scratch', 'Real Data'],
      status: 'WORK IN PROGRESS',
      preview: 'llm',
    },
    {
      number: '03',
      title: 'RAG System',
      description:
        'I am building a retrieval-augmented generation system to understand how retrieval, context selection, and generation work together.',
      category: 'RETRIEVAL / LLMS',
      technologies: ['RAG', 'Retrieval', 'LLMs'],
      status: 'WORK IN PROGRESS',
      preview: 'rag',
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
  education: [
    {
      period: '2025 - NOW',
      degree: 'M.Sc. Computer Science',
      institution: 'Hasso Plattner Institute',
      detail: 'Data and AI specialization / Current average: 1.2',
    },
    {
      period: '2021 - 2025',
      degree: 'B.Sc. Computational Science',
      institution: 'University of Potsdam',
      detail: 'Final grade: 1.6 / Bachelor thesis: 1.5',
    },
  ],
  experience: [
    {
      period: '2025 - NOW',
      role: 'Software / AI Engineering Working Student',
      organization: 'SAP',
      summary: 'Building reliability and automation features, improving GreenToken, and making CI/CD workflows faster.',
    },
    {
      period: '2024 - 2025',
      role: 'Software Engineering Intern',
      organization: 'GFZ Helmholtz Centre for Geosciences',
      summary: 'Built the voxelizeR package for LiDAR analysis and prepared the research software for a public CRAN release.',
    },
    {
      period: '2022 - 2025',
      role: 'Student Research Assistant',
      organization: 'University of Potsdam',
      summary: 'Worked with research groups in algorithms, theoretical computer science, and software engineering, and led seminars and project discussions.',
    },
  ],
};
