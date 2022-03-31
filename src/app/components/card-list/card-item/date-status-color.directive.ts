import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

enum DatePeriod {
  week = 7,
  month = 30,
  yearHalf = 180,
}

enum Colors {
  hugeAmount = '#EB5757',
  bigAmount = '#F2C94C',
  mediumAmount = '#27AE60',
  smallAmount = '#2F80ED',
}

const MILLISECONDS_IN_DAY: number = 1000 * 60 * 60 * 24;
const BORDER_DEF_STYLE = 'inset 5px';

@Directive({
  selector: '[ytubeClientDateStatusColor]',
})
export class DateStatusColorDirective implements AfterViewInit {
  @Input('ytubeClientDateStatusColor') public statusColor: string = '';

  private readonly date: Date = new Date();

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.setBorderStyle();
  }

  public ngAfterViewInit(): void {
    if (!this.statusColor) return;

    const currentDate = new Date(this.statusColor.substring(0, 10));
    const diff = Math.floor((this.date.getTime() - currentDate.getTime()) / MILLISECONDS_IN_DAY);

    if (diff < DatePeriod.week) {
      this.setBorderStyle(Colors.smallAmount);
    } else if (diff < DatePeriod.month && diff >= DatePeriod.week) {
      this.setBorderStyle(Colors.mediumAmount);
    } else if (diff >= DatePeriod.yearHalf) {
      this.setBorderStyle(Colors.hugeAmount);
    }
  }

  private setBorderStyle(color: string = Colors.bigAmount): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'border-bottom', `${BORDER_DEF_STYLE} ${color}`);
  }
}
