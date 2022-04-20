import { createAction, props } from '@ngrx/store';
import { regions } from '../models/region.model';

export const getAllRegionsAction = createAction(
    'Regions',
    props<{ payload: regions[] }>()
  );