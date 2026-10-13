import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { PortfolioData } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience-tools',
  templateUrl: './experience-tools.html',
  styleUrl: './experience-tools.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceToolsComponent {
  readonly portfolio = input.required<PortfolioData>();
}
