import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { BORDER_DEF_STYLE, Colors, DatePeriod, MILLISECONDS_IN_DAY } from '../constants';

@Directive({
  selector: '[appDateStatusColor]',
})
export class DateStatusColorDirective implements OnInit {
  @Input() appDateStatusColor: string = '';

  private readonly date: Date = new Date();

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.setBorderStyle();
  }

  public ngOnInit(): void {
    if (!this.appDateStatusColor) return;

    const currentDate = new Date(this.appDateStatusColor.substring(0, 10));
    const diff = Math.floor((this.date.getTime() - currentDate.getTime()) / MILLISECONDS_IN_DAY);

    if (diff < DatePeriod.WEEK) {
      this.setBorderStyle(Colors.smallAmount);
    } else if (diff < DatePeriod.MONTH && diff >= DatePeriod.WEEK) {
      this.setBorderStyle(Colors.mediumAmount);
    } else if (diff >= DatePeriod.YEAR_HALF) {
      this.setBorderStyle(Colors.hugeAmount);
    }
  }

  private setBorderStyle(color: string = Colors.bigAmount): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'border-bottom', BORDER_DEF_STYLE + color);
  }
}
