import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'src/app/shared/models/custom-card.model';
import { CardActionType } from '../actionTypes.model';

export const addCustomCard = createAction(CardActionType.addCustomCard, props<{ card: CustomCard }>());
