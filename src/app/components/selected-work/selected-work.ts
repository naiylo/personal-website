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
import { SectionHeadingComponent } from '../section-heading/section-heading';

@Component({
  selector: 'app-selected-work',
  imports: [SectionHeadingComponent, ProjectCardComponent],
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
      this.motion.add(motionPreference, () => {
        const context = gsap.context(() => {
          // Keep project content present for accessibility and only animate once
          // the section actually reaches the viewport.
          gsap.fromTo(
            '.project-slot',
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.72,
              stagger: 0.1,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: '.projects',
                start: 'top 82%',
                once: true,
              },
            },
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
