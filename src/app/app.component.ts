import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('filtersShowing', [
      transition('active => void', [
        style({
          opacity: 1.0,
          transform: 'translateY(0)',
        }),
        animate(
          '250ms ease-in',
          style({
            opacity: 0.0,
            transform: 'translateY(-15%)',
          }),
        ),
      ]),
      transition('void => active', [
        style({
          opacity: 0.0,
          transform: 'translateY(-15%)',
        }),
        animate(
          '250ms ease-in',
          style({
            opacity: 1.0,
            transform: 'translateY(0)',
          }),
        ),
      ]),
    ]),
    trigger('smoothMoving', [
      state('up', style({ transform: 'translateY(3%)' })),
      state('down', style({ transform: 'translateY(0)' })),
      transition('up <=> down', [animate('400ms cubic-bezier(0.25, 0.1, 0.25, 1)')]),
    ]),
  ],
})
export class AppComponent {
  public isShowingFilters: boolean = false;

  public filtersState: string = 'none';

  public listState: string = 'up';

  toggleFilters(): void {
    this.filtersState = 'active';
    this.isShowingFilters = !this.isShowingFilters;
  }
}
