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
    'I study Computer Science at HPI, engineer software at SAP, and build machine-learning systems from first principles.',
  about: [
    'I am Oskar, a Computer Science master\'s student at HPI based in Potsdam. My focus is Data and AI, and I am especially interested in understanding machine-learning systems from first principles.',
    'I like moving between theory and implementation: learning how a system works, building it myself, and turning the result into dependable software.',
  ],
  projects: [
    {
      title: 'YouTube AI Thumbnail Detector',
      description:
        'I am building a detector that analyzes YouTube thumbnails and estimates whether AI-generated imagery was used.',
      category: 'Computer vision',
      technologies: ['Image Analysis', 'YouTube', 'AI Detection'],
      status: 'In development',
      preview: 'thumbnail',
      problem: 'Estimate whether a YouTube thumbnail contains AI-generated imagery without presenting uncertainty as fact.',
      approach: 'Analyze visual cues in the thumbnail and return an estimate that can be inspected rather than a definitive label.',
      currentFocus: 'Evaluating which image signals are useful and how to communicate model confidence responsibly.',
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
      currentFocus: 'Studying gradient flow, training behavior, and the relationship between architecture and generated text.',
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
      currentFocus: 'Making the retrieval path observable so context quality can be evaluated separately from generation.',
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
