import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeadingComponent {
  readonly index = input.required<string>();
  readonly firstLine = input.required<string>();
  readonly secondLine = input<string>('');
  readonly label = input.required<string>();
}
