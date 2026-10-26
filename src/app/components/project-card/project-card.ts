import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Project } from '../../models/portfolio.model';
import { ThumbnailDetectorDemoComponent } from '../thumbnail-detector-demo/thumbnail-detector-demo';

@Component({
  selector: 'app-project-card',
  imports: [ThumbnailDetectorDemoComponent],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
