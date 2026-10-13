import { ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, computed, inject, input, signal } from '@angular/core';

import { Project } from '../../models/portfolio.model';
import { gsap } from '../../motion/gsap';
import { ProjectCardComponent } from '../project-card/project-card';

@Component({
  selector: 'app-selected-work',
  imports: [ProjectCardComponent],
  templateUrl: './selected-work.html',
  styleUrl: './selected-work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedWorkComponent implements OnDestroy {
  readonly projects = input.required<readonly Project[]>();
  protected readonly transitioning = signal(false);
  protected readonly activeIndex = signal(0);
  protected readonly position = computed(() => {
    const current = String(this.activeIndex() + 1).padStart(2, '0');
    const total = String(this.projects().length).padStart(2, '0');
    return `${current} / ${total}`;
  });
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private transitionTimeline?: ReturnType<typeof gsap.timeline>;
  private entranceTween?: ReturnType<typeof gsap.to>;

  protected previous(): void {
    this.switchProject(-1);
  }

  protected next(): void {
    this.switchProject(1);
  }

  private switchProject(direction: -1 | 1): void {
    const count = this.projects().length;
    if (count < 1 || this.transitioning()) return;

    const nextIndex = (this.activeIndex() + direction + count) % count;
    const cards = this.host.nativeElement.querySelectorAll<HTMLElement>('.project-slide');
    const currentCard = cards[this.activeIndex()];
    const nextCard = cards[nextIndex];
    if (!currentCard || !nextCard || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.activeIndex.set(nextIndex);
      return;
    }

    this.transitioning.set(true);
    this.zone.runOutsideAngular(() => {
      gsap.set(nextCard, { autoAlpha: 0, y: 14 });
      this.transitionTimeline = gsap.timeline({
        onComplete: () => {
          currentCard.querySelector('details[open]')?.removeAttribute('open');
          this.zone.run(() => this.activeIndex.set(nextIndex));

          requestAnimationFrame(() => {
            gsap.set(currentCard, { clearProps: 'all' });
            this.entranceTween = gsap.to(
              nextCard,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.36,
                ease: 'power3.out',
                clearProps: 'all',
                onComplete: () => this.zone.run(() => this.transitioning.set(false)),
              },
            );
          });
        },
      });

      this.transitionTimeline.to(currentCard, {
        autoAlpha: 0,
        x: direction * 18,
        duration: 0.2,
        ease: 'power2.in',
      });
    });
  }

  ngOnDestroy(): void {
    this.transitionTimeline?.kill();
    this.entranceTween?.kill();
  }
}
