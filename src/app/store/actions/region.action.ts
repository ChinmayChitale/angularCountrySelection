import { createAction, props } from '@ngrx/store';
import { regions, countries } from '../models/region.model';

export const getAllRegionsAction = createAction(
    'Regions',
    props<{ payload: regions[] }>()
  );

export const getAllCountriesAction = createAction(
    'Countries',
    props<{ payload: countries[] }>()
  );