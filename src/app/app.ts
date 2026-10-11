import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PORTFOLIO } from './data/portfolio.data';
import { AboutComponent } from './components/about/about';
import { ContactFooterComponent } from './components/contact-footer/contact-footer';
import { ExperienceToolsComponent } from './components/experience-tools/experience-tools';
import { HeroComponent } from './components/hero/hero';
import { SelectedWorkComponent } from './components/selected-work/selected-work';
import { SiteHeaderComponent } from './components/site-header/site-header';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeaderComponent,
    HeroComponent,
    SelectedWorkComponent,
    AboutComponent,
    ExperienceToolsComponent,
    ContactFooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly portfolio = PORTFOLIO;
}
