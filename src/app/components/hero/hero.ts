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
              { yPercent: 16 },
              {
                yPercent: 0,
                duration: 0.62,
                stagger: 0.08,
                clearProps: 'transform,opacity,visibility',
              },
            )
            .fromTo(
              '.hero-role',
              { x: -12 },
              { x: 0, duration: 0.42, clearProps: 'transform' },
              '-=0.42',
            )
            .fromTo(
              '.intro, .hero-actions, .current-context',
              { y: 12 },
              {
                y: 0,
                duration: 0.44,
                stagger: 0.07,
                clearProps: 'transform',
              },
              '-=0.3',
            )
            .fromTo(
              '.hero-portrait, .hero-world',
              { clipPath: 'inset(8% 8% 8% 8%)' },
              {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 0.52,
                clearProps: 'clip-path',
              },
              '-=0.55',
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
