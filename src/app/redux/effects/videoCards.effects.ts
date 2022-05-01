import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { map, mergeMap } from 'rxjs/operators';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { YoutubeCardActionType } from '../actionTypes.model';

type SearchActionType = {
  search: string;
} & TypedAction<YoutubeCardActionType.searchCards>;

@Injectable()
export class VideoCardsEffects {
  constructor(private actions$: Actions, private ytService: YoutubeService) {}

  searchCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType<SearchActionType>(YoutubeCardActionType.searchCards),
      mergeMap((action) => this.ytService.searchCards(action.search)),
      map((videos) => {
        return { type: YoutubeCardActionType.addCards, videoCards: videos };
      }),
    ),
  );
}
