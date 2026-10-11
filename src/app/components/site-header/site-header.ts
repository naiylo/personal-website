import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  readonly brand = input.required<string>();
  readonly github = input.required<string>();
}
