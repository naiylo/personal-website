export type Accent = 'yellow' | 'green' | 'blue';
export type PreviewKind = 'systems' | 'voxel' | 'research';

export interface Project {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly technologies: readonly string[];
  readonly status: string;
  readonly accent: Accent;
  readonly preview: PreviewKind;
  readonly href?: string;
}

export interface Experience {
  readonly period: string;
  readonly role: string;
  readonly organization: string;
  readonly summary: string;
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
  readonly focusAreas: readonly string[];
  readonly technologies: readonly string[];
  readonly experience: readonly Experience[];
}
