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
  private loop?: ReturnType<typeof gsap.timeline>;
  private observer?: IntersectionObserver;
  private isInView = false;
  private readonly visibilityHandler = () => this.syncLoopPlayback();

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.motion = gsap.matchMedia();
      this.motion.add(
        motionPreference,
        () => {
          const root = this.host.nativeElement;
          const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

          intro
            .fromTo('.headline-line', { yPercent: 22 }, { yPercent: 0, duration: 0.62, clearProps: 'transform' })
            .fromTo('.intro, .hero-actions', { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.07, clearProps: 'transform,opacity,visibility' }, '-=.28')
            .fromTo('.project-stage', { clipPath: 'inset(4% 4% 4% 4%)', autoAlpha: 0 }, { clipPath: 'inset(0% 0% 0% 0%)', autoAlpha: 1, duration: 0.58, clearProps: 'clip-path,opacity,visibility' }, '-=.45');

          const cards = gsap.utils.toArray<HTMLElement>('.project-glimpse', root);
          this.loop = gsap.timeline({ repeat: -1, paused: true });
          this.loop.set(cards, { autoAlpha: 0, y: 14 });

          cards.forEach((card) => {
            const timer = card.querySelector('.loop-timer');
            const scan = card.querySelector('.preview-scan');
            const flow = card.querySelector('.assistant-fragment > span i');
            const start = this.loop!.duration();
            this.loop!
              .set(card, { autoAlpha: 1, y: 0 }, start)
              .fromTo(timer, { scaleX: 0 }, { scaleX: 1, duration: 3.4, ease: 'none' }, start)
              .to(card, { autoAlpha: 0, y: -12, duration: 0.34, ease: 'power2.in' }, start + 3.4);

            if (scan) {
              this.loop!.fromTo(scan, { y: 0 }, { y: 175, duration: 1.45, repeat: 1, ease: 'steps(5)' }, start);
            }
            if (flow) {
              this.loop!.fromTo(flow, { x: 0, autoAlpha: 0 }, { x: 65, autoAlpha: 1, duration: 1.55, repeat: 1, ease: 'power2.inOut' }, start);
            }
          });

          this.observer = new IntersectionObserver(([entry]) => {
            this.isInView = Boolean(entry?.isIntersecting);
            this.syncLoopPlayback();
          }, { threshold: 0.2 });
          this.observer.observe(root);
          document.addEventListener('visibilitychange', this.visibilityHandler);

          return () => {
            intro.kill();
            this.loop?.kill();
            this.observer?.disconnect();
            document.removeEventListener('visibilitychange', this.visibilityHandler);
          };
        },
        this.host.nativeElement,
      );
    });
  }

  ngOnDestroy(): void {
    this.motion?.revert();
  }

  private syncLoopPlayback(): void {
    if (document.hidden || !this.isInView) this.loop?.pause();
    else this.loop?.play();
  }
}
