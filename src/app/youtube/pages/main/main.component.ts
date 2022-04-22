import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QUERY_KEY } from 'src/app/shared/constants';
import { Store } from '@ngrx/store';
import { StoreState } from 'src/app/redux/state.model';
import { selectAllCards } from 'src/app/redux/selectors/app.selectors';
import { CardAbstract } from 'src/app/shared/models/card-abstract';
import { searchCards } from 'src/app/redux/actions/youTubeApi.actions';

@Component({
  selector: 'ytube-client-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  cards$: Observable<CardAbstract[]> = this.store.select(selectAllCards);

  constructor(private route: ActivatedRoute, private store: Store<StoreState>) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ [QUERY_KEY]: search }) => search && this.store.dispatch(searchCards({ search })));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
