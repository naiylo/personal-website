import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Project } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';
import { ProjectCardComponent } from '../project-card/project-card';
import { SectionHeadingComponent } from '../section-heading/section-heading';

@Component({
  selector: 'app-selected-work',
  imports: [SectionHeadingComponent, ProjectCardComponent, RevealDirective],
  templateUrl: './selected-work.html',
  styleUrl: './selected-work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedWorkComponent {
  readonly projects = input.required<readonly Project[]>();
}
