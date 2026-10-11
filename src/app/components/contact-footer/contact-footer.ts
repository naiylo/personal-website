import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioData } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact-footer',
  imports: [RevealDirective],
  templateUrl: './contact-footer.html',
  styleUrl: './contact-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFooterComponent {
  readonly portfolio = input.required<PortfolioData>();
  protected readonly year = new Date().getFullYear();
}
