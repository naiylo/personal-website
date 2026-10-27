import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PORTFOLIO } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly portfolio = PORTFOLIO;
  protected readonly currentYear = new Date().getFullYear();
  protected readonly detectorScores = ['88%', '54%', '67%', '70%'];
  protected readonly skillDescriptions = [
    'Models, retrieval, and computer vision built with attention to how results reach people.',
    'Production-minded APIs and interfaces that turn experiments into usable software.',
    'Research translated into reproducible pipelines, measurements, and working tools.',
    'The delivery layer: version control, CI/CD, automation, and maintainable workflows.',
  ];
}
