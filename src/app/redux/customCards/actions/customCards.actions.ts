import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'src/app/shared/models/custom-card.model';

export const addCustomCard = createAction('[Admin Page] add card', props<{ card: CustomCard }>());
