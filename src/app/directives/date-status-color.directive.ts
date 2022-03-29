import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateStatusColor]',
})
export class DateStatusColorDirective implements OnInit {
  @Input() appDateStatusColor = '';

  private readonly hugeAmountColor: string = '#EB5757';

  private readonly bigAmountColor: string = '#F2C94C';

  private readonly mediumAmountColor: string = '#27AE60';

  private readonly smallAmountColor: string = '#2F80ED';

  private readonly date: Date = new Date();

  private readonly MILLISECONDS_IN_DAY: number = 1000 * 60 * 60 * 24;

  private readonly WEEK: number = 7;

  private readonly MONTH: number = 30;

  private readonly YEAR_HALF: number = 180;

  private readonly BORDER_DEF_STYLE = `inset 5px ${this.smallAmountColor}`;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    const currentDate = new Date(this.appDateStatusColor.substring(0, 10));
    const diff = Math.floor((this.date.getTime() - currentDate.getTime()) / this.MILLISECONDS_IN_DAY);
    let currElem = this.elRef.nativeElement;
    currElem.style.borderBottom = this.BORDER_DEF_STYLE;

    if (diff < this.WEEK) {
      currElem.style.borderBottomColor = this.smallAmountColor;
    } else if (diff < this.MONTH && diff >= this.WEEK) {
      currElem.style.borderBottomColor = this.mediumAmountColor;
    } else if (diff >= this.MONTH && diff < this.YEAR_HALF) {
      currElem.style.borderBottomColor = this.bigAmountColor;
    } else if (diff >= this.YEAR_HALF) {
      currElem.style.borderBottomColor = this.hugeAmountColor;
    }
  }
}
