import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';

interface DemoThumbnail {
  readonly score: string;
  readonly segment: number;
}

@Component({
  selector: 'app-thumbnail-detector-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="detector-demo" aria-label="Interactive AI thumbnail detector demonstration">
      <header>
        <div class="browser-dots" aria-hidden="true"><i></i><i></i><i></i></div>
        <strong class="youtube-brand"><span aria-hidden="true"></span>YouTube</strong>
        <div class="top-search" aria-hidden="true">Search <svg viewBox="0 0 16 16"><circle cx="6.8" cy="6.8" r="4.4" /><path d="m10.1 10.1 3.2 3.2" /></svg></div>
        <div class="browser-tools" aria-hidden="true"><i></i><i></i></div>
        <button type="button" aria-label="Replay thumbnail analysis" [disabled]="analyzing()" (click)="runAnalysis()">
          @if (analyzing()) { <span>···</span> } @else { <svg viewBox="0 0 20 20"><path d="M16.5 7A7 7 0 0 0 4.3 4.5L3 6m0 0V2.5M3 6h3.5M3.5 13A7 7 0 0 0 15.7 15.5L17 14m0 0v3.5M17 14h-3.5" /></svg> }
        </button>
      </header>

      <div class="browser-body">
        <nav aria-hidden="true"><i></i><i></i><i></i><i></i></nav>
        <div class="feed">
          <div class="thumbnail-grid">
            @for (tile of thumbnails; track tile.segment; let index = $index) {
              <article [class.is-active]="activeFrame() === index" [attr.aria-label]="tile.score + ' AI-likelihood score'">
                <div class="thumbnail-crop" [style.--segment]="tile.segment">
                  <img src="youtube-thumbnail-detector.png" alt="" width="1709" height="327" />
                  @if (activeFrame() === index && analyzing()) {
                    <i class="scan-line" aria-hidden="true"></i>
                  }
                  @if (activeFrame() >= index) {
                    <strong class="score-badge"><span>AI estimate</span>{{ tile.score }}</strong>
                  }
                </div>
                <div class="metadata" aria-hidden="true"><i></i><i></i></div>
              </article>
            }
          </div>
        </div>
      </div>

      <p class="visually-hidden" role="status" aria-live="polite">{{ statusText() }}</p>
    </section>
  `,
  styles: `
    :host { display: block; min-width: 0; }
    .detector-demo { overflow: hidden; background: var(--surface-raised); border: 1px solid var(--line); border-radius: var(--radius-card); }
    header { display: grid; grid-template-columns: auto auto minmax(100px, 1fr) auto auto; gap: .65rem; align-items: center; min-height: 42px; padding: .45rem .65rem; background: var(--surface); border-bottom: 1px solid var(--line); }
    .youtube-brand { display: inline-flex; gap: .3rem; align-items: center; font-size: .72rem; font-weight: 650; white-space: nowrap; }
    .youtube-brand span { width: 17px; height: 12px; background: #f11111; border-radius: 4px; }
    .top-search { display: flex; justify-content: space-between; padding: .45rem .75rem; color: var(--muted); background: var(--canvas); border: 1px solid var(--line); border-radius: 999px; font: 500 .62rem/1 var(--font-sans); }
    .top-search svg { width: 12px; height: 12px; fill: none; stroke: var(--ink); stroke-linecap: round; stroke-width: 1.7; }
    .browser-tools { display: flex; gap: .45rem; align-items: center; }
    .browser-tools i { width: 12px; height: 12px; border: 1.5px solid var(--muted); border-radius: 50%; }
    .browser-tools i + i { border-radius: 3px; }
    button { display:grid; width:30px; height:30px; padding:0; color:var(--ink); background:var(--surface-soft); border:1px solid var(--line-strong); border-radius:50%; cursor:pointer; font:600 1rem/1 var(--font-sans); place-items:center; }
    button:disabled { cursor:wait; color:var(--muted); }
    button svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.6; }
    .browser-dots { display: flex; gap: 4px; }
    .browser-dots i { width: 7px; height: 7px; background: var(--line-strong); border-radius: 50%; }
    .browser-dots i:first-child { background: var(--accent); }
    .browser-body { display: grid; grid-template-columns: 34px 1fr; }
    nav { display: grid; align-content: start; justify-items: center; gap: .9rem; padding-top: .9rem; background: var(--surface); border-right: 1px solid var(--line); }
    nav i { position:relative; width: 12px; height: 12px; border: 2px solid var(--muted); border-radius:3px; }
    nav i:nth-child(2), nav i:nth-child(4) { transform: rotate(45deg); }
    .feed { padding: .55rem; }
    .thumbnail-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .55rem; }
    article { min-width: 0; transition: transform 160ms steps(2), filter 160ms steps(2); }
    article.is-active { filter: saturate(1.08); transform: translateY(-2px); }
    .thumbnail-crop { position: relative; aspect-ratio: 16 / 9; overflow: hidden; background: var(--surface-soft); border-radius: 10px; }
    article.is-active .thumbnail-crop { outline: 2px solid var(--accent); outline-offset: 2px; }
    .thumbnail-crop img { position: absolute; top: 0; left: calc(var(--segment) * -105% - 4%); width: 420%; max-width: none; height: auto; }
    .score-badge { position:absolute; z-index:3; right:.35rem; bottom:.35rem; display:grid; gap:.08rem; min-width:3.7rem; padding:.38rem .45rem; color:var(--accent-ink); background:var(--accent); border-radius:8px; font:700 .72rem/1 var(--font-mono); font-variant-numeric:tabular-nums; box-shadow:0 7px 18px rgba(11,13,18,.34); }
    .score-badge span { font-size:.42rem; font-weight:600; letter-spacing:.02em; text-transform:uppercase; }
    .scan-line { position: absolute; z-index: 2; inset: 0 0 auto; height: 2px; background: var(--accent); box-shadow: 0 3px 10px rgba(244, 199, 40, .55); animation: scan 260ms steps(3) forwards; }
    .metadata { display: grid; gap: .2rem; margin-top: .25rem; }
    .metadata i { width: 72%; height: 3px; background: var(--line-strong); border-radius: 999px; }
    .metadata i + i { width: 44%; }
    .visually-hidden { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
    @keyframes scan { to { transform: translateY(95px); } }
    @media (max-width: 580px) {
      header { grid-template-columns: auto auto minmax(40px, 1fr) auto; gap:.45rem; }
      .top-search { min-width:0; }
      .browser-tools { display:none; }
      .browser-body { grid-template-columns: 30px 1fr; }
      nav { gap: .8rem; padding-top: 1rem; }
      nav i { width: 10px; height: 10px; }
      .feed { padding: .7rem; }
      .thumbnail-grid { gap: .5rem; }
      .score-badge { right:.25rem; bottom:.25rem; min-width:3.2rem; padding:.3rem .35rem; font-size:.64rem; }
    }
    @media (prefers-reduced-motion: reduce) {
      article { transition: none; }
      .scan-line { display: none; }
    }
  `,
})
export class ThumbnailDetectorDemoComponent implements AfterViewInit, OnDestroy {
  protected readonly thumbnails: readonly DemoThumbnail[] = [
    { score: '88%', segment: 0 },
    { score: '54%', segment: 1 },
    { score: '67%', segment: 2 },
    { score: '70%', segment: 3 },
  ];

  protected readonly activeFrame = signal(3);
  protected readonly analyzing = signal(false);
  protected readonly statusText = signal('Four thumbnails classified locally');

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly timers: number[] = [];
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          this.runAnalysis();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    this.observer.observe(this.host.nativeElement);
  }

  protected runAnalysis(): void {
    if (this.analyzing()) {
      return;
    }

    this.clearTimers();
    this.analyzing.set(true);
    this.activeFrame.set(-1);
    this.statusText.set('Analyzing thumbnail feed');

    this.thumbnails.forEach((_, index) => {
      this.timers.push(
        window.setTimeout(() => {
          this.activeFrame.set(index);
          this.statusText.set(`Thumbnail ${index + 1} of ${this.thumbnails.length} classified`);

          if (index === this.thumbnails.length - 1) {
            this.analyzing.set(false);
            this.statusText.set('Four thumbnails classified locally');
          }
        }, 260 * (index + 1)),
      );
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.clearTimers();
  }

  private clearTimers(): void {
    this.timers.forEach((timer) => window.clearTimeout(timer));
    this.timers.length = 0;
  }
}
