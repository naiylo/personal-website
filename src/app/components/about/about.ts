import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { PortfolioData } from '../../models/portfolio.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly portfolio = input.required<PortfolioData>();
}
