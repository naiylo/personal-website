export type PreviewKind = 'thumbnail' | 'llm' | 'rag';

export interface Project {
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly technologies: readonly string[];
  readonly status: string;
  readonly preview: PreviewKind;
  readonly problem: string;
  readonly approach: string;
  readonly currentFocus: string;
  readonly repositoryUrl?: string;
  readonly demoUrl?: string;
}

export interface SkillGroup {
  readonly name: string;
  readonly skills: readonly string[];
}

export interface Experience {
  readonly period: string;
  readonly role: string;
  readonly organization: string;
  readonly summary: string;
}

export interface Education {
  readonly period: string;
  readonly degree: string;
  readonly institution: string;
  readonly detail: string;
}

export interface PortfolioData {
  readonly name: string;
  readonly shortName: string;
  readonly location: string;
  readonly email: string;
  readonly github: string;
  readonly linkedin: string;
  readonly intro: string;
  readonly about: readonly string[];
  readonly projects: readonly Project[];
  readonly skillGroups: readonly SkillGroup[];
  readonly education: readonly Education[];
  readonly experience: readonly Experience[];
}
