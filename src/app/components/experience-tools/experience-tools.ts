import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { PortfolioData } from '../../models/portfolio.model';
import { SectionHeadingComponent } from '../section-heading/section-heading';

@Component({
  selector: 'app-experience-tools',
  imports: [SectionHeadingComponent],
  templateUrl: './experience-tools.html',
  styleUrl: './experience-tools.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceToolsComponent {
  readonly portfolio = input.required<PortfolioData>();
}
