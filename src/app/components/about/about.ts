import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { PortfolioData } from '../../models/portfolio.model';
import { SectionHeadingComponent } from '../section-heading/section-heading';

@Component({
  selector: 'app-about',
  imports: [SectionHeadingComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly portfolio = input.required<PortfolioData>();
}
