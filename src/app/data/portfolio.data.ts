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
    'I study Computer Science at HPI and work on machine learning, AI engineering, and full-stack software.',
  about: [
    'I study Computer Science at HPI with a focus on Data and AI. I am especially interested in neural networks, data systems, and understanding the fundamentals behind current AI tools.',
    'Alongside my studies, I work as a Software and AI Engineering Intern at SAP. I like building practical projects and following them from an initial idea to working software.',
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
      accent: 'yellow',
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
      accent: 'green',
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
      accent: 'blue',
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
