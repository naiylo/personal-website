import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioData } from '../../models/portfolio.model';
import { SectionHeadingComponent } from '../section-heading/section-heading';

@Component({
  selector: 'app-experience-tools',
  imports: [SectionHeadingComponent, RevealDirective],
  templateUrl: './experience-tools.html',
  styleUrl: './experience-tools.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceToolsComponent {
  readonly portfolio = input.required<PortfolioData>();
}
