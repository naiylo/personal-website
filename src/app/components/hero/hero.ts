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
      this.motion.add(
        motionPreference,
        () => {
          const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

          timeline
            .fromTo(
              '.headline-line',
              { autoAlpha: 0, yPercent: 105 },
              {
                autoAlpha: 1,
                yPercent: 0,
                duration: 0.82,
                stagger: 0.08,
                clearProps: 'transform,opacity,visibility',
              },
            )
            .fromTo(
              '.hero-role',
              { autoAlpha: 0, x: -18 },
              { autoAlpha: 1, x: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' },
              '-=0.42',
            )
            .fromTo(
              '.hero-lower > *',
              { autoAlpha: 0, y: 18 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.56,
                stagger: 0.07,
                clearProps: 'transform,opacity,visibility',
              },
              '-=0.3',
            );

          return () => timeline.revert();
        },
        this.host.nativeElement,
      );
    });
  }

  ngOnDestroy(): void {
    this.motion?.revert();
  }
}
