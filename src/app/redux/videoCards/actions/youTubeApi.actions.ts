import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/shared/models/card.model';

export const addCards = createAction('[Youtube API] add cards', props<{ videoCards: Card[] }>());
