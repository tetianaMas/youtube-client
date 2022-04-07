import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

enum DatePeriod {
  week = 7,
  month = 30,
  yearHalf = 180,
}

enum ColorClasses {
  bigAmount = 'red-border',
  mediumAmount = 'green-border',
  smallAmount = 'blue-border',
}

const MILLISECONDS_IN_DAY = 86400000;

@Directive({
  selector: '[ytubeClientDateStatusColor]',
})
export class DateStatusColorDirective implements AfterViewInit {
  @Input('ytubeClientDateStatusColor') public statusColor: string = '';

  private readonly date: Date = new Date();

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    if (!this.statusColor) return;

    const currentDate = new Date(this.statusColor.substring(0, 10));
    const diff = Math.floor((this.date.getTime() - currentDate.getTime()) / MILLISECONDS_IN_DAY);

    if (diff < DatePeriod.week) {
      this.setBorderStyle(ColorClasses.smallAmount);
    } else if (diff < DatePeriod.month && diff >= DatePeriod.week) {
      this.setBorderStyle(ColorClasses.mediumAmount);
    } else if (diff >= DatePeriod.yearHalf) {
      this.setBorderStyle(ColorClasses.bigAmount);
    }
  }

  private setBorderStyle(colorClass: string): void {
    this.renderer.addClass(this.elRef.nativeElement, colorClass);
  }
}
