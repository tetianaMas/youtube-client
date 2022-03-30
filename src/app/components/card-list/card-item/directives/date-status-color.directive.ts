import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BORDER_DEF_STYLE, Colors, DatePeriod, MILLISECONDS_IN_DAY } from '../constants';

@Directive({
  selector: '[appDateStatusColor]',
})
export class DateStatusColorDirective implements OnInit {
  @Input() appDateStatusColor: string = '';

  private readonly date: Date = new Date();

  constructor(private elRef: ElementRef) {}

  public ngOnInit(): void {
    this.elRef.nativeElement.style.borderBottom = BORDER_DEF_STYLE;
    if (this.appDateStatusColor) {
      this.setCurrentColor();
    }
  }

  private setCurrentColor(): void {
    const currElem = this.elRef.nativeElement;
    const currentDate = new Date(this.appDateStatusColor.substring(0, 10));
    const diff = Math.floor((this.date.getTime() - currentDate.getTime()) / MILLISECONDS_IN_DAY);

    if (diff < DatePeriod.WEEK) {
      currElem.style.borderBottomColor = Colors.smallAmount;
    } else if (diff < DatePeriod.MONTH && diff >= DatePeriod.WEEK) {
      currElem.style.borderBottomColor = Colors.mediumAmount;
    } else if (diff >= DatePeriod.YEAR_HALF) {
      currElem.style.borderBottomColor = Colors.hugeAmount;
    }
  }
}
