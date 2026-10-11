import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { PortfolioData } from '../../models/portfolio.model';
import { PixelSpriteComponent } from '../pixel-sprite/pixel-sprite';

@Component({
  selector: 'app-hero',
  imports: [PixelSpriteComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly portfolio = input.required<PortfolioData>();
}
