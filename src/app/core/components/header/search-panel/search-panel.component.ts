import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { DEBOUNCE_TIME, QUERY_KEY } from 'src/app/shared/constants';

const BTN_TEXT: string = 'search';
const INPUT_PLACEHOLDER_TEXT = 'What do you want to find?';
const BTN_RADIUS: string = '0 4px 4px 0';
const MIN_SEARCH_LENGTH = 3;

@Component({
  selector: 'ytube-client-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  readonly btnText = BTN_TEXT;

  readonly btnRadius = BTN_RADIUS;

  readonly placeholderText = INPUT_PLACEHOLDER_TEXT;

  @Input() isUserLoggedIn: boolean = false;

  seachInput: string = '';

  seachValue$ = new Subject<string>();

  constructor(private router: Router) {
    this.seachValue$.pipe(debounceTime(DEBOUNCE_TIME), distinctUntilChanged()).subscribe((val) => this.search(val));
  }

  onSearch(): void {
    const searchVal = this.seachInput.trim();
    if (!searchVal || searchVal.length < MIN_SEARCH_LENGTH) {
      return;
    }
    this.seachValue$.next(searchVal);
  }

  search(term: string) {
    const params = { queryParams: { [QUERY_KEY]: term } };
    this.router.navigate(['main'], params);
    this.seachInput = '';
  }
}
