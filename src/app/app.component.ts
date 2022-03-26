import { animate, style, transition, trigger } from '@angular/animations';
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
          '300ms ease-in',
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
          '300ms ease-in',
          style({
            opacity: 1.0,
            transform: 'translateY(0)',
          }),
        ),
      ]),
    ]),
    trigger('smoothMoving', [
      transition('up => down', [
        style({
          transform: 'translateY(0)',
        }),
        animate(
          '300ms ease-in',
          style({
            transform: 'translateY(-2%)',
          }),
        ),
      ]),
      transition('down => up', [
        style({
          transform: 'translateY(-2%)',
        }),
        animate(
          '300ms ease-in',
          style({
            transform: 'translateY(0)',
          }),
        ),
      ]),
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
