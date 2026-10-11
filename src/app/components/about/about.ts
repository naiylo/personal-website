import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioData } from '../../models/portfolio.model';
import { PixelSpriteComponent } from '../pixel-sprite/pixel-sprite';
import { SectionHeadingComponent } from '../section-heading/section-heading';

@Component({
  selector: 'app-about',
  imports: [SectionHeadingComponent, PixelSpriteComponent, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly portfolio = input.required<PortfolioData>();
}
