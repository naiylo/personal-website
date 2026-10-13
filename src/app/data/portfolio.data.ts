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
    'I build practical AI systems, from research ideas to useful tools. I enjoy understanding complex problems from first principles and making the results work in the real world.',
  about: [
    'I am Oskar, a Computer Science master\'s student at HPI based in Potsdam. My focus is Data and AI, and I am especially interested in understanding machine-learning systems from first principles.',
    'I like moving between theory and implementation: learning how a system works, building it myself, and turning the result into dependable software.',
  ],
  projects: [
    {
      title: 'YouTube AI Thumbnail Detector',
      description:
        'A local Chromium extension that adds an estimated AI-likelihood score directly to YouTube thumbnails.',
      category: 'Browser extension / ML',
      technologies: ['Manifest V3', 'FastAPI', 'CLIP', 'PyTorch', 'scikit-learn'],
      status: 'Complete',
      preview: 'thumbnail',
      problem: 'Make potentially AI-generated imagery more visible while browsing without presenting a model score as fact.',
      approach: 'A content script observes dynamically loaded thumbnails, sends their YouTube image URL to a local API, and overlays the returned likelihood score.',
      technicalNoteLabel: 'Key decisions',
      technicalNote: 'Keep inference local with no API key, validate remote image requests, use CLIP features with a small logistic-regression head, and label the result as an estimate because the training data is not YouTube-specific.',
      repositoryUrl: 'https://github.com/naiylo/youtube-thumbnail-classifier',
    },
    {
      title: 'Language Model From Scratch',
      description:
        'I am implementing a small language model, including forward and backward propagation, and training it on real text data as a chat companion.',
      category: 'Deep learning',
      technologies: ['Neural Networks', 'From Scratch', 'Real Data'],
      status: 'In development',
      preview: 'llm',
      problem: 'Understand language models beyond the API layer by implementing the mechanics that make training possible.',
      approach: 'Build forward and backward propagation, train on real text, and expose the resulting model through a small chat companion.',
      technicalNoteLabel: 'Current focus',
      technicalNote: 'Studying gradient flow, training behavior, and the relationship between architecture and generated text.',
    },
    {
      title: 'RAG System',
      description:
        'I am building a retrieval-augmented generation system to understand how retrieval, context selection, and generation work together.',
      category: 'Retrieval / LLMs',
      technologies: ['RAG', 'Retrieval', 'LLMs'],
      status: 'In development',
      preview: 'rag',
      problem: 'Understand how external knowledge becomes usable context for a language model.',
      approach: 'Build retrieval, context selection, and response generation as explicit stages that can be inspected independently.',
      technicalNoteLabel: 'Current focus',
      technicalNote: 'Making the retrieval path observable so context quality can be evaluated separately from generation.',
    },
  ],
  skillGroups: [
    {
      name: 'Machine Learning & AI',
      skills: ['Python', 'PyTorch', 'Neural networks', 'Deep learning', 'RAG', 'LLMs'],
    },
    {
      name: 'Software Engineering',
      skills: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'APIs'],
    },
    {
      name: 'Data & Research',
      skills: ['scikit-learn', 'CLIP', 'Computer vision', 'LiDAR', 'Data analysis', 'Research'],
    },
    {
      name: 'Engineering Tools',
      skills: ['Git', 'CI/CD', 'Development tooling', 'Automation'],
    },
  ],
  education: [
    {
      period: '2025 - NOW',
      degree: 'M.Sc. Computer Science',
      institution: 'Hasso Plattner Institute',
      detail: 'Data and AI specialization / Current average: 1.4',
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
