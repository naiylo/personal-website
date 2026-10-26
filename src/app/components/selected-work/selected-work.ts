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

import { Project } from '../../models/portfolio.model';
import { gsap, motionPreference } from '../../motion/gsap';
import { ProjectCardComponent } from '../project-card/project-card';

@Component({
  selector: 'app-selected-work',
  imports: [ProjectCardComponent],
  templateUrl: './selected-work.html',
  styleUrl: './selected-work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedWorkComponent implements AfterViewInit, OnDestroy {
  readonly projects = input.required<readonly Project[]>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private motion?: ReturnType<typeof gsap.matchMedia>;

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.motion = gsap.matchMedia();
      this.motion.add(
        motionPreference,
        () => {
          const entries = gsap.utils.toArray<HTMLElement>('.project-entry', this.host.nativeElement);

          entries.forEach((entry) => {
            const copy = entry.querySelector('.project-copy');
            const visual = entry.querySelector('.project-visual');
            const architecture = entry.querySelector('.architecture');
            const caseStudy = entry.querySelector('.case-study');

            gsap.timeline({
              defaults: { duration: 0.62, ease: 'power3.out' },
              scrollTrigger: {
                trigger: entry,
                start: 'top 82%',
                end: 'top 38%',
                toggleActions: 'play none none reverse',
              },
            })
              .fromTo(copy, { x: -24, autoAlpha: 0 }, { x: 0, autoAlpha: 1, clearProps: 'transform,opacity,visibility' })
              .fromTo(visual, { x: 24, clipPath: 'inset(2% 3% 2% 3%)' }, { x: 0, clipPath: 'inset(0% 0% 0% 0%)', clearProps: 'transform,clip-path' }, '<.08')
              .fromTo(architecture, { scaleX: 0.96, autoAlpha: 0 }, { scaleX: 1, autoAlpha: 1, clearProps: 'transform,opacity,visibility' }, '-=.28')
              .fromTo(caseStudy, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, clearProps: 'transform,opacity,visibility' }, '-=.32');
          });
        },
        this.host.nativeElement,
      );
    });
  }

  ngOnDestroy(): void {
    this.motion?.revert();
  }
}
