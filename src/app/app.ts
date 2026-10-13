import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, inject } from '@angular/core';

import { PORTFOLIO } from './data/portfolio.data';
import { gsap, motionPreference } from './motion/gsap';
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
    ExperienceToolsComponent,
    ContactFooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly portfolio = PORTFOLIO;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private readonly motion = gsap.matchMedia();

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.motion.add(motionPreference, () => {
        const root = this.host.nativeElement;
        const reveal = (selector: string, distance = 22) => {
          root.querySelectorAll<HTMLElement>(selector).forEach((element) => {
            gsap.fromTo(element, { autoAlpha: 0, y: distance }, {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: 'power3.out',
              clearProps: 'all',
              scrollTrigger: { trigger: element, start: 'top 90%', once: true },
            });
          });
        };

        reveal('.work-panel, .experience-panel, .expertise, .contact-inner');
        reveal('.timeline article, .skill-grid article', 14);
      }, this.host.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.motion.revert();
  }
}
