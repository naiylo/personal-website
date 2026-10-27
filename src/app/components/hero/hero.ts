import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  inject,
  input,
  signal,
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
  protected readonly activeProject = signal(0);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private motion?: ReturnType<typeof gsap.matchMedia>;

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.motion = gsap.matchMedia();
      this.motion.add(
        motionPreference,
        () => {
          const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

          intro
            .fromTo('.headline-line', { yPercent: 22 }, { yPercent: 0, duration: 0.62, clearProps: 'transform' })
            .fromTo('.intro, .hero-actions', { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.07, clearProps: 'transform,opacity,visibility' }, '-=.28')
            .fromTo('.project-stage', { clipPath: 'inset(4% 4% 4% 4%)', autoAlpha: 0 }, { clipPath: 'inset(0% 0% 0% 0%)', autoAlpha: 1, duration: 0.58, clearProps: 'clip-path,opacity,visibility' }, '-=.45');

          return () => {
            intro.kill();
          };
        },
        this.host.nativeElement,
      );
    });
  }

  ngOnDestroy(): void {
    this.motion?.revert();
  }

  protected selectProject(index: number): void {
    if (this.activeProject() === index) return;
    this.activeProject.set(index);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.zone.runOutsideAngular(() => {
      window.requestAnimationFrame(() => {
        const panel = this.host.nativeElement.querySelector('.project-glimpse');
        if (!panel) return;

        gsap.fromTo(
          panel,
          { clipPath: 'inset(0 0 8% 0)', y: 10, autoAlpha: 0 },
          { clipPath: 'inset(0 0 0% 0)', y: 0, autoAlpha: 1, duration: 0.38, ease: 'power3.out', clearProps: 'clip-path,transform,opacity,visibility', overwrite: 'auto' },
        );
      });
    });
  }
}
