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
      architecture: ['YouTube DOM observer', 'FastAPI inference service', 'CLIP embeddings', 'Likelihood overlay'],
      decisions: [
        {
          title: 'Local inference',
          detail: 'The extension calls a service on the user\'s machine. Images and predictions stay local, and no paid API key is required.',
        },
        {
          title: 'Small classification head',
          detail: 'CLIP provides reusable image features while logistic regression keeps training, inspection, and iteration lightweight.',
        },
        {
          title: 'Uncertainty in the interface',
          detail: 'The overlay presents an estimated likelihood rather than a definitive label because the dataset does not mirror every YouTube thumbnail.',
        },
      ],
      repositoryUrl: 'https://github.com/naiylo/youtube-thumbnail-classifier',
    },
    {
      title: 'Local AI Personal Assistant',
      description:
        'A private assistant that runs on my laptop, answers over Wi-Fi, and uses my documents as context for useful day-to-day tasks.',
      category: 'Local AI / RAG',
      technologies: ['Local LLM', 'FastAPI', 'RAG', 'Vector Search', 'Python'],
      status: 'In development',
      preview: 'assistant',
      problem: 'Create a useful assistant without sending personal documents or routine requests to a hosted model provider.',
      approach: 'Run inference on the laptop, expose a small FastAPI service to trusted devices on the local network, and retrieve relevant document chunks before generation.',
      technicalNoteLabel: 'System boundary',
      technicalNote: 'The laptop remains the compute and data boundary. Wi-Fi clients send requests to the API, while retrieval, prompt assembly, and model inference stay on the host.',
      architecture: ['Phone or laptop', 'FastAPI on local Wi-Fi', 'Document retrieval', 'Local model and tools'],
      decisions: [
        {
          title: 'Laptop as the server',
          detail: 'One machine owns the model and document index. Other trusted devices only need a browser or lightweight client on the same network.',
        },
        {
          title: 'Retrieval before generation',
          detail: 'Documents are chunked, embedded, and searched first. Only relevant passages are added to the prompt, keeping context focused and traceable.',
        },
        {
          title: 'Explicit task boundary',
          detail: 'FastAPI routes separate chat, retrieval, and task actions so each capability can be tested, secured, and extended independently.',
        },
      ],
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
