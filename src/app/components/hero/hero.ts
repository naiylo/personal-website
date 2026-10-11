import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { PortfolioData } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly portfolio = input.required<PortfolioData>();
}
