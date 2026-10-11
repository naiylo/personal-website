import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
