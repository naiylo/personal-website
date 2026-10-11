import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  inject,
  input,
} from '@angular/core';

import { PortfolioData } from '../../models/portfolio.model';
import { gsap, motionPreference } from '../../motion/gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly portfolio = input.required<PortfolioData>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private motion?: ReturnType<typeof gsap.matchMedia>;

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.motion = gsap.matchMedia();
      this.motion.add(motionPreference, () => {
        const context = gsap.context(() => {
          const timeline = gsap.timeline({
            defaults: { ease: 'power3.out' },
          });

          // The opening is the page's one authored motion moment: context,
          // message, and actions arrive in the same order that they are read.
          timeline
            .fromTo(
              '.hero-kicker',
              { opacity: 0, y: -10 },
              { opacity: 1, y: 0, duration: 0.45, clearProps: 'transform,opacity' },
            )
            .fromTo(
              '.headline-line',
              { opacity: 0, yPercent: 105 },
              {
                opacity: 1,
                yPercent: 0,
                duration: 0.85,
                stagger: 0.09,
                clearProps: 'transform,opacity',
              },
              '-=0.18',
            )
            .fromTo(
              '.hero-footer > *',
              { opacity: 0, y: 18 },
              {
                opacity: 1,
                y: 0,
                duration: 0.62,
                stagger: 0.08,
                clearProps: 'transform,opacity',
              },
              '-=0.35',
            );
        }, this.host.nativeElement);

        return () => context.revert();
      });
    });
  }

  ngOnDestroy(): void {
    this.motion?.revert();
  }
}
