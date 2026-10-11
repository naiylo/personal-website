import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type SpriteVariant = 'bot' | 'orb' | 'runner';

@Component({
  selector: 'app-pixel-sprite',
  templateUrl: './pixel-sprite.html',
  styleUrl: './pixel-sprite.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PixelSpriteComponent {
  readonly variant = input<SpriteVariant>('bot');
}
