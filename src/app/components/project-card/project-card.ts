import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

import { Project } from '../../models/portfolio.model';
import { ScrollTrigger } from '../../motion/gsap';
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
  protected readonly notesOpen = signal(false);

  protected setNotesOpen(open: boolean): void {
    this.notesOpen.set(open);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }
}
