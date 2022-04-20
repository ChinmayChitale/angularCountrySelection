
import { regions } from "../models/region.model";
import { createReducer, on, Action } from '@ngrx/store';
import * as regionsAction from "../actions/region.action"

export const initialState: regions = {
  name: '',
  id: 0,
  countries:[]
};

const regionsReducerInternal = createReducer(
  initialState,
  on(regionsAction.getAllRegionsAction, (state, { payload }) => ({
    ...state,
    loading: false,
    selectedItem: payload,
  })),
);